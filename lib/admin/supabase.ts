import "server-only";
import { cookies } from "next/headers";

const SESSION_COOKIE = "kvs-admin-session";

export type AdminRole = "owner" | "advocate";
export type AdminUser = {
  id: string;
  email: string;
  full_name: string | null;
  role: AdminRole;
  can_publish: boolean;
  active: boolean;
  auth_user_id: string | null;
  created_at: string;
};

type Session = { access_token: string; refresh_token: string; expires_at: number };
type AuthUser = { id: string; email?: string; user_metadata?: { full_name?: string; name?: string } };

export const env = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL,
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  serviceKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
};

export function hasSupabaseAdminConfig() {
  return Boolean(env.url && env.anonKey && env.serviceKey);
}

export function sessionCookieOptions(maxAge = 60 * 60 * 24 * 7) {
  return { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax" as const, path: "/", maxAge };
}

export function serializeSession(session: Session) {
  return Buffer.from(JSON.stringify(session)).toString("base64url");
}

export function readSession(value?: string): Session | null {
  if (!value) return null;
  try {
    return JSON.parse(Buffer.from(value, "base64url").toString("utf8")) as Session;
  } catch {
    return null;
  }
}

async function serviceFetch(path: string, init: RequestInit = {}) {
  if (!hasSupabaseAdminConfig()) throw new Error("Supabase environment variables are not configured.");
  const headers = new Headers(init.headers);
  headers.set("apikey", env.serviceKey!);
  headers.set("Authorization", `Bearer ${env.serviceKey!}`);
  return fetch(`${env.url}${path}`, { ...init, headers, cache: "no-store" });
}

export async function supabaseAdmin<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await serviceFetch(path, init);
  if (!response.ok) throw new Error(await response.text());
  const text = await response.text();
  return (text ? JSON.parse(text) : null) as T;
}

async function fetchAuthUser(accessToken: string): Promise<AuthUser | null> {
  if (!env.url || !env.anonKey) return null;
  const response = await fetch(`${env.url}/auth/v1/user`, {
    headers: { apikey: env.anonKey, Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  });
  return response.ok ? ((await response.json()) as AuthUser) : null;
}

export async function currentAdmin(): Promise<(AdminUser & { authUser: AuthUser }) | null> {
  if (!hasSupabaseAdminConfig()) return null;
  const store = await cookies();
  const session = readSession(store.get(SESSION_COOKIE)?.value);
  if (!session) return null;
  const authUser = await fetchAuthUser(session.access_token);
  const email = authUser?.email?.toLowerCase();
  if (!authUser || !email) return null;
  const users = await supabaseAdmin<AdminUser[]>(
    `/rest/v1/admin_users?select=*&email=eq.${encodeURIComponent(email)}&active=eq.true&limit=1`
  );
  if (!users[0]) return null;
  if (!users[0].auth_user_id) {
    await supabaseAdmin("/rest/v1/admin_users?email=eq." + encodeURIComponent(email), {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Prefer: "return=minimal" },
      body: JSON.stringify({ auth_user_id: authUser.id, full_name: authUser.user_metadata?.full_name || authUser.user_metadata?.name || null }),
    });
  }
  return { ...users[0], authUser };
}

export async function requireAdmin() {
  const admin = await currentAdmin();
  if (!admin) throw new Error("UNAUTHORIZED");
  return admin;
}

export function canPublish(admin: AdminUser) {
  return admin.role === "owner" || admin.can_publish;
}

export function canManageUsers(admin: AdminUser) {
  return admin.role === "owner";
}

export const ADMIN_SESSION_COOKIE = SESSION_COOKIE;
