"use client";

import { motion } from "framer-motion";

// Animation variants for stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-800">
      {/* 
        --- HERO SECTION ---
        Added a gradient overlay and pattern for visual texture 
      */}
      <div className="relative bg-brand-navy text-white pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
        {/* Decorative Background Element (Optional subtle gradient) */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-gold tracking-tight mb-4">
              Disclaimer
            </h1>
            <div className="h-1 w-24 bg-brand-gold mx-auto rounded-full mb-6" />
            <p className="text-base md:text-xl text-neutral-200 max-w-2xl mx-auto font-light leading-relaxed">
              Please read the following legal information carefully regarding
              the use of our website and services.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 
        --- MAIN CONTENT CARD ---
        Uses negative top margin to overlap the hero section
      */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          className="relative z-20 -mt-12 md:-mt-16 bg-white rounded-xl shadow-xl border border-neutral-100 overflow-hidden max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="p-6 sm:p-10 md:p-16">
            {/* Content Wrapper */}
            <article className="prose prose-neutral prose-lg max-w-none">
              {/* Section 1 */}
              <motion.section
                variants={itemVariants}
                className="mb-10 md:mb-14"
              >
                <h2 className="flex items-center text-2xl md:text-3xl font-serif text-brand-navy font-semibold mb-4 pb-2 border-b border-neutral-200">
                  General Information Only
                </h2>
                <p className="text-neutral-600 leading-loose text-base md:text-lg">
                  The content of this website is provided for general
                  informational purposes only and does not constitute legal
                  advice. The information on this website may not reflect the
                  most current legal developments, verdicts, or settlements. We
                  do not warrant or guarantee the accuracy, completeness, or
                  adequacy of the information contained herein.
                </p>
              </motion.section>

              {/* Section 2 */}
              <motion.section
                variants={itemVariants}
                className="mb-10 md:mb-14"
              >
                <h2 className="flex items-center text-2xl md:text-3xl font-serif text-brand-navy font-semibold mb-4 pb-2 border-b border-neutral-200">
                  No Attorney-Client Relationship
                </h2>
                <div className="space-y-4 text-neutral-600 leading-loose text-base md:text-lg">
                  <p>
                    Transmission of information from this website does not
                    create an attorney-client relationship between you and{" "}
                    <span className="font-semibold text-brand-navy">
                      M/s. K.V. Subramanian Associatez
                    </span>
                    , nor is it intended to do so. The submission of an online
                    form, an email, or any other communication through this
                    website does not create an attorney-client relationship.
                  </p>
                  <div className="bg-brand-navy/5 border-l-4 border-brand-navy p-4 rounded-r-lg my-4">
                    <p className="text-sm md:text-base text-brand-navy font-medium italic">
                      "You should not act or rely on any information on this
                      website without seeking the advice of a competent attorney
                      licensed to practice in your jurisdiction."
                    </p>
                  </div>
                  <p>
                    We cannot represent you until we know that doing so will not
                    create a conflict of interest. Therefore, please do not send
                    us any confidential information about any legal matter until
                    you receive a written statement from us that we represent
                    you.
                  </p>
                </div>
              </motion.section>

              {/* Section 3 */}
              <motion.section
                variants={itemVariants}
                className="mb-10 md:mb-14"
              >
                <h2 className="flex items-center text-2xl md:text-3xl font-serif text-brand-navy font-semibold mb-4 pb-2 border-b border-neutral-200">
                  Not Legal Advice
                </h2>
                <p className="text-neutral-600 leading-loose text-base md:text-lg">
                  The information contained in this website is not intended to
                  be a substitute for legal advice from a qualified attorney.
                  Each legal problem depends on its individual facts, and
                  different jurisdictions have different laws and regulations.
                </p>
              </motion.section>

              {/* Section 4 */}
              <motion.section
                variants={itemVariants}
                className="mb-10 md:mb-14"
              >
                <h2 className="flex items-center text-2xl md:text-3xl font-serif text-brand-navy font-semibold mb-4 pb-2 border-b border-neutral-200">
                  External Links
                </h2>
                <p className="text-neutral-600 leading-loose text-base md:text-lg">
                  This website may contain links to other third-party websites.
                  These links are provided solely as a convenience to you and
                  not as an endorsement by M/s. K.V. Subramanian Associatez of
                  the content on such third-party websites. We are not
                  responsible for the content of linked third-party sites and do
                  not make any representations regarding the content or accuracy
                  of materials on such third-party websites.
                </p>
              </motion.section>

              {/* Section 5 */}
              <motion.section
                variants={itemVariants}
                className="mb-10 md:mb-14"
              >
                <h2 className="flex items-center text-2xl md:text-3xl font-serif text-brand-navy font-semibold mb-4 pb-2 border-b border-neutral-200">
                  No Guarantee of Results
                </h2>
                <p className="text-neutral-600 leading-loose text-base md:text-lg">
                  Any results described on this website are based on the facts
                  of particular cases and do not represent a promise or
                  guarantee of similar results in other cases.
                </p>
              </motion.section>

              {/* Section 6 */}
              <motion.section
                variants={itemVariants}
                className="mb-10 md:mb-14"
              >
                <h2 className="flex items-center text-2xl md:text-3xl font-serif text-brand-navy font-semibold mb-4 pb-2 border-b border-neutral-200">
                  Jurisdiction and Governing Law
                </h2>
                <p className="text-neutral-600 leading-loose text-base md:text-lg">
                  This website is controlled and operated by M/s. K.V.
                  Subramanian Associatez from its offices in Chennai, Tamil
                  Nadu, India. By accessing this website, you agree that the
                  laws of India, without regard to principles of conflict of
                  laws, will govern these disclaimers and any dispute of any
                  sort that might arise between you and M/s. K.V. Subramanian
                  Associatez.
                </p>
              </motion.section>

              {/* Section 7 */}
              <motion.section variants={itemVariants} className="mb-8">
                <h2 className="flex items-center text-2xl md:text-3xl font-serif text-brand-navy font-semibold mb-4 pb-2 border-b border-neutral-200">
                  Changes to Disclaimer
                </h2>
                <p className="text-neutral-600 leading-loose text-base md:text-lg">
                  M/s. K.V. Subramanian Associatez reserves the right to change
                  this disclaimer at any time without notice. Any changes will
                  be posted on this page.
                </p>
              </motion.section>
            </article>

            {/* Footer / Last Updated */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-6 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4"
            >
              <span className="px-4 py-1 rounded-full bg-neutral-100 text-neutral-500 text-sm font-medium">
                Status: Active
              </span>
              <p className="text-sm text-neutral-400 italic">
                Last updated:{" "}
                <span className="text-neutral-600 font-semibold">
                  October 07, 2025
                </span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
