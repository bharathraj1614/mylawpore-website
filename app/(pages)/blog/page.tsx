import Image from "next/image";
import Link from "next/link";
import { formatDate, getPublishedPosts } from "@/lib/blog";

export const revalidate = 300;

export default async function BlogPage() {
  const posts = await getPublishedPosts();
  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      <div className="relative overflow-hidden bg-brand-navy pb-20 pt-28 text-white md:pb-28 md:pt-36">
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <span className="inline-block rounded-full border border-brand-gold/30 bg-brand-navy/50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-gold">Our blog</span>
          <h1 className="mt-4 font-serif text-4xl font-bold text-brand-gold md:text-6xl">Legal Insights & Analysis</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-neutral-200 md:text-xl">Authoritative articles, case analysis, and practical guidance from our legal team.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        {posts.length === 0 ? <p className="text-center text-neutral-500">New legal insights will appear here shortly.</p> : <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">{posts.map((post) => (
          <article key={post.id} className="h-full"><Link href={`/blog/${post.slug}`} className="group block h-full"><div className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="relative h-52 w-full overflow-hidden bg-neutral-200 md:h-60"><Image src={post.coverImage} alt={post.coverAlt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" /><span className="absolute left-4 top-4 rounded-full bg-brand-navy/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">{post.tags[0] || "Legal update"}</span></div>
            <div className="flex flex-grow flex-col p-6 md:p-8"><p className="text-xs text-neutral-500">{formatDate(post.publishedAt)} <span className="px-2 text-neutral-300">•</span> {post.author}</p><h2 className="mt-4 font-serif text-xl font-bold leading-tight text-brand-navy transition-colors group-hover:text-brand-gold md:text-2xl">{post.title}</h2><p className="mt-3 flex-grow text-sm leading-relaxed text-neutral-600 md:text-base">{post.excerpt}</p><span className="mt-6 border-t border-neutral-100 pt-4 text-xs font-bold uppercase tracking-widest text-brand-navy transition-colors group-hover:text-brand-gold">Read article →</span></div>
          </div></Link></article>
        ))}</div>}
      </div>
    </div>
  );
}
