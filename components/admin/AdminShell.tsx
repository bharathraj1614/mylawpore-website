import Link from "next/link";
import type { AdminUser } from "@/lib/admin/supabase";

export default function AdminShell({ admin, children }: { admin: AdminUser; children: React.ReactNode }) {
  const links = [
    ["Editorial desk", "/admin"],
    ["Review queue", "/admin/review"],
    ["Access & roles", "/admin/access"],
  ] as const;
  return (
    <div className="min-h-screen bg-[#f7f5f0] text-slate-900">
      <header className="border-b border-[#d9d2c3] bg-[#12233f] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
          <Link href="/admin" className="min-w-0">
            <span className="block font-serif text-lg tracking-wide text-[#d9b772]">KVS Associatez</span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-white/60">Editorial desk</span>
          </Link>
          <div className="flex items-center gap-3 text-right">
            <div className="hidden sm:block">
              <p className="text-sm font-semibold">{admin.full_name || admin.email}</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#d9b772]">{admin.role}</p>
            </div>
            <form action="/api/auth/sign-out" method="post">
              <button className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-bold text-white/80 transition hover:border-[#d9b772] hover:text-[#d9b772]">Sign out</button>
            </form>
          </div>
        </div>
      </header>
      <div className="mx-auto grid max-w-7xl md:grid-cols-[210px_1fr]">
        <aside className="border-b border-[#d9d2c3] bg-[#efeae0] p-3 md:min-h-[calc(100vh-73px)] md:border-b-0 md:border-r md:p-5">
          <nav className="flex gap-2 overflow-x-auto md:block md:space-y-1">
            {links.filter(([, href]) => href !== "/admin/access" || admin.role === "owner").map(([label, href]) => (
              <Link key={href} href={href} className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-[#12233f] md:block">
                {label}
              </Link>
            ))}
          </nav>
          <Link href="/" className="mt-5 hidden text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-[#12233f] md:block">← View website</Link>
        </aside>
        <main className="min-w-0 p-5 md:p-8">{children}</main>
      </div>
    </div>
  );
}
