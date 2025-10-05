"use client";

import { motion } from "framer-motion";

export default function DisclaimerPage() {
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
            Disclaimer
          </motion.h1>
          <motion.p
            className="text-base md:text-lg mt-4 max-w-2xl mx-auto text-neutral-light-grey px-2" // Added px-2 for header text
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Important legal information regarding the use of this website.
          </motion.p>
        </div>
      </div>

      {/* Disclaimer Content Section */}
      <motion.section
        className="py-12 md:py-24" // Reduced vertical padding slightly for mobile
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl text-neutral-charcoal font-sans leading-relaxed text-sm sm:text-base">
          {" "}
          {/* Adjusted text size for smaller screens */}
          <h2 className="text-2xl sm:text-3xl font-serif text-brand-navy mb-4 md:mb-6">
            {" "}
            {/* Adjusted heading size for smaller screens */}
            General Information Only
          </h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            {" "}
            {/* Adjusted paragraph size */}
            The content of this website is provided for general informational
            purposes only and does not constitute legal advice. The information
            on this website may not reflect the most current legal developments,
            verdicts, or settlements. We do not warrant or guarantee the
            accuracy, completeness, or adequacy of the information contained
            herein.
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-brand-navy mb-4 md:mb-6 mt-8 sm:mt-12">
            No Attorney-Client Relationship
          </h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            Transmission of information from this website does not create an
            attorney-client relationship between you and M/s. K.V. Subramanian
            Associatez, nor is it intended to do so. The submission of an online
            form, an email, or any other communication through this website does
            not create an attorney-client relationship. You should not act or
            rely on any information on this website without seeking the advice
            of a competent attorney licensed to practice in your jurisdiction.
          </p>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            We cannot represent you until we know that doing so will not create
            a conflict of interest. Therefore, please do not send us any
            confidential information about any legal matter until you receive a
            written statement from us that we represent you.
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-brand-navy mb-4 md:mb-6 mt-8 sm:mt-12">
            Not Legal Advice
          </h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            The information contained in this website is not intended to be a
            substitute for legal advice from a qualified attorney. Each legal
            problem depends on its individual facts, and different jurisdictions
            have different laws and regulations.
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-brand-navy mb-4 md:mb-6 mt-8 sm:mt-12">
            External Links
          </h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            This website may contain links to other third-party websites. These
            links are provided solely as a convenience to you and not as an
            endorsement by M/s. K.V. Subramanian Associatez of the content on
            such third-party websites. We are not responsible for the content of
            linked third-party sites and do not make any representations
            regarding the content or accuracy of materials on such third-party
            websites.
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-brand-navy mb-4 md:mb-6 mt-8 sm:mt-12">
            No Guarantee of Results
          </h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            Any results described on this website are based on the facts of
            particular cases and do not represent a promise or guarantee of
            similar results in other cases.
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-brand-navy mb-4 md:mb-6 mt-8 sm:mt-12">
            Jurisdiction and Governing Law
          </h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            This website is controlled and operated by M/s. K.V. Subramanian
            Associatez from its offices in Chennai, Tamil Nadu, India. By
            accessing this website, you agree that the laws of India, without
            regard to principles of conflict of laws, will govern these
            disclaimers and any dispute of any sort that might arise between you
            and M/s. K.V. Subramanian Associatez.
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-brand-navy mb-4 md:mb-6 mt-8 sm:mt-12">
            Changes to Disclaimer
          </h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            M/s. K.V. Subramanian Associatez reserves the right to change this
            disclaimer at any time without notice. Any changes will be posted on
            this page.
          </p>
          <p className="text-sm sm:text-base italic mt-8 sm:mt-12">
            Last updated: Oct 07, 2025
          </p>
        </div>
      </motion.section>
    </>
  );
}
