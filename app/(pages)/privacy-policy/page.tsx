"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </motion.h1>
          <motion.p
            className="text-base md:text-lg mt-4 max-w-2xl mx-auto text-neutral-light-grey px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our commitment to protecting your privacy and personal information.
          </motion.p>
        </div>
      </div>

      {/* Privacy Policy Content Section */}
      <motion.section
        className="py-12 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl text-neutral-charcoal font-sans leading-relaxed text-sm sm:text-base">
          <h2 className="text-2xl sm:text-3xl font-serif text-brand-navy mb-4 md:mb-6">
            Introduction
          </h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            This Privacy Policy describes how M/s. K.V. Subramanian Associatez
            (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses,
            and shares information when you visit or make use of our website. We
            are committed to protecting your privacy and ensuring the security
            of your personal information.
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif text-brand-navy mb-4 md:mb-6 mt-8 sm:mt-12">
            Information We Collect
          </h2>
          <p className="mb-2 sm:mb-4 text-sm sm:text-base">
            We may collect various types of information in connection with your
            use of our website, including:
          </p>
          <ul className="list-disc pl-6 mb-4 sm:mb-6 space-y-2 text-sm sm:text-base">
            <li>
              **Personal Information:** Such as your name, email address, phone
              number, and any other details you provide when contacting us
              through forms or email.
            </li>
            <li>
              **Usage Data:** Information about how you access and use the
              website, including IP address, browser type, pages visited, and
              time spent on pages.
            </li>
            <li>
              **Cookies:** We may use cookies and similar tracking technologies
              to track the activity on our website and hold certain information.
            </li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-serif text-brand-navy mb-4 md:mb-6 mt-8 sm:mt-12">
            How We Use Your Information
          </h2>
          <p className="mb-2 sm:mb-4 text-sm sm:text-base">
            We use the collected information for various purposes, including:
          </p>
          <ul className="list-disc pl-6 mb-4 sm:mb-6 space-y-2 text-sm sm:text-base">
            <li>To provide and maintain our legal services and website.</li>
            <li>To respond to your inquiries and provide customer support.</li>
            <li>To improve our website, services, and user experience.</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-serif text-brand-navy mb-4 md:mb-6 mt-8 sm:mt-12">
            Sharing Your Information
          </h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            We do not sell, trade, or otherwise transfer to outside parties your
            personally identifiable information. This does not include trusted
            third parties who assist us in operating our website, conducting our
            business, or serving you, so long as those parties agree to keep
            this information confidential. We may also release your information
            when we believe release is appropriate to comply with the law,
            enforce our site policies, or protect ours or others rights,
            property, or safety.
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif text-brand-navy mb-4 md:mb-6 mt-8 sm:mt-12">
            Security of Your Data
          </h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            The security of your data is important to us, but remember that no
            method of transmission over the Internet or method of electronic
            storage is 100% secure. While we strive to use commercially
            acceptable means to protect your personal data, we cannot guarantee
            its absolute security.
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif text-brand-navy mb-4 md:mb-6 mt-8 sm:mt-12">
            Your Rights
          </h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            Depending on your jurisdiction, you may have rights regarding your
            personal information, such as the right to access, correct, or
            delete the data we hold about you. Please contact us to exercise
            these rights.
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif text-brand-navy mb-4 md:mb-6 mt-8 sm:mt-12">
            Changes to This Privacy Policy
          </h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            You are advised to review this Privacy Policy periodically for any
            changes.
          </p>

          <p className="text-sm sm:text-base italic mt-8 sm:mt-12">
            Last updated: Oct 07, 2025
          </p>
        </div>
      </motion.section>
    </>
  );
}
