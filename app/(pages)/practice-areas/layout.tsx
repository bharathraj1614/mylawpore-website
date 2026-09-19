import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice Areas | Banking, Property & Corporate Law | KVS Associatez",
  description:
    "Explore our legal practice areas at KVS Associatez Chennai, including Banking Matters & SARFAESI applications, Property Disputes, Corporate Law, and Labour Matters.",
  keywords: [
    "banking lawyer Chennai",
    "SARFAESI act Chennai",
    "DRT advocates Chennai",
    "property dispute lawyers Chennai",
    "KVS Associatez practice areas",
  ],
  alternates: {
    canonical: "https://kvsassociatez.in/practice-areas",
  },
};

export default function PracticeAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
