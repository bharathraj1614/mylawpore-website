"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DisclaimerModal from "@/components/ui/DisclaimerModal";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isDisclaimerAccepted, setDisclaimerAccepted] = useState(true);
  const [hasCheckedDisclaimer, setHasCheckedDisclaimer] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("disclaimerAccepted");
    if (accepted !== "true") {
      if (pathname === "/disclaimer") {
        setDisclaimerAccepted(true);
      } else {
        setDisclaimerAccepted(false);
      }
    }
    setHasCheckedDisclaimer(true);
  }, [pathname]);

  const handleAcceptDisclaimer = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setDisclaimerAccepted(true);
  };

  const showModal = hasCheckedDisclaimer && !isDisclaimerAccepted;

  return (
    <>
      {showModal && <DisclaimerModal onAccept={handleAcceptDisclaimer} />}

      <div
        className={`${showModal ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} transition-opacity duration-300 flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
