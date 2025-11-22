import { blogPosts } from "@/data/blogPosts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import BlogPostClient from "@/components/blog/BlogPostClient";

// --- Icons ---
const ArrowLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-neutral-50 font-sans">
      {/* --- Hero Header Section --- */}
      {/* Increased height slightly to ensure enough room for the overlap */}
      <div className="relative w-full h-[65vh] min-h-[500px] flex flex-col justify-center items-center text-white overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={post.coverImage}
            alt={`Background for ${post.title}`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Gradient Overlay: Darkens image for text readability */}
          <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/40 via-transparent to-brand-navy/90" />
        </div>

        {/* Navigation (Back Button) */}
        <div className="absolute top-24 md:top-28 left-0 w-full px-4 md:px-8 z-20">
          <div className="container mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/80 hover:text-brand-gold transition-colors bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              <ArrowLeftIcon /> Back to Insights
            </Link>
          </div>
        </div>

        {/* Header Content */}
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl pb-10">
          {/* Tags */}
          <div className="flex justify-center flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-brand-gold text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white drop-shadow-lg mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-neutral-200 text-sm md:text-base font-medium bg-brand-navy/30 backdrop-blur-sm inline-flex px-6 py-3 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2">
              <UserIcon />
              <span className="text-white">{post.author}</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-brand-gold rounded-full"></div>
            <div className="flex items-center gap-2">
              <CalendarIcon />
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Content Section --- */}
      {/* 
         FIX: Added a white background container with shadow.
         The -mt-24 pulls this white card UP over the dark header.
      */}
      <div className="relative z-20 -mt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 border border-neutral-100">
            {/* Pass post to client component for rendering content */}
            <BlogPostClient post={post} />
          </div>
        </div>
      </div>
    </article>
  );
}
