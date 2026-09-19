import { cache } from "react";
import { blogPosts as legacyPosts, type BlogPost as LegacyBlogPost } from "@/data/blogPosts";

export type BlogStatus =
  | "draft"
  | "in_review"
  | "changes_requested"
  | "scheduled"
  | "published"
  | "archived";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  author: string;
  publishedAt: string | null;
  updatedAt: string;
  excerpt: string;
  coverImage: string;
  coverAlt: string;
  content: string;
  tags: string[];
  status: BlogStatus;
  seoTitle: string;
  seoDescription: string;
};

type DatabasePost = {
  id: string;
  slug: string;
  title: string;
  author_name: string;
  published_at: string | null;
  updated_at: string;
  excerpt: string;
  cover_image: string | null;
  cover_alt: string | null;
  content_html: string;
  tags: string[] | null;
  status: BlogStatus;
  seo_title: string | null;
  seo_description: string | null;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const SITE_URL = "https://kvsassociatez.in";

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

function legacyToPost(post: LegacyBlogPost, index: number): BlogPost {
  const publishedAt = new Date(post.date).toISOString();
  return {
    id: `legacy-${index}`,
    slug: post.slug,
    title: post.title,
    author: post.author,
    publishedAt,
    updatedAt: publishedAt,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    coverAlt: `Cover image for ${post.title}`,
    content: post.content,
    tags: post.tags,
    status: "published",
    seoTitle: `${post.title} | KVS Associatez`,
    seoDescription: post.excerpt,
  };
}

function fromDatabase(post: DatabasePost): BlogPost {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    author: post.author_name,
    publishedAt: post.published_at,
    updatedAt: post.updated_at,
    excerpt: post.excerpt,
    coverImage: post.cover_image || "/images/blog/banking-law.png",
    coverAlt: post.cover_alt || `Cover image for ${post.title}`,
    content: post.content_html,
    tags: post.tags || [],
    status: post.status,
    seoTitle: post.seo_title || `${post.title} | KVS Associatez`,
    seoDescription: post.seo_description || post.excerpt,
  };
}

async function queryPublic<T>(path: string): Promise<T | null> {
  if (!isSupabaseConfigured) return null;
  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/${path}`, {
      headers: {
        apikey: supabaseAnonKey!,
        Authorization: `Bearer ${supabaseAnonKey!}`,
      },
      next: { revalidate: 300, tags: ["blog"] },
    });
    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

export const getPublishedPosts = cache(async (): Promise<BlogPost[]> => {
  const records = await queryPublic<DatabasePost[]>(
    "blog_posts?select=id,slug,title,author_name,published_at,updated_at,excerpt,cover_image,cover_alt,content_html,tags,status,seo_title,seo_description&status=eq.published&deleted_at=is.null&order=published_at.desc"
  );
  return records ? records.map(fromDatabase) : legacyPosts.map(legacyToPost);
});

export const getPublishedPost = cache(async (slug: string): Promise<BlogPost | null> => {
  const records = await queryPublic<DatabasePost[]>(
    `blog_posts?select=id,slug,title,author_name,published_at,updated_at,excerpt,cover_image,cover_alt,content_html,tags,status,seo_title,seo_description&slug=eq.${encodeURIComponent(slug)}&status=eq.published&deleted_at=is.null&limit=1`
  );
  if (records) return records[0] ? fromDatabase(records[0]) : null;
  const legacy = legacyPosts.find((post) => post.slug === slug);
  return legacy ? legacyToPost(legacy, legacyPosts.indexOf(legacy)) : null;
});

export async function getBlogRedirect(slug: string): Promise<string | null> {
  const records = await queryPublic<{ new_slug: string }[]>(
    `blog_redirects?select=new_slug&old_slug=eq.${encodeURIComponent(slug)}&limit=1`
  );
  return records?.[0]?.new_slug || null;
}

export function formatDate(value: string | null) {
  if (!value) return "Unpublished";
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

export function absoluteImageUrl(image: string) {
  return image.startsWith("http") ? image : `${SITE_URL}${image}`;
}
