"use client";

export default function GoogleLoginButton() {
  const handleLogin = () => {
    window.location.href = "/api/auth/sign-in";
  };

  return (
    <button
      onClick={handleLogin}
      className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#12233f] transition hover:bg-[#d9b772]"
    >
      <span className="grid h-5 w-5 place-items-center rounded-full border border-slate-300 font-sans text-xs">G</span>
      Continue with Google
    </button>
  );
}