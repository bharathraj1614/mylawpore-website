import { NextRequest, NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, env, serializeSession, sessionCookieOptions, supabaseAdmin } from "@/lib/admin/supabase";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  
  // 1. Get the verifier from cookies
  const verifier = request.cookies.get("kvs-admin-pkce")?.value;
  const loginUrl = new URL("/admin/login", request.url);
  
  // 2. To correctly delete cookies in Next.js, we must match the original path exactly
  const clear = (response: NextResponse) => {
    response.cookies.set("kvs-admin-pkce", "", { path: "/api/auth", maxAge: 0 });
    response.cookies.set("kvs-admin-state", "", { path: "/api/auth", maxAge: 0 });
    return response;
  };

  // 3. Removed the 'state' check! Supabase doesn't return it, and PKCE makes it unnecessary.
  if (!code || !verifier || !env.url || !env.anonKey) {
    loginUrl.searchParams.set("error", "sign-in");
    return clear(NextResponse.redirect(loginUrl));
  }
  
  // 4. Exchange the code for a session
  const tokenResponse = await fetch(`${env.url}/auth/v1/token?grant_type=pkce`, {
    method: "POST",
    headers: { apikey: env.anonKey, "Content-Type": "application/json" },
    body: JSON.stringify({ auth_code: code, code_verifier: verifier }),
    cache: "no-store",
  });
  
  if (!tokenResponse.ok) {
    // Adding a console.log here helps debug if the Supabase token exchange ever fails
    console.error("Token exchange failed:", await tokenResponse.text());
    loginUrl.searchParams.set("error", "sign-in");
    return clear(NextResponse.redirect(loginUrl));
  }
  
  const session = await tokenResponse.json();
  const userResponse = await fetch(`${env.url}/auth/v1/user`, {
    headers: { apikey: env.anonKey, Authorization: `Bearer ${session.access_token}` },
    cache: "no-store",
  });
  
  const user = userResponse.ok ? await userResponse.json() : null;
  const email = user?.email?.toLowerCase();
  
  let isAllowed = false;
  
  // 5. Check if the user is an authorized admin in your database
  if (email && env.serviceKey) {
    const admins = await supabaseAdmin<{ id: string }[]>(`/rest/v1/admin_users?select=id&email=eq.${encodeURIComponent(email)}&active=eq.true&limit=1`);
    isAllowed = Boolean(admins[0]);
  }
  
  if (!isAllowed) {
    loginUrl.searchParams.set("error", "unauthorized");
    return clear(NextResponse.redirect(loginUrl));
  }
  
  // 6. Success! Redirect to the admin panel
  const response = NextResponse.redirect(new URL("/admin", request.url));
  response.cookies.set(ADMIN_SESSION_COOKIE, serializeSession({ 
    access_token: session.access_token, 
    refresh_token: session.refresh_token, 
    expires_at: session.expires_at 
  }), sessionCookieOptions());
  
  return clear(response);
}