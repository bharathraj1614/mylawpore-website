import type { Metadata } from "next"; // Import Metadata type
import { Lato, Merriweather } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";
import { metadata as siteMetadata } from "./metadata"; // Import the metadata we defined

// Re-export the metadata so Next.js can find it
export const metadata: Metadata = siteMetadata;

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-merriweather",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${merriweather.variable} font-sans bg-neutral-off-white text-neutral-charcoal antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
