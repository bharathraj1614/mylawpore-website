import { redirect } from "next/navigation";
import { currentAdmin } from "@/lib/admin/supabase";
import AdminShell from "@/components/admin/AdminShell";
import ArticleEditor from "@/components/admin/ArticleEditor";

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const admin = await currentAdmin();
  if (!admin) redirect("/admin/login");
  const { id } = await params;
  return <AdminShell admin={admin}><ArticleEditor id={id} canPublish={admin.role === "owner" || admin.can_publish} defaultAuthor={admin.full_name || admin.email} /></AdminShell>;
}
