import { redirect } from "next/navigation";
import { currentAdmin } from "@/lib/admin/supabase";
import AdminShell from "@/components/admin/AdminShell";
import EditorialDashboard from "@/components/admin/EditorialDashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const admin = await currentAdmin();
  if (!admin) redirect("/admin/login");
  return <AdminShell admin={admin}><EditorialDashboard adminRole={admin.role} canPublish={admin.role === "owner" || admin.can_publish} /></AdminShell>;
}
