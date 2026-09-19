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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "M/s. K.V. Subramanian Associatez",
  alternateName: ["KVS Associatez", "K.V. Subramanian Associatez"],
  url: "https://kvsassociatez.in",
  logo: "https://kvsassociatez.in/favicon.ico",
  image: "https://kvsassociatez.in/og-image.png",
  description:
    "Leading Chennai law firm offering expert legal services in banking law, SARFAESI Act, property litigation, corporate law, and arbitration. Madras High Court advocates.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 12A, Brindavanam Street",
    addressLocality: "Mylapore, Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600004",
    addressCountry: "IN",
  },
  telephone: "+918925733441",
  priceRange: "$$",
  hasMap: "https://maps.app.goo.gl/nGXeGcqHE1bV9q9S7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${lato.variable} ${merriweather.variable} font-sans bg-neutral-off-white text-neutral-charcoal antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
