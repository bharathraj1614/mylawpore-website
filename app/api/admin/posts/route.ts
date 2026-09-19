import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { canPublish, requireAdmin, supabaseAdmin } from "@/lib/admin/supabase";
import { normaliseArticle, type ArticleInput } from "@/lib/admin/content";
import { notifyOwners } from "@/lib/admin/notify";

function error(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

export async function GET() {
  try {
    const admin = await requireAdmin();
    const where = admin.role === "owner" ? "" : `&created_by=eq.${admin.authUser.id}`;
    const posts = await supabaseAdmin(`/rest/v1/blog_posts?select=*&deleted_at=is.null${where}&order=updated_at.desc`);
    return NextResponse.json({ posts, admin: { role: admin.role, canPublish: canPublish(admin) } });
  } catch (cause) {
    return error(cause instanceof Error && cause.message === "UNAUTHORIZED" ? "Unauthorized" : "Unable to load articles.", 401);
  }
}

export async function POST(request: NextRequest) {
  try {
    const admin = await requireAdmin();
    const body = (await request.json()) as { article: ArticleInput; action?: "draft" | "submit" | "publish" };
    const article = normaliseArticle(body.article);
    const duplicate = await supabaseAdmin<{ id: string }[]>(`/rest/v1/blog_posts?select=id&slug=eq.${encodeURIComponent(article.slug)}&limit=1`);
    if (duplicate[0]) return error("That URL slug is already in use. Please choose another one.");
    const action = body.action || "draft";
    if (action === "publish" && !canPublish(admin)) return error("Your account requires owner review before publication.", 403);
    const status = action === "submit" ? "in_review" : action === "publish" ? "published" : "draft";
    const now = new Date().toISOString();
    const [created] = await supabaseAdmin<Record<string, unknown>[]>("/rest/v1/blog_posts", {
      method: "POST",
      headers: { "Content-Type": "application/json", Prefer: "return=representation" },
      body: JSON.stringify({ ...article, status, created_by: admin.authUser.id, published_at: status === "published" ? now : null }),
    });
    if (status === "in_review") {
      await notifyOwners("Article submitted for review", article.title, `${admin.email} submitted “${article.title}” for editorial review.`);
    }
    revalidateTag("blog");
    revalidatePath("/");
    revalidatePath("/blog");
    return NextResponse.json({ post: created }, { status: 201 });
  } catch (cause) {
    return error(cause instanceof Error ? cause.message : "Unable to create article.", cause instanceof Error && cause.message === "UNAUTHORIZED" ? 401 : 400);
  }
}
