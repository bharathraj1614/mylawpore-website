import { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://kvsassociatez.in";

  // Static site pages
  const staticPages = [
    "",
    "/about",
    "/our-team",
    "/practice-areas",
    "/blog",
    "/contact",
    "/disclaimer",
    "/terms-of-service",
    "/privacy-policy",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1.0 : 0.8,
  }));

  // Dynamic blog post pages
  const posts = await getPublishedPosts();
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticEntries, ...blogEntries];
}
