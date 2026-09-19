import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Insights & Blog | KVS Associatez",
  description:
    "Read articles and legal insights on banking law, SARFAESI Act, property disputes, testamentary law, and corporate regulations by experienced Chennai advocates at KVS Associatez.",
  keywords: [
    "KVS Associatez blog",
    "banking law Chennai",
    "SARFAESI act Chennai lawyer",
    "legal articles India",
    "Madras High Court advocates",
  ],
  alternates: {
    canonical: "https://kvsassociatez.in/blog",
  },
  openGraph: {
    title: "Legal Insights & Blog | KVS Associatez",
    description:
      "Articles and legal insights on banking law, SARFAESI Act, property disputes, and civil litigation by KVS Associatez.",
    url: "https://kvsassociatez.in/blog",
    siteName: "M/s. K.V. Subramanian Associatez",
    locale: "en_IN",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
