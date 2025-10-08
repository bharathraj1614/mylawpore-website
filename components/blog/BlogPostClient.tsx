"use client";

import { motion } from "framer-motion";
import type { BlogPost } from "@/data/blogPosts";

export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <motion.article
        className="prose lg:prose-xl max-w-none font-sans text-neutral-charcoal"
        dangerouslySetInnerHTML={{ __html: post.content }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </div>
  );
}
