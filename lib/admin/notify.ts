import "server-only";
import { Resend } from "resend";
import { SITE_URL } from "@/lib/blog";
import { supabaseAdmin, type AdminUser } from "@/lib/admin/supabase";

export async function notifyOwners(subject: string, title: string, message: string, href = "/admin/review") {
  if (!process.env.RESEND_API_KEY) return;
  const owners = await supabaseAdmin<Pick<AdminUser, "email">[]>("/rest/v1/admin_users?select=email&role=eq.owner&active=eq.true");
  if (!owners.length) return;
  const link = `${SITE_URL}${href}`;
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: process.env.ADMIN_EMAIL_FROM || "KVS Editorial Desk <contact@kvsassociatez.in>",
    to: owners.map((owner) => owner.email),
    subject,
    html: `<div style="font-family:Arial,sans-serif;color:#172554;max-width:620px;margin:auto"><p style="letter-spacing:2px;text-transform:uppercase;font-size:11px;color:#C0A062">KVS Editorial Desk</p><h1 style="font-family:Georgia,serif">${title}</h1><p style="line-height:1.6;color:#374151">${message}</p><p><a href="${link}" style="display:inline-block;background:#172554;color:#fff;padding:12px 18px;border-radius:8px;text-decoration:none">Open review queue</a></p></div>`,
  });
}

export async function notifyAdvocate(email: string, subject: string, title: string, message: string, href = "/admin") {
  if (!process.env.RESEND_API_KEY) return;
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: process.env.ADMIN_EMAIL_FROM || "KVS Editorial Desk <contact@kvsassociatez.in>",
    to: email,
    subject,
    html: `<div style="font-family:Arial,sans-serif;color:#172554;max-width:620px;margin:auto"><p style="letter-spacing:2px;text-transform:uppercase;font-size:11px;color:#C0A062">KVS Editorial Desk</p><h1 style="font-family:Georgia,serif">${title}</h1><p style="line-height:1.6;color:#374151">${message}</p><p><a href="${SITE_URL}${href}" style="display:inline-block;background:#172554;color:#fff;padding:12px 18px;border-radius:8px;text-decoration:none">Open editorial desk</a></p></div>`,
  });
}
