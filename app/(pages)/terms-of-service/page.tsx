"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

// Section data for TOC and mapping
const sections = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "license", title: "Use License" },
  { id: "disclaimer", title: "Disclaimer & Liability" },
  { id: "accuracy", title: "Accuracy of Materials" },
  { id: "links", title: "Third-Party Links" },
  { id: "modifications", title: "Modifications" },
  { id: "governing", title: "Governing Law" },
];

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState("");

  // Simple scroll spy to highlight active section in sidebar
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
      {/* Page Header with Pattern Overlay */}
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
              Terms of Service
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
            Please read these terms carefully before using our services.
          </motion.p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
          {/* Sidebar Navigation (Hidden on mobile, Sticky on Desktop) */}
          <aside className="hidden lg:block lg:w-1/4">
            <div className="sticky top-24">
              <h3 className="text-brand-navy font-serif text-xl mb-6 pl-4 border-l-2 border-transparent">
                Table of Contents
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
                  Last Updated
                </p>
                <p className="text-brand-navy font-serif text-lg">
                  Oct 07, 2025
                </p>
              </div>
            </div>
          </aside>

          {/* Legal Text Content */}
          <motion.main
            className="lg:w-3/4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white p-6 md:p-12 rounded-xl shadow-sm border border-gray-100">
              {/* Mobile Last Updated (Visible only on small screens) */}
              <div className="lg:hidden mb-8 p-4 bg-gray-50 rounded border border-gray-100 text-center">
                <p className="text-sm text-neutral-charcoal">
                  Last updated:{" "}
                  <span className="font-semibold text-brand-navy">
                    Oct 07, 2025
                  </span>
                </p>
              </div>

              <div className="space-y-12 md:space-y-16 text-neutral-charcoal font-sans leading-relaxed">
                {/* Section: Acceptance */}
                <section id="acceptance" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-serif text-brand-navy mb-6 flex items-center">
                    <span className="text-brand-gold text-lg mr-3">01.</span>
                    Acceptance of Terms
                  </h2>
                  <p className="text-base md:text-lg text-gray-600">
                    By accessing and using the website of{" "}
                    <strong className="text-brand-navy">
                      M/s. K.V. Subramanian Associatez
                    </strong>{" "}
                    (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you
                    agree to be bound by these Terms of Service, all applicable
                    laws and regulations, and agree that you are responsible for
                    compliance with any applicable local laws. If you do not
                    agree with any of these terms, you are prohibited from using
                    or accessing this site.
                  </p>
                </section>

                <hr className="border-gray-100" />

                {/* Section: License */}
                <section id="license" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-serif text-brand-navy mb-6 flex items-center">
                    <span className="text-brand-gold text-lg mr-3">02.</span>
                    Use License
                  </h2>
                  <p className="mb-6 text-gray-600">
                    Permission is granted to temporarily download one copy of
                    the materials (information or software) on M/s. K.V.
                    Subramanian Associatez website for personal, non-commercial
                    transitory viewing only. This is the grant of a license, not
                    a transfer of title, and under this license you may not:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-gold">
                    <ul className="space-y-3 text-gray-700">
                      {[
                        "Modify or copy the materials.",
                        "Use the materials for any commercial purpose, or for any public display (commercial or non-commercial).",
                        "Attempt to decompile or reverse engineer any software contained on our website.",
                        "Remove any copyright or other proprietary notations from the materials.",
                        'Transfer the materials to another person or "mirror" the materials on any other server.',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-brand-navy mr-3 mt-1.5 text-xs">
                            •
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-6 text-gray-600">
                    This license shall automatically terminate if you violate
                    any of these restrictions and may be terminated by M/s. K.V.
                    Subramanian Associatez at any time.
                  </p>
                </section>

                <hr className="border-gray-100" />

                {/* Section: Disclaimer */}
                <section id="disclaimer" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-serif text-brand-navy mb-6 flex items-center">
                    <span className="text-brand-gold text-lg mr-3">03.</span>
                    Disclaimer & Liability
                  </h2>
                  <p className="mb-4 text-gray-600">
                    The materials on M/s. K.V. Subramanian Associatez website
                    are provided on an &quot;as is&quot; basis. We make no
                    warranties, expressed or implied, and hereby disclaim and
                    negate all other warranties including, without limitation,
                    implied warranties or conditions of merchantability, fitness
                    for a particular purpose, or non-infringement of
                    intellectual property or other violation of rights.
                  </p>
                  <p className="text-gray-600">
                    In no event shall M/s. K.V. Subramanian Associatez or its
                    suppliers be liable for any damages (including, without
                    limitation, damages for loss of data or profit, or due to
                    business interruption) arising out of the use or inability
                    to use the materials on our website.
                  </p>
                </section>

                <hr className="border-gray-100" />

                {/* Section: Accuracy */}
                <section id="accuracy" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-serif text-brand-navy mb-6 flex items-center">
                    <span className="text-brand-gold text-lg mr-3">04.</span>
                    Accuracy of Materials
                  </h2>
                  <p className="text-gray-600">
                    The materials appearing on M/s. K.V. Subramanian Associatez
                    website could include technical, typographical, or
                    photographic errors. We do not warrant that any of the
                    materials on its website are accurate, complete, or current.
                    We may make changes to the materials contained on our
                    website at any time without notice.
                  </p>
                </section>

                <hr className="border-gray-100" />

                {/* Section: Links */}
                <section id="links" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-serif text-brand-navy mb-6 flex items-center">
                    <span className="text-brand-gold text-lg mr-3">05.</span>
                    Third-Party Links
                  </h2>
                  <p className="text-gray-600">
                    M/s. K.V. Subramanian Associatez has not reviewed all of the
                    sites linked to its website and is not responsible for the
                    contents of any such linked site. The inclusion of any link
                    does not imply endorsement by us of the site. Use of any
                    such linked website is at the users own risk.
                  </p>
                </section>

                <hr className="border-gray-100" />

                {/* Section: Modifications & Governing */}
                <section id="modifications" className="scroll-mt-28">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-xl md:text-2xl font-serif text-brand-navy mb-4">
                        Modifications
                      </h2>
                      <p className="text-sm md:text-base text-gray-600">
                        M/s. K.V. Subramanian Associatez may revise these Terms
                        of Service for its website at any time without notice.
                        By using this website, you are agreeing to be bound by
                        the then-current version of these Terms of Service.
                      </p>
                    </div>
                    <div id="governing">
                      <h2 className="text-xl md:text-2xl font-serif text-brand-navy mb-4">
                        Governing Law
                      </h2>
                      <p className="text-sm md:text-base text-gray-600">
                        These terms and conditions are governed by and construed
                        in accordance with the laws of{" "}
                        <strong className="text-brand-navy">India</strong> and
                        you irrevocably submit to the exclusive jurisdiction of
                        the courts in that State or location.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="text-center mt-12 mb-8">
              <p className="text-gray-400 text-sm">
                Questions about these terms?{" "}
                <a
                  href="/contact"
                  className="text-brand-navy hover:text-brand-gold underline transition-colors"
                >
                  Contact Support
                </a>
              </p>
            </div>
          </motion.main>
        </div>
      </div>
    </div>
  );
}
