import type { Metadata } from "next";
import { Lato, Merriweather } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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

export const metadata: Metadata = {
  title: "M/s. K.V. Subramanian Associatez | Legal Services",
  description:
    "A reputed legal firm in Chennai providing expert legal advice and solutions in banking, property, company, and labour matters. Law is Dharma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply all global Tailwind styles directly here in the body className */}
      <body
        className={`${lato.variable} ${merriweather.variable} font-sans bg-neutral-off-white text-neutral-charcoal antialiased`}
      >
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
