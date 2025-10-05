"use client"; // KEEP THIS

import { useState, useEffect } from "react";
import { Lato, Merriweather } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DisclaimerModal from "@/components/ui/DisclaimerModal"; // Import the new modal

// Font configurations remain the same
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

// REMOVE THE ENTIRE METADATA EXPORT BLOCK FROM HERE:
/*
export const metadata: Metadata = {
  title: "M/s. K.V. Subramanian Associatez | Legal Services",
  description: "A reputed legal firm in Chennai providing expert legal advice and solutions in banking, property, company, and labour matters. Law is Dharma.",
};
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDisclaimerAccepted, setDisclaimerAccepted] = useState(true);

  useEffect(() => {
    const accepted = localStorage.getItem("disclaimerAccepted");
    if (accepted !== "true") {
      setDisclaimerAccepted(false);
    }
  }, []);

  const handleAcceptDisclaimer = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setDisclaimerAccepted(true);
  };

  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${merriweather.variable} font-sans bg-neutral-off-white text-neutral-charcoal antialiased`}
      >
        {!isDisclaimerAccepted && (
          <DisclaimerModal onAccept={handleAcceptDisclaimer} />
        )}

        <div className={isDisclaimerAccepted ? "visible" : "invisible"}>
          <Header />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
