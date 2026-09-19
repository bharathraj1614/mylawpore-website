import { NextResponse } from "next/server";
import { blogPosts } from "@/data/blogPosts";
import { requireAdmin, supabaseAdmin } from "@/lib/admin/supabase";
import { normaliseArticle } from "@/lib/admin/content";
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST() {
  try {
    const admin = await requireAdmin();
    if (admin.role !== "owner") return NextResponse.json({ error: "Only owners can import legacy articles." }, { status: 403 });
    let imported = 0;
    for (const legacy of blogPosts) {
      const existing = await supabaseAdmin<{ id: string }[]>(`/rest/v1/blog_posts?select=id&slug=eq.${encodeURIComponent(legacy.slug)}&limit=1`);
      if (existing[0]) continue;
      const article = normaliseArticle({ title: legacy.title, slug: legacy.slug, authorName: legacy.author, excerpt: legacy.excerpt, content: legacy.content, coverImage: legacy.coverImage, coverAlt: `Cover image for ${legacy.title}`, tags: legacy.tags });
      await supabaseAdmin("/rest/v1/blog_posts", { method: "POST", headers: { "Content-Type": "application/json", Prefer: "return=minimal" }, body: JSON.stringify({ ...article, status: "published", published_at: new Date(legacy.date).toISOString(), created_by: admin.authUser.id }) });
      imported += 1;
    }
    revalidateTag("blog");
    revalidatePath("/");
    revalidatePath("/blog");
    return NextResponse.json({ imported });
  } catch (cause) {
    return NextResponse.json({ error: cause instanceof Error ? cause.message : "Import failed." }, { status: 400 });
  }
}
