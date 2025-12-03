"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";

// --- Icons ---
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

const ArrowRight = () => (
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
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function BlogPage() {
  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      {/* --- Hero Section --- */}
      <div className="relative bg-brand-navy text-white pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 border border-brand-gold/30 rounded-full text-brand-gold text-xs font-bold tracking-widest uppercase mb-4 bg-brand-navy/50 backdrop-blur-sm">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-gold mb-6">
              Legal Insights & Analysis
            </h1>
            <p className="text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto font-light leading-relaxed">
              Stay informed with expert articles, case studies, and updates from
              our experienced legal team.
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- Blog Grid Section --- */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.slug}
              // variants={cardVariants}
              className="h-full"
            >
              <Link href={"/blog/" + post.slug} className="block h-full group">
                <div className="bg-white h-full rounded-2xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  {/* Image Container */}
                  <div className="relative w-full h-52 md:h-60 overflow-hidden bg-neutral-200">
                    <Image
                      src={post.coverImage}
                      alt={`Cover image for ${post.title}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Category Badge Overlay */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-brand-navy/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md">
                        Legal Update
                        {/* {post.category || "Legal Update"} */}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    {/* Metadata */}
                    <div className="flex items-center gap-4 text-xs md:text-sm text-neutral-500 mb-4">
                      <div className="flex items-center gap-1.5">
                        <CalendarIcon />
                        <span>{post.date}</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-neutral-300"></div>
                      <div className="flex items-center gap-1.5">
                        <UserIcon />
                        <span className="truncate max-w-[100px]">
                          {post.author}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl md:text-2xl font-serif text-brand-navy font-bold mb-3 leading-tight group-hover:text-brand-gold transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    {/* Read More Link */}
                    <div className="mt-auto pt-4 border-t border-neutral-50">
                      <span className="inline-flex items-center text-xs font-bold text-brand-navy uppercase tracking-widest group-hover:text-brand-gold transition-colors">
                        Read Article
                        <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                          <ArrowRight />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
