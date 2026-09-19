import { redirect } from "next/navigation";
import { currentAdmin } from "@/lib/admin/supabase";
import AdminShell from "@/components/admin/AdminShell";
import AccessManager from "@/components/admin/AccessManager";

export const dynamic = "force-dynamic";

export default async function AccessPage() {
  const admin = await currentAdmin();
  if (!admin) redirect("/admin/login");
  if (admin.role !== "owner") redirect("/admin");
  return <AdminShell admin={admin}><AccessManager /></AdminShell>;
}
