import GoogleLoginButton from "@/components/ui/GoogleLoginButton";
import Link from "next/link";

export default async function AdminLogin({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  const message = error === "unauthorized" ? "This Google account has not been granted editorial access." : error === "configuration" ? "Google sign-in is not configured yet." : error ? "We could not complete that sign-in. Please try again." : null;
  console.log("AdminLogin error:", error);
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#10213e] p-5 text-white">
      <div className="absolute -right-20 -top-24 h-96 w-96 rounded-full bg-[#c0a062]/10 blur-3xl" />
      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur md:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d9b772]">KVS Associatez</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight">Editorial desk</h1>
        <p className="mt-4 leading-relaxed text-white/70">A private workspace for the firm’s legal insights. Access is granted by an owner.</p>
        
        {message && <p className="mt-6 rounded-lg border border-amber-300/20 bg-amber-100/10 px-4 py-3 text-sm text-amber-100">{message}</p>}
        
        <GoogleLoginButton />
        
        <p className="mt-7 text-center text-xs text-white/45"><Link href="/" className="hover:text-white">Return to website</Link></p>
      </div>
    </main>
  );
}