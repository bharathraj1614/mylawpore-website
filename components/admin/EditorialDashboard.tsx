"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Post = { id: string; title: string; slug: string; author_name: string; status: string; updated_at: string; published_at: string | null; review_note: string | null };
const statusStyle: Record<string, string> = { published: "bg-emerald-50 text-emerald-700", in_review: "bg-amber-50 text-amber-700", changes_requested: "bg-rose-50 text-rose-700", draft: "bg-slate-100 text-slate-600", scheduled: "bg-indigo-50 text-indigo-700", archived: "bg-slate-200 text-slate-500" };

export default function EditorialDashboard({ adminRole, canPublish, reviewOnly = false }: { adminRole: string; canPublish: boolean; reviewOnly?: boolean }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [notice, setNotice] = useState("");
  const load = async () => { setLoading(true); const result = await fetch("/api/admin/posts"); const data = await result.json(); setPosts(data.posts || []); setLoading(false); };
  useEffect(() => { load(); }, []);
  const visible = useMemo(() => posts.filter((post) => (!reviewOnly || post.status === "in_review") && `${post.title} ${post.author_name}`.toLowerCase().includes(search.toLowerCase())), [posts, reviewOnly, search]);
  const counts = { live: posts.filter((post) => post.status === "published").length, review: posts.filter((post) => post.status === "in_review").length, drafts: posts.filter((post) => ["draft", "changes_requested"].includes(post.status)).length };
  const updateStatus = async (id: string, action: "publish" | "changes_requested" | "archive") => {
    const reviewNote = action === "changes_requested" ? window.prompt("What needs to be changed?", "") || undefined : undefined;
    const response = await fetch(`/api/admin/posts/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action, reviewNote }) });
    const data = await response.json();
    setNotice(response.ok ? "Article updated." : data.error || "Unable to update article.");
    if (response.ok) load();
  };
  const importLegacy = async () => {
    const response = await fetch("/api/admin/migrate-legacy", { method: "POST" });
    const data = await response.json();
    setNotice(response.ok ? `${data.imported} existing article${data.imported === 1 ? "" : "s"} imported.` : data.error || "Unable to import existing articles.");
    if (response.ok) load();
  };
  return <>
    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b48b3d]">{reviewOnly ? "Owner review" : "Publishing overview"}</p><h1 className="mt-1 font-serif text-3xl text-[#12233f] md:text-4xl">{reviewOnly ? "Review queue" : "Good morning, editor."}</h1><p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500">{reviewOnly ? "Articles awaiting a considered legal and editorial review." : "Create, review and publish the firm’s legal analysis with confidence."}</p></div>
      {!reviewOnly && <div className="flex flex-wrap gap-2"><>{adminRole === "owner" && posts.length === 0 && <button onClick={importLegacy} className="rounded-xl border border-[#d8d0c2] bg-white px-4 py-3 text-sm font-bold text-[#12233f] hover:border-[#c0a062]">Import existing posts</button>}</><Link href="/admin/posts/new" className="rounded-xl bg-[#12233f] px-5 py-3 text-center text-sm font-bold text-white shadow-sm transition hover:bg-[#c0a062] hover:text-[#12233f]">+ New article</Link></div>}
    </div>
    {!reviewOnly && <div className="mt-7 grid gap-3 sm:grid-cols-3"><Stat label="Published" value={counts.live} /><Stat label="Awaiting review" value={counts.review} emphasis={counts.review > 0} /><Stat label="In progress" value={counts.drafts} /></div>}
    {notice && <p className="mt-5 rounded-lg bg-[#e9e2d4] px-4 py-3 text-sm text-[#12233f]">{notice}</p>}
    <section className="mt-8 overflow-hidden rounded-2xl border border-[#ddd6c9] bg-white shadow-[0_6px_24px_rgba(17,37,65,0.05)]">
      <div className="flex flex-col gap-3 border-b border-[#eee9df] px-5 py-4 sm:flex-row sm:items-center sm:justify-between"><h2 className="font-serif text-xl text-[#12233f]">{reviewOnly ? "Submitted articles" : "Your articles"}</h2><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search articles" className="rounded-lg border border-[#ded7ca] px-3 py-2 text-sm outline-none focus:border-[#c0a062]" /></div>
      {loading ? <p className="p-8 text-sm text-slate-500">Loading editorial records…</p> : visible.length === 0 ? <div className="p-10 text-center"><p className="font-serif text-xl text-[#12233f]">{reviewOnly ? "Nothing awaiting review." : "Your desk is clear."}</p><p className="mt-2 text-sm text-slate-500">{reviewOnly ? "Submitted articles will appear here." : "Start a new legal insight when you are ready."}</p></div> : <div className="divide-y divide-[#eee9df]">{visible.map((post) => <article key={post.id} className="flex flex-col gap-4 px-5 py-5 lg:flex-row lg:items-center lg:justify-between"><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${statusStyle[post.status] || statusStyle.draft}`}>{post.status.replaceAll("_", " ")}</span><span className="text-xs text-slate-400">Updated {new Date(post.updated_at).toLocaleDateString("en-IN")}</span></div><h3 className="mt-2 font-serif text-lg text-[#12233f]">{post.title}</h3><p className="mt-1 text-sm text-slate-500">By {post.author_name}{post.review_note ? ` · ${post.review_note}` : ""}</p></div><div className="flex flex-wrap gap-2"><Link href={`/admin/posts/${post.id}`} className="rounded-lg border border-[#d8d0c2] px-3 py-2 text-xs font-bold text-[#12233f] hover:border-[#c0a062]">Open</Link>{adminRole === "owner" && post.status === "in_review" && <><button onClick={() => updateStatus(post.id, "changes_requested")} className="rounded-lg border border-rose-200 px-3 py-2 text-xs font-bold text-rose-700">Request changes</button><button onClick={() => updateStatus(post.id, "publish")} className="rounded-lg bg-[#12233f] px-3 py-2 text-xs font-bold text-white">Publish</button></>}{canPublish && post.status !== "published" && post.status !== "in_review" && <button onClick={() => updateStatus(post.id, "publish")} className="rounded-lg bg-[#12233f] px-3 py-2 text-xs font-bold text-white">Publish</button>}</div></article>)}</div>}
    </section>
  </>;
}

function Stat({ label, value, emphasis }: { label: string; value: number; emphasis?: boolean }) { return <div className={`rounded-xl border p-4 ${emphasis ? "border-[#d9b772] bg-[#fffaf0]" : "border-[#e3dccf] bg-[#fdfcf9]"}`}><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">{label}</p><p className="mt-1 font-serif text-3xl text-[#12233f]">{value}</p></div>; }
