"use client";

import Image from "next/image"; // Import the Image component
import { blogPosts } from "@/data/blogPosts";
import Card from "@/components/ui/Card";

export default function BlogPage() {
  return (
    <>
      <div className="bg-brand-navy text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-gold">
            Legal Insights
          </h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto text-neutral-light-grey">
            Articles and analysis from our team of experienced advocates.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            // The Card component needs to have its padding removed to allow the image to fill the top
            (<Card
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="p-0 overflow-hidden"
            >
              <div className="w-full h-full flex flex-col">
                {/* Image Section */}
                <div className="relative w-full h-48">
                  <Image
                    src={post.coverImage}
                    alt={`Cover image for ${post.title}`}
                    fill
                    className="transition-transform duration-300 group-hover:scale-105"
                    style={{
                      objectFit: "cover",
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                </div>
                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-neutral-grey mb-2">
                    {post.date} • by {post.author}
                  </p>
                  <h2 className="text-2xl font-serif text-brand-navy mb-3 flex-grow">
                    {post.title}
                  </h2>
                  <p className="text-neutral-grey font-sans mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-brand-gold font-semibold mt-auto">
                    Read More →
                  </span>
                </div>
              </div>
            </Card>)
          ))}
        </div>
      </div>
    </>
  );
}
