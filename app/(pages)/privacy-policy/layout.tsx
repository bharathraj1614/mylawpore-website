import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | KVS Associatez",
  description:
    "Privacy policy of M/s. K.V. Subramanian Associatez governing the protection of client information and website usage data.",
  alternates: {
    canonical: "https://kvsassociatez.in/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
