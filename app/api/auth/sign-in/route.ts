import { NextRequest, NextResponse } from "next/server";
import { createHash, randomBytes } from "crypto";
import { env } from "@/lib/admin/supabase";

export async function GET(request: NextRequest) {
  if (!env.url || !env.anonKey) {
    return NextResponse.redirect(new URL("/admin/login?error=configuration", request.url));
  }
  const verifier = randomBytes(32).toString("base64url");
  const state = randomBytes(24).toString("base64url");
  const challenge = createHash("sha256").update(verifier).digest("base64url");
  const redirectTo = new URL("/api/auth/callback", request.url).toString();
  const authorize = new URL(`${env.url}/auth/v1/authorize`);
  authorize.searchParams.set("provider", "google");
  authorize.searchParams.set("redirect_to", redirectTo);
  authorize.searchParams.set("code_challenge", challenge);
  authorize.searchParams.set("code_challenge_method", "s256");
  authorize.searchParams.set("state", state);
  const response = NextResponse.redirect(authorize);
  const options = { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax" as const, path: "/api/auth", maxAge: 600 };
  response.cookies.set("kvs-admin-pkce", verifier, options);
  response.cookies.set("kvs-admin-state", state, options);
  return response;
}
