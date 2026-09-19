import { redirect } from "next/navigation";
import { currentAdmin } from "@/lib/admin/supabase";
import AdminShell from "@/components/admin/AdminShell";
import ArticleEditor from "@/components/admin/ArticleEditor";

export default async function NewArticlePage() {
  const admin = await currentAdmin();
  if (!admin) redirect("/admin/login");
  return <AdminShell admin={admin}><ArticleEditor canPublish={admin.role === "owner" || admin.can_publish} defaultAuthor={admin.full_name || admin.email} /></AdminShell>;
}
