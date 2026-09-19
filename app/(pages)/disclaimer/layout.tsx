import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Bar Council of India Compliance | KVS Associatez",
  description:
    "Official legal disclaimer for M/s. K.V. Subramanian Associatez in compliance with the Bar Council of India rules prohibiting solicitation and advertising.",
  alternates: {
    canonical: "https://kvsassociatez.in/disclaimer",
  },
};

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
