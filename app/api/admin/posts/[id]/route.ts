import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { canPublish, requireAdmin, supabaseAdmin } from "@/lib/admin/supabase";
import { normaliseArticle, type ArticleInput } from "@/lib/admin/content";
import { notifyAdvocate, notifyOwners } from "@/lib/admin/notify";

type StoredPost = { id: string; slug: string; title: string; created_by: string; status: string; author_name: string };
const responseError = (message: string, status = 400) => NextResponse.json({ error: message }, { status });

async function ownedPost(id: string, userId: string, isOwner: boolean) {
  const posts = await supabaseAdmin<StoredPost[]>(`/rest/v1/blog_posts?select=id,slug,title,created_by,status,author_name&id=eq.${encodeURIComponent(id)}&limit=1`);
  const post = posts[0];
  if (!post) throw new Error("Article not found.");
  if (!isOwner && post.created_by !== userId) throw new Error("FORBIDDEN");
  return post;
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const admin = await requireAdmin();
    const { id } = await params;
    const existing = await ownedPost(id, admin.authUser.id, admin.role === "owner");
    const body = (await request.json()) as { article?: ArticleInput; action?: "draft" | "submit" | "publish" | "changes_requested" | "archive" | "restore"; reviewNote?: string };
    const update: Record<string, unknown> = {};
    let redirectFrom: string | null = null;
    if (body.article) {
      const article = normaliseArticle(body.article);
      if (article.slug !== existing.slug) {
        const duplicate = await supabaseAdmin<{ id: string }[]>(`/rest/v1/blog_posts?select=id&slug=eq.${encodeURIComponent(article.slug)}&id=neq.${encodeURIComponent(id)}&limit=1`);
        if (duplicate[0]) return responseError("That URL slug is already in use.");
        redirectFrom = existing.slug;
      }
      Object.assign(update, article);
    }
    const action = body.action;
    if (action === "publish") {
      if (!canPublish(admin)) return responseError("Your account requires owner review before publication.", 403);
      update.status = "published";
      update.published_at = new Date().toISOString();
    }
    if (action === "submit") {
      update.status = "in_review";
      update.review_note = null;
      await notifyOwners("Article submitted for review", existing.title, `${admin.email} submitted “${existing.title}” for editorial review.`);
    }
    if (action === "changes_requested") {
      if (admin.role !== "owner") return responseError("Only owners can request changes.", 403);
      update.status = "changes_requested";
      update.review_note = body.reviewNote?.trim() || "Please review the owner’s requested changes.";
      const author = await supabaseAdmin<{ email: string }[]>(`/rest/v1/admin_users?select=email&auth_user_id=eq.${encodeURIComponent(existing.created_by)}&limit=1`);
      if (author[0]) await notifyAdvocate(author[0].email, "Changes requested for your article", existing.title, update.review_note as string);
    }
    if (action === "archive") {
      if (admin.role !== "owner") return responseError("Only owners can archive articles.", 403);
      update.status = "archived";
    }
    if (action === "restore") {
      if (admin.role !== "owner") return responseError("Only owners can restore articles.", 403);
      update.deleted_at = null;
      update.status = "draft";
    }
    if (action === "draft") update.status = "draft";
    if (!Object.keys(update).length) return responseError("No changes were supplied.");
    const [post] = await supabaseAdmin<Record<string, unknown>[]>(`/rest/v1/blog_posts?id=eq.${encodeURIComponent(id)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Prefer: "return=representation" },
      body: JSON.stringify(update),
    });
    if (redirectFrom && typeof update.slug === "string") {
      await supabaseAdmin("/rest/v1/blog_redirects", {
        method: "POST",
        headers: { "Content-Type": "application/json", Prefer: "resolution=merge-duplicates" },
        body: JSON.stringify({ old_slug: redirectFrom, new_slug: update.slug }),
      });
    }
    if (action === "publish" && admin.role === "owner" && existing.created_by !== admin.authUser.id) {
      const author = await supabaseAdmin<{ email: string }[]>(`/rest/v1/admin_users?select=email&auth_user_id=eq.${encodeURIComponent(existing.created_by)}&limit=1`);
      if (author[0]) await notifyAdvocate(author[0].email, "Your article is now published", existing.title, `“${existing.title}” has been reviewed and published on the KVS Associatez website.`, `/blog/${typeof update.slug === "string" ? update.slug : existing.slug}`);
    }
    revalidateTag("blog");
    revalidatePath("/");
    revalidatePath("/blog");
    revalidatePath(`/blog/${existing.slug}`);
    return NextResponse.json({ post });
  } catch (cause) {
    const message = cause instanceof Error ? cause.message : "Unable to update article.";
    return responseError(message === "UNAUTHORIZED" ? "Unauthorized" : message === "FORBIDDEN" ? "Forbidden" : message, message === "UNAUTHORIZED" ? 401 : message === "FORBIDDEN" ? 403 : 400);
  }
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const admin = await requireAdmin();
    if (admin.role !== "owner") return responseError("Only owners can delete articles.", 403);
    const { id } = await params;
    const existing = await ownedPost(id, admin.authUser.id, true);
    await supabaseAdmin(`/rest/v1/blog_posts?id=eq.${encodeURIComponent(id)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Prefer: "return=minimal" },
      body: JSON.stringify({ deleted_at: new Date().toISOString(), status: "archived" }),
    });
    revalidateTag("blog");
    revalidatePath("/");
    revalidatePath("/blog");
    revalidatePath(`/blog/${existing.slug}`);
    return NextResponse.json({ ok: true });
  } catch (cause) {
    return responseError(cause instanceof Error ? cause.message : "Unable to delete article.", 400);
  }
}
