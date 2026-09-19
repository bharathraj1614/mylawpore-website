import type { BlogStatus } from "@/lib/blog";

export function slugify(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 90) || "legal-insight";
}

export function sanitizeArticleHtml(value: string) {
  return value
    .replace(/<\/?(script|style|iframe|object|embed|form)[^>]*>/gi, "")
    .replace(/\son\w+\s*=\s*(["']).*?\1/gi, "")
    .replace(/\s(href|src)\s*=\s*(["'])\s*javascript:.*?\2/gi, "")
    .trim();
}

export function plainText(value: string) {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

export type ArticleInput = {
  title: string;
  slug?: string;
  authorName: string;
  excerpt?: string;
  content: string;
  coverImage?: string;
  coverAlt?: string;
  tags?: string[];
  seoTitle?: string;
  seoDescription?: string;
  status?: BlogStatus;
  publishedAt?: string | null;
};

export function normaliseArticle(input: ArticleInput) {
  const title = input.title.trim();
  const content = sanitizeArticleHtml(input.content);
  const excerpt = (input.excerpt?.trim() || plainText(content).slice(0, 180)).slice(0, 320);
  const seoTitle = (input.seoTitle?.trim() || `${title} | KVS Associatez`).slice(0, 60);
  const seoDescription = (input.seoDescription?.trim() || excerpt).slice(0, 160);
  if (!title || !input.authorName?.trim() || !content) throw new Error("Title, author and article content are required.");
  if (input.coverImage && !input.coverAlt?.trim()) throw new Error("Please add descriptive alt text for the cover image.");
  return {
    title,
    slug: slugify(input.slug || title),
    author_name: input.authorName.trim(),
    excerpt,
    content_html: content,
    cover_image: input.coverImage?.trim() || null,
    cover_alt: input.coverAlt?.trim() || null,
    tags: (input.tags || []).map((tag) => tag.trim()).filter(Boolean).slice(0, 12),
    seo_title: seoTitle,
    seo_description: seoDescription,
  };
}
