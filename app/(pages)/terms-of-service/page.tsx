"use client";

import { motion } from "framer-motion";

export default function TermsOfServicePage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-brand-navy text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-serif text-brand-gold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Terms of Service
          </motion.h1>
          <motion.p
            className="text-base md:text-lg mt-4 max-w-2xl mx-auto text-neutral-light-grey px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The legal agreement between you and M/s. K.V. Subramanian
            Associatez.
          </motion.p>
        </div>
      </div>

      {/* Terms of Service Content Section */}
      <motion.section
        className="py-12 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl text-neutral-charcoal font-sans leading-relaxed text-sm sm:text-base">
          <h2 className="text-2xl sm:text-3xl font-serif text-brand-navy mb-4 md:mb-6">
            Acceptance of Terms
          </h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            By accessing and using the website of M/s. K.V. Subramanian
            Associatez (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you
            agree to be bound by these Terms of Service, all applicable laws and
            regulations, and agree that you are responsible for compliance with
            any applicable local laws. If you do not agree with any of these
            terms, you are prohibited from using or accessing this site.
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif text-brand-navy mb-4 md:mb-6 mt-8 sm:mt-12">
            Use License
          </h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            Permission is granted to temporarily download one copy of the
            materials (information or software) on M/s. K.V. Subramanian
            Associatez website for personal, non-commercial transitory viewing
            only. This is the grant of a license, not a transfer of title, and
            under this license you may not:
          </p>
          <ul className="list-disc pl-6 mb-4 sm:mb-6 space-y-2 text-sm sm:text-base">
            <li>Modify or copy the materials.</li>
            <li>
              Use the materials for any commercial purpose, or for any public
              display (commercial or non-commercial).
            </li>
            <li>
              Attempt to decompile or reverse engineer any software contained on
              our website.
            </li>
            <li>
              Remove any copyright or other proprietary notations from the
              materials.
            </li>
            <li>
              Transfer the materials to another person or &quot;mirror&quot; the
              materials on any other server.
            </li>
          </ul>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            This license shall automatically terminate if you violate any of
            these restrictions and may be terminated by M/s. K.V. Subramanian
            Associatez at any time.
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif text-brand-navy mb-4 md:mb-6 mt-8 sm:mt-12">
            Disclaimer of Warranties; Limitation of Liability
          </h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            The materials on M/s. K.V. Subramanian Associatez website are
            provided on an &quot;as is&quot; basis. We make no warranties,
            expressed or implied, and hereby disclaim and negate all other
            warranties including, without limitation, implied warranties or
            conditions of merchantability, fitness for a particular purpose, or
            non-infringement of intellectual property or other violation of
            rights.
          </p>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            In no event shall M/s. K.V. Subramanian Associatez or its suppliers
            be liable for any damages (including, without limitation, damages
            for loss of data or profit, or due to business interruption) arising
            out of the use or inability to use the materials on our website,
            even if we or an authorized representative has been notified orally
            or in writing of the possibility of such damage.
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif text-brand-navy mb-4 md:mb-6 mt-8 sm:mt-12">
            Accuracy of Materials
          </h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            The materials appearing on M/s. K.V. Subramanian Associatez website
            could include technical, typographical, or photographic errors. We
            do not warrant that any of the materials on its website are
            accurate, complete, or current. We may make changes to the materials
            contained on our website at any time without notice.
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif text-brand-navy mb-4 md:mb-6 mt-8 sm:mt-12">
            Links
          </h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            M/s. K.V. Subramanian Associatez has not reviewed all of the sites
            linked to its website and is not responsible for the contents of any
            such linked site. The inclusion of any link does not imply
            endorsement by us of the site. Use of any such linked website is at
            the users own risk.
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif text-brand-navy mb-4 md:mb-6 mt-8 sm:mt-12">
            Modifications
          </h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            M/s. K.V. Subramanian Associatez may revise these Terms of Service
            for its website at any time without notice. By using this website,
            you are agreeing to be bound by the then-current version of these
            Terms of Service.
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif text-brand-navy mb-4 md:mb-6 mt-8 sm:mt-12">
            Governing Law
          </h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            These terms and conditions are governed by and construed in
            accordance with the laws of India and you irrevocably submit to the
            exclusive jurisdiction of the courts in that State or location.
          </p>

          <p className="text-sm sm:text-base italic mt-8 sm:mt-12">
            Last updated: Oct 07, 2025
          </p>
        </div>
      </motion.section>
    </>
  );
}
