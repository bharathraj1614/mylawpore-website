import { absoluteImageUrl, formatDate, getBlogRedirect, getPublishedPost, getPublishedPosts, SITE_URL } from "@/lib/blog";
import { notFound, permanentRedirect } from "next/navigation";
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

import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

// Pre-render blog post routes at build time for optimal search engine crawling
export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic metadata for search engines (Google, Bing, etc.)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPost(slug);

  if (!post) {
    return {
      title: "Article Not Found | KVS Associatez",
      description: "The requested legal article could not be found.",
    };
  }

  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = absoluteImageUrl(post.coverImage);

  return {
    title: { absolute: post.seoTitle },
    description: post.seoDescription,
    keywords: [
      ...post.tags,
      post.title,
      "kvsassociatez",
      "kvs associates",
      "M/s. K.V. Subramanian Associatez",
      "Chennai advocates",
      "Madras High Court lawyers",
      "law firm Chennai",
    ],
    authors: [{ name: post.author }],
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: `${post.title} | KVS Associatez`,
      description: post.excerpt,
      url: postUrl,
      siteName: "M/s. K.V. Subramanian Associatez",
      locale: "en_IN",
      type: "article",
      publishedTime: post.publishedAt || post.updatedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPublishedPost(slug);

  if (!post) {
    const redirect = await getBlogRedirect(slug);
    if (redirect) permanentRedirect(`/blog/${redirect}`);
    notFound();
  }

  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = absoluteImageUrl(post.coverImage);

  // Structured Data (JSON-LD) for Google Rich Snippets & Search Engine indexing
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    datePublished: post.publishedAt || post.updatedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "LegalService",
      name: "M/s. K.V. Subramanian Associatez",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.ico`,
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Insights",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  // Get 2 related posts
  const relatedPosts = (await getPublishedPosts())
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <article className="min-h-screen bg-neutral-50 font-sans">
      {/* Schema.org Article and Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* --- Hero Header Section --- */}
      {/* Increased height slightly to ensure enough room for the overlap */}
      <div className="relative w-full min-h-[600px] md:min-h-[650px] flex flex-col justify-end items-center text-white overflow-hidden">
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
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl pb-10 pt-36 md:pt-40">
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
              <span>{formatDate(post.publishedAt)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Content Section --- */}
      <div className="relative z-20 -mt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 border border-neutral-100">
            {/* Pass post to client component for rendering content */}
            <BlogPostClient post={post} />

            {/* --- In-Article Consultation Callout --- */}
            <div className="mt-12 p-8 md:p-10 rounded-2xl bg-brand-navy text-white relative overflow-hidden shadow-lg border border-brand-gold/30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-white/10 border border-brand-gold/40 text-brand-gold text-xs font-bold tracking-widest uppercase rounded-full mb-4">
                  Legal Consultation
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-3">
                  Need Legal Guidance on this Matter?
                </h3>
                <p className="text-neutral-200 text-sm md:text-base leading-relaxed mb-6 max-w-2xl font-light">
                  Our team of senior advocates at M/s. K.V. Subramanian
                  Associatez (KVS Associatez) in Mylapore, Chennai has decades
                  of experience representing clients before the Madras High
                  Court, Debt Recovery Tribunals (DRT), and specialized forums.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-gold text-brand-navy font-bold text-sm hover:bg-white transition-colors duration-200 shadow-md"
                  >
                    Schedule a Consultation
                  </Link>
                  <a
                    href="tel:+918925733441"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors duration-200"
                  >
                    Call: +91 89257 33441
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Related Articles Section --- */}
      {relatedPosts.length > 0 && (
        <section className="pb-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="border-t border-neutral-200 pt-12">
              <div className="text-center mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                  Explore More
                </span>
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-brand-navy mt-1">
                  Related Legal Insights
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="block group bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-200/80 hover:shadow-xl hover:border-brand-gold/30 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  >
                    <div className="relative w-full h-48 bg-neutral-200 overflow-hidden">
                      <Image
                        src={related.coverImage}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-brand-navy/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-full backdrop-blur-sm">
                          {related.tags[0] || "Insight"}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-xs text-neutral-400 mb-2 font-medium">
                        {formatDate(related.publishedAt)}
                      </span>
                      <h3 className="text-lg font-serif font-bold text-brand-navy mb-2 group-hover:text-brand-gold transition-colors line-clamp-2 leading-snug">
                        {related.title}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed line-clamp-2 mb-4 flex-grow">
                        {related.excerpt}
                      </p>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-navy group-hover:text-brand-gold transition-colors inline-flex items-center">
                        Read Guide →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
