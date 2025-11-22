import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, phone, subject, message } = await request.json();

  // Define brand colors
  const colors = {
    navy: "#0D2745",
    gold: "#C0A062",
    bg: "#F4F4F5",
    white: "#FFFFFF",
    text: "#333333",
    lightText: "#666666",
  };

  // Create the formatted HTML string
  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Client Inquiry</title>
      <style>
        body { margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
        p { margin: 0; padding: 0; }
        a { color: ${colors.navy}; text-decoration: none; }
      </style>
    </head>
    <body style="background-color: ${colors.bg}; padding: 40px 0;">
      <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td align="center">
            <!-- Main Container -->
            <table role="presentation" width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: ${colors.white}; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
              
              <!-- Header -->
              <tr>
                <td style="background-color: ${colors.navy}; padding: 30px; text-align: center;">
                  <h1 style="color: ${colors.gold}; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 1px; font-family: Georgia, serif;">M/S. K.V. Subramanian</h1>
                  <p style="color: rgba(255,255,255,0.7); font-size: 12px; margin-top: 5px; text-transform: uppercase; letter-spacing: 2px;">Website Inquiry</p>
                </td>
              </tr>

              <!-- Content Body -->
              <tr>
                <td style="padding: 40px;">
                  
                  <!-- Intro -->
                  <p style="font-size: 16px; color: ${colors.text}; line-height: 1.5; margin-bottom: 24px;">
                    You have received a new message via the website contact form.
                  </p>

                  <!-- Client Details Card -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F8FAFC; border-radius: 6px; border: 1px solid #E2E8F0; margin-bottom: 30px;">
                    <tr>
                      <td style="padding: 20px;">
                        
                        <!-- Name -->
                        <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: ${colors.lightText}; font-weight: bold; margin-bottom: 4px;">Client Name</p>
                        <p style="font-size: 16px; color: ${colors.navy}; font-weight: 600; margin-bottom: 16px;">${name}</p>
                        
                        <!-- Email -->
                        <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: ${colors.lightText}; font-weight: bold; margin-bottom: 4px;">Email Address</p>
                        <p style="font-size: 16px; color: ${colors.navy}; font-weight: 600; margin-bottom: 16px;">
                          <a href="mailto:${email}" style="color: ${colors.navy}; text-decoration: underline;">${email}</a>
                        </p>

                         <!-- Phone -->
                        <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: ${colors.lightText}; font-weight: bold; margin-bottom: 4px;">Phone Number</p>
                        <p style="font-size: 16px; color: ${colors.navy}; font-weight: 600; margin-bottom: 0;">
                          ${phone ? `<a href="tel:${phone}" style="color: ${colors.navy};">${phone}</a>` : '<span style="color:#999; font-style:italic;">Not provided</span>'}
                        </p>

                      </td>
                    </tr>
                  </table>

                  <!-- Divider -->
                  <div style="height: 1px; background-color: #E2E8F0; margin-bottom: 30px;"></div>

                  <!-- Message Section -->
                  <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: ${colors.gold}; font-weight: bold; margin-bottom: 12px;">Subject: ${subject}</p>
                  
                  <div style="font-size: 15px; line-height: 1.8; color: ${colors.text}; background-color: #fff; border-left: 4px solid ${colors.gold}; padding-left: 15px;">
                    ${message.replace(/\n/g, "<br>")}
                  </div>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #F8FAFC; padding: 20px; text-align: center; border-top: 1px solid #E2E8F0;">
                  <p style="font-size: 12px; color: #94A3B8;">
                    This email was sent automatically from the <strong>M/S. K.V. Subramanian Associatez</strong> website.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    const data = await resend.emails.send({
      from: "KVS Website Inquiry <contact@kvsassociatez.in>",
      to: ["mylawpore@gmail.com"],
      subject: `Inquiry: ${subject} (${name})`,
      replyTo: email,
      html: emailHtml,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
