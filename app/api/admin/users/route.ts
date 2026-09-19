import { NextRequest, NextResponse } from "next/server";
import { canManageUsers, requireAdmin, supabaseAdmin, type AdminRole, type AdminUser } from "@/lib/admin/supabase";

const fail = (message: string, status = 400) => NextResponse.json({ error: message }, { status });
const validEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

async function assertOwner() {
  const admin = await requireAdmin();
  if (!canManageUsers(admin)) throw new Error("FORBIDDEN");
  return admin;
}

export async function GET() {
  try {
    await assertOwner();
    const users = await supabaseAdmin<AdminUser[]>("/rest/v1/admin_users?select=*&order=role.asc,email.asc");
    return NextResponse.json({ users });
  } catch (cause) {
    return fail(cause instanceof Error && cause.message === "FORBIDDEN" ? "Forbidden" : "Unauthorized", 403);
  }
}

export async function POST(request: NextRequest) {
  try {
    await assertOwner();
    const body = (await request.json()) as { email: string; role?: AdminRole; canPublish?: boolean };
    const email = body.email?.toLowerCase().trim();
    if (!email || !validEmail(email)) return fail("Enter a valid Google email address.");
    const role = body.role === "owner" ? "owner" : "advocate";
    const [user] = await supabaseAdmin<AdminUser[]>("/rest/v1/admin_users", {
      method: "POST",
      headers: { "Content-Type": "application/json", Prefer: "return=representation,resolution=merge-duplicates" },
      body: JSON.stringify({ email, role, can_publish: role === "owner" ? true : Boolean(body.canPublish), active: true }),
    });
    return NextResponse.json({ user }, { status: 201 });
  } catch (cause) {
    return fail(cause instanceof Error ? cause.message : "Unable to add user.", 400);
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const current = await assertOwner();
    const body = (await request.json()) as { id: string; role?: AdminRole; canPublish?: boolean; active?: boolean };
    if (!body.id) return fail("User id is required.");
    const users = await supabaseAdmin<AdminUser[]>(`/rest/v1/admin_users?select=*&id=eq.${encodeURIComponent(body.id)}&limit=1`);
    const target = users[0];
    if (!target) return fail("User not found.", 404);
    const update: Partial<Pick<AdminUser, "role" | "can_publish" | "active">> = {};
    if (body.role) update.role = body.role;
    if (typeof body.canPublish === "boolean") update.can_publish = body.canPublish;
    if (typeof body.active === "boolean") update.active = body.active;
    const removingOwner = target.role === "owner" && (update.role === "advocate" || update.active === false);
    if (removingOwner) {
      const owners = await supabaseAdmin<{ id: string }[]>("/rest/v1/admin_users?select=id&role=eq.owner&active=eq.true");
      if (owners.length <= 1) return fail("At least one active owner must remain.");
    }
    if (target.id === current.id && update.active === false) return fail("You cannot revoke your own access.");
    if (update.role === "owner") update.can_publish = true;
    const [user] = await supabaseAdmin<AdminUser[]>(`/rest/v1/admin_users?id=eq.${encodeURIComponent(body.id)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Prefer: "return=representation" },
      body: JSON.stringify(update),
    });
    return NextResponse.json({ user });
  } catch (cause) {
    return fail(cause instanceof Error ? cause.message : "Unable to update access.", 400);
  }
}
