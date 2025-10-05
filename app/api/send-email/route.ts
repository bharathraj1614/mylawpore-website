import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, phone, subject, message } = await request.json();

  try {
    const data = await resend.emails.send({
      from: "Website Inquiry <onboarding@resend.dev>", // This is a required field for the free tier
      to: ["bharathraj1614@gmail.com"], // Your email address
      subject: `New Inquiry from ${name}: ${subject}`,
      html: `
        <p>You have a new inquiry from your website contact form:</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
