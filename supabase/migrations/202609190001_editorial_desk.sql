-- Run this migration in Supabase SQL Editor (or with the Supabase CLI) before deploying.
create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid unique references auth.users(id) on delete set null,
  email text not null unique check (email = lower(email)),
  full_name text,
  role text not null default 'advocate' check (role in ('owner', 'advocate')),
  can_publish boolean not null default false,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  title text not null,
  author_name text not null,
  excerpt text not null,
  content_html text not null,
  cover_image text,
  cover_alt text,
  tags text[] not null default '{}',
  seo_title text not null,
  seo_description text not null,
  status text not null default 'draft' check (status in ('draft', 'in_review', 'changes_requested', 'scheduled', 'published', 'archived')),
  review_note text,
  published_at timestamptz,
  created_by uuid not null references auth.users(id),
  deleted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint cover_alt_when_image check (cover_image is null or coalesce(length(trim(cover_alt)), 0) > 0)
);

create table if not exists public.blog_redirects (
  old_slug text primary key,
  new_slug text not null references public.blog_posts(slug) on delete cascade on update cascade,
  created_at timestamptz not null default now(),
  check (old_slug <> new_slug)
);

create index if not exists blog_posts_public_index on public.blog_posts (status, published_at desc) where deleted_at is null;
create index if not exists blog_posts_author_index on public.blog_posts (created_by, updated_at desc);

create or replace function public.set_updated_at() returns trigger language plpgsql security invoker as $$
begin new.updated_at = now(); return new; end;
$$;
drop trigger if exists admin_users_set_updated_at on public.admin_users;
create trigger admin_users_set_updated_at before update on public.admin_users for each row execute procedure public.set_updated_at();
drop trigger if exists blog_posts_set_updated_at on public.blog_posts;
create trigger blog_posts_set_updated_at before update on public.blog_posts for each row execute procedure public.set_updated_at();

-- Direct client writes are prohibited. The Next.js server uses the service key only after
-- verifying the user's Supabase access token and active allow-list entry.
alter table public.admin_users enable row level security;
alter table public.blog_posts enable row level security;
alter table public.blog_redirects enable row level security;
drop policy if exists "Published posts are public" on public.blog_posts;
create policy "Published posts are public" on public.blog_posts for select using (status = 'published' and deleted_at is null);
drop policy if exists "Public redirects are readable" on public.blog_redirects;
create policy "Public redirects are readable" on public.blog_redirects for select using (true);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('blog-images', 'blog-images', true, 5242880, array['image/jpeg', 'image/png', 'image/webp', 'image/gif'])
on conflict (id) do update set public = true, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;
drop policy if exists "Public blog images are readable" on storage.objects;
create policy "Public blog images are readable" on storage.objects for select using (bucket_id = 'blog-images');

-- Initial owners. They remain unable to enter until Google sign-in proves the same email.
insert into public.admin_users (email, role, can_publish, active)
values ('mylawpore@gmail.com', 'owner', true, true), ('bharathraj1614@gmail.com', 'owner', true, true)
on conflict (email) do update set role = 'owner', can_publish = true, active = true;
