import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.kvsassociatez.in";

  // 1. Define your static pages (including the new blog post URLs)
  const staticPages = [
    "",
    "/about",
    "/our-team",
    "/practice-areas",
    "/blog",
    "/contact",
    "/disclaimer",
    "/blog/navigating-property-disputes-in-chennai",
    "/blog/the-importance-of-a-will-testamentary-law",
    "/blog/understanding-employee-rights-in-india",
    "/blog/demystifying-arbitration-as-a-dispute-resolution-tool",
    "/blog/understanding-the-sarfaesi-act-2002",
    "/terms-of-service",
    "/privacy-policy",
  ];

  // 2. Create sitemap entries for static pages
  const staticEntries = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }));

  // 3. Create sitemap entries for dynamic blog posts (from your data file)
  // This will ensure any *future* posts added to your data file are also included automatically.
  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
  }));

  // 4. Combine all entries, removing any potential duplicates
  const allEntries = [...staticEntries, ...blogEntries];

  // Deduplicate based on URL just in case a static link matches a dynamic one
  const uniqueEntries = Array.from(
    new Map(allEntries.map((entry) => [entry.url, entry])).values()
  );

  return uniqueEntries;
}
