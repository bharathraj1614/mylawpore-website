import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { requireAdmin, env } from "@/lib/admin/supabase";

export async function POST(request: NextRequest) {
  try {
    await requireAdmin();
    const data = await request.formData();
    const file = data.get("file");
    if (!(file instanceof File)) return NextResponse.json({ error: "Choose an image to upload." }, { status: 400 });
    if (!file.type.startsWith("image/")) return NextResponse.json({ error: "Only image files are allowed." }, { status: 400 });
    if (file.size > 5 * 1024 * 1024) return NextResponse.json({ error: "Images must be 5 MB or smaller." }, { status: 400 });
    const extension = file.name.split(".").pop()?.replace(/[^a-z0-9]/gi, "") || "jpg";
    const path = `articles/${new Date().getFullYear()}/${randomUUID()}.${extension.toLowerCase()}`;
    const upload = await fetch(`${env.url}/storage/v1/object/blog-images/${path}`, {
      method: "POST",
      headers: { apikey: env.serviceKey!, Authorization: `Bearer ${env.serviceKey!}`, "Content-Type": file.type, "x-upsert": "false" },
      body: file,
    });
    if (!upload.ok) throw new Error(await upload.text());
    return NextResponse.json({ url: `${env.url}/storage/v1/object/public/blog-images/${path}`, path });
  } catch (cause) {
    return NextResponse.json({ error: cause instanceof Error ? cause.message : "Unable to upload image." }, { status: 400 });
  }
}
