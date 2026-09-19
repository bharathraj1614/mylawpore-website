import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | KVS Associatez",
  description:
    "Terms of service for accessing and using the official website of M/s. K.V. Subramanian Associatez.",
  alternates: {
    canonical: "https://kvsassociatez.in/terms-of-service",
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
