import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | M/s. K.V. Subramanian Associatez | Law Firm in Chennai",
  description:
    "Learn about M/s. K.V. Subramanian Associatez (KVS Associatez), our legal heritage, foundational values, and team of advocates practicing before the Madras High Court and tribunals.",
  keywords: [
    "About KVS Associatez",
    "K.V. Subramanian advocates Chennai",
    "Chennai law firm history",
    "Madras High Court lawyers",
  ],
  alternates: {
    canonical: "https://kvsassociatez.in/about",
  },
  openGraph: {
    title: "About Us | M/s. K.V. Subramanian Associatez",
    description:
      "Learn about KVS Associatez, our legal heritage, core ethics, and senior advocates in Chennai.",
    url: "https://kvsassociatez.in/about",
    siteName: "M/s. K.V. Subramanian Associatez",
    locale: "en_IN",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
