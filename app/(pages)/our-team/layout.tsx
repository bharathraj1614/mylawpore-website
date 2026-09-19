import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Senior Advocates & Legal Counsel | KVS Associatez",
  description:
    "Meet the experienced advocates and legal team at M/s. K.V. Subramanian Associatez in Chennai, led by Mr. K.V. Subramanian, Mr. M.A. Abdul Wahab, Mr. S. Deenadhayalan, and Mr. R. Jagadeesan.",
  keywords: [
    "KVS Associatez lawyers",
    "K.V. Subramanian advocate",
    "M.A. Abdul Wahab advocate",
    "S. Deenadhayalan advocate",
    "R. Jagadeesan advocate",
    "Chennai high court advocates",
  ],
  alternates: {
    canonical: "https://kvsassociatez.in/our-team",
  },
  openGraph: {
    title: "Our Team | Senior Advocates & Legal Counsel | KVS Associatez",
    description:
      "Meet our team of senior advocates and legal counsel at KVS Associatez Chennai.",
    url: "https://kvsassociatez.in/our-team",
    siteName: "M/s. K.V. Subramanian Associatez",
    locale: "en_IN",
    type: "website",
  },
};

export default function OurTeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
