"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

// Section data for TOC
const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "collection", title: "Information We Collect" },
  { id: "usage", title: "How We Use Information" },
  { id: "sharing", title: "Sharing Information" },
  { id: "security", title: "Data Security" },
  { id: "rights", title: "Your Rights" },
  { id: "changes", title: "Policy Changes" },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("");

  // Scroll spy to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="relative bg-brand-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold uppercase tracking-widest text-sm font-semibold mb-3 block">
              Legal Documentation
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
              Privacy Policy
            </h1>
          </motion.div>

          <motion.div
            className="w-24 h-1 bg-brand-gold mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto text-neutral-light-grey px-2 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our commitment to protecting your privacy and personal information.
          </motion.p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
          {/* Sidebar Navigation (Desktop) */}
          <aside className="hidden lg:block lg:w-1/4">
            <div className="sticky top-24">
              <h3 className="text-brand-navy font-serif text-xl mb-6 pl-4 border-l-2 border-transparent">
                Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(section.id)?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className={`block py-2 pl-4 border-l-2 transition-all duration-300 text-sm ${
                      activeSection === section.id
                        ? "border-brand-gold text-brand-navy font-semibold bg-white/50"
                        : "border-gray-200 text-neutral-charcoal hover:border-brand-navy hover:text-brand-navy"
                    }`}
                  >
                    {section.title}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <p className="text-xs text-neutral-charcoal uppercase tracking-wider mb-2 font-semibold">
                  Effective Date
                </p>
                <p className="text-brand-navy font-serif text-lg">
                  Oct 07, 2025
                </p>
              </div>
            </div>
          </aside>

          {/* Privacy Policy Content */}
          <motion.main
            className="lg:w-3/4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white p-6 md:p-12 rounded-xl shadow-sm border border-gray-100">
              {/* Mobile Last Updated */}
              <div className="lg:hidden mb-8 p-4 bg-gray-50 rounded border border-gray-100 text-center">
                <p className="text-sm text-neutral-charcoal">
                  Last updated:{" "}
                  <span className="font-semibold text-brand-navy">
                    Oct 07, 2025
                  </span>
                </p>
              </div>

              <div className="space-y-12 md:space-y-16 text-neutral-charcoal font-sans leading-relaxed">
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-serif text-brand-navy mb-6 flex items-center">
                    <span className="text-brand-gold text-lg mr-3">01.</span>
                    Introduction
                  </h2>
                  <p className="text-base md:text-lg text-gray-600">
                    This Privacy Policy describes how{" "}
                    <strong className="text-brand-navy">
                      M/s. K.V. Subramanian Associatez
                    </strong>{" "}
                    (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
                    collects, uses, and shares information when you visit or
                    make use of our website. We are committed to protecting your
                    privacy and ensuring the security of your personal
                    information.
                  </p>
                </section>

                <hr className="border-gray-100" />

                {/* Information We Collect */}
                <section id="collection" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-serif text-brand-navy mb-6 flex items-center">
                    <span className="text-brand-gold text-lg mr-3">02.</span>
                    Information We Collect
                  </h2>
                  <p className="mb-6 text-gray-600">
                    We may collect various types of information in connection
                    with your use of our website. This includes both information
                    you provide directly and data collected automatically:
                  </p>

                  <div className="grid gap-4 md:grid-cols-1">
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-gold">
                      <h4 className="font-serif text-brand-navy text-lg mb-2">
                        Personal Information
                      </h4>
                      <p className="text-sm text-gray-600">
                        Such as your name, email address, phone number, and any
                        other details you provide when contacting us through
                        forms or email.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-navy">
                      <h4 className="font-serif text-brand-navy text-lg mb-2">
                        Usage Data
                      </h4>
                      <p className="text-sm text-gray-600">
                        Information about how you access and use the website,
                        including IP address, browser type, pages visited, and
                        time spent on pages.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-neutral-charcoal">
                      <h4 className="font-serif text-brand-navy text-lg mb-2">
                        Cookies
                      </h4>
                      <p className="text-sm text-gray-600">
                        We may use cookies and similar tracking technologies to
                        track the activity on our website and hold certain
                        information.
                      </p>
                    </div>
                  </div>
                </section>

                <hr className="border-gray-100" />

                {/* How We Use Information */}
                <section id="usage" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-serif text-brand-navy mb-6 flex items-center">
                    <span className="text-brand-gold text-lg mr-3">03.</span>
                    How We Use Your Information
                  </h2>
                  <p className="mb-6 text-gray-600">
                    We use the collected information for various purposes to
                    provide the best possible service:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {[
                      "To provide and maintain our legal services",
                      "To respond to inquiries & provide support",
                      "To improve user experience on our site",
                      "To comply with legal obligations",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-3 text-gray-700"
                      >
                        <svg
                          className="w-5 h-5 text-brand-gold flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <hr className="border-gray-100" />

                {/* Sharing Information */}
                <section id="sharing" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-serif text-brand-navy mb-6 flex items-center">
                    <span className="text-brand-gold text-lg mr-3">04.</span>
                    Sharing Your Information
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We do not sell, trade, or otherwise transfer to outside
                    parties your personally identifiable information.
                  </p>
                  <p className="text-gray-600">
                    This does not include trusted third parties who assist us in
                    operating our website, conducting our business, or serving
                    you, so long as those parties agree to keep this information
                    confidential. We may also release your information when we
                    believe release is appropriate to comply with the law,
                    enforce our site policies, or protect ours or others rights,
                    property, or safety.
                  </p>
                </section>

                <hr className="border-gray-100" />

                {/* Security */}
                <section id="security" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-serif text-brand-navy mb-6 flex items-center">
                    <span className="text-brand-gold text-lg mr-3">05.</span>
                    Security of Your Data
                  </h2>
                  <p className="text-gray-600">
                    The security of your data is important to us, but remember
                    that no method of transmission over the Internet or method
                    of electronic storage is 100% secure. While we strive to use
                    commercially acceptable means to protect your personal data,
                    we cannot guarantee its absolute security.
                  </p>
                </section>

                <hr className="border-gray-100" />

                {/* Rights & Changes */}
                <div className="grid md:grid-cols-2 gap-8">
                  <section id="rights" className="scroll-mt-28">
                    <h2 className="text-xl md:text-2xl font-serif text-brand-navy mb-4">
                      Your Rights
                    </h2>
                    <p className="text-sm md:text-base text-gray-600">
                      Depending on your jurisdiction, you may have rights
                      regarding your personal information, such as the right to
                      access, correct, or delete the data we hold about you.
                      Please contact us to exercise these rights.
                    </p>
                  </section>

                  <section id="changes" className="scroll-mt-28">
                    <h2 className="text-xl md:text-2xl font-serif text-brand-navy mb-4">
                      Changes to Policy
                    </h2>
                    <p className="text-sm md:text-base text-gray-600">
                      We may update our Privacy Policy from time to time. We
                      will notify you of any changes by posting the new Privacy
                      Policy on this page. You are advised to review this
                      Privacy Policy periodically for any changes.
                    </p>
                  </section>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 mb-8">
              <p className="text-gray-400 text-sm">
                For privacy concerns, please email us at{" "}
                <a
                  href="mailto:info@kvsassociatez.com"
                  className="text-brand-navy hover:text-brand-gold underline transition-colors"
                >
                  info@kvsassociatez.com
                </a>
              </p>
            </div>
          </motion.main>
        </div>
      </div>
    </div>
  );
}
