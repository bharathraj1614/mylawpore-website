import { blogPosts } from "@/data/blogPosts";
import { notFound } from "next/navigation";
import Image from "next/image";
import BlogPostClient from "@/components/blog/BlogPostClient";

// This is a Server Component that fetches data
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Header Section with Dynamic Background Image */}
      <div className="relative bg-neutral-charcoal text-white py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src={post.coverImage}
            alt={`Background for ${post.title}`}
            className="opacity-20"
            // Load this image first
            priority
            fill
            sizes="100vw"
            style={{
              objectFit: "cover"
            }} />
        </div>
        <div className="relative container mx-auto px-4 text-center max-w-4xl">
          <div className="flex justify-center flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-brand-gold text-brand-navy text-xs font-semibold px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-serif text-white drop-shadow-md">
            {post.title}
          </h1>
          <p className="text-lg mt-4 text-neutral-light-grey">
            By {post.author} on {post.date}
          </p>
        </div>
      </div>
      {/* The client component now only handles rendering the article content */}
      <BlogPostClient post={post} />
    </>
  );
}
