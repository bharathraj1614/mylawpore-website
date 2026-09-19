import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Law Office in Mylapore, Chennai | KVS Associatez",
  description:
    "Contact M/s. K.V. Subramanian Associatez (KVS Associatez). Visit our law office at Brindavanam Street, Mylapore, Chennai or call +91 89257 33441 for consultations.",
  keywords: [
    "Contact KVS Associatez",
    "Lawyers in Mylapore",
    "Advocate contact Chennai",
    "K.V. Subramanian phone number",
    "Chennai law firm address",
  ],
  alternates: {
    canonical: "https://kvsassociatez.in/contact",
  },
  openGraph: {
    title: "Contact Us | Law Office in Mylapore, Chennai | KVS Associatez",
    description:
      "Contact KVS Associatez in Mylapore, Chennai. Schedule a legal consultation with our advocates.",
    url: "https://kvsassociatez.in/contact",
    siteName: "M/s. K.V. Subramanian Associatez",
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
