"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/legacy/image";

// A simple component for statistics
const StatItem = ({ value, label }: { value: string; label: string }) => (
  <motion.div
    className="text-center"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <p className="text-4xl font-serif font-bold text-brand-gold">{value}</p>
    <p className="text-md font-sans text-neutral-grey mt-1">{label}</p>
  </motion.div>
);

export default function AboutUsPage() {
  const missionPoints = [
    "Ensuring to reach perfection by excelling in legal profession.",
    "Accessibility to all needy citizens to solve their legal requirements.",
    "Maintaining utmost integrity and ethics in the legal profession.",
    "Treating the profession as a service.",
    "Exploring innovations to get highest proficiency.",
  ];

  const visionPoints = [
    "To make our legal firm a global requirement for all needy company/individuals.",
    "To introduce the latest technology to help litigants and other people.",
    "To adopt simple and honest approach under all circumstances.",
  ];

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
            About Our Firm
          </motion.h1>
          <motion.p
            className="text-lg mt-4 max-w-2xl mx-auto text-neutral-light-grey"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A legacy of justice, integrity, and client-focused advocacy since
            1979.
          </motion.p>
        </div>
      </div>

      {/* Our Story Section */}
      <motion.section
        className="py-16 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-navy mb-6">
              Our Foundation
            </h2>
            <p className="text-lg text-neutral-grey mb-4 font-sans">
              M/s. K.V. Subramanian Associatez was established in 1979 and is a
              registered firm before the Hon’ble High Court at Madras. Our firm
              is dedicated to catering to the legal requirements of litigants
              and providing clear, effective solutions for those who approach us
              for legal advice.
            </p>
            <p className="text-lg text-neutral-grey font-sans">
              We handle a multitude of cases relating to Appellate, original and
              Testamentary Jurisdiction, as well as tax, service, banking,
              company, property and labour matters.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/frim-building.jpg" // Replace with a real image
              alt="Our Firm's Office"
              width={500}
              height={400}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <div className="bg-neutral-light-grey py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-serif text-brand-navy mb-6">
              Our Mission
            </h2>
            <ul className="space-y-3">
              {missionPoints.map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-brand-gold mr-3 mt-1">✓</span>
                  <span className="font-sans text-neutral-grey text-lg">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-serif text-brand-navy mb-6">
              Our Vision
            </h2>
            <ul className="space-y-3">
              {visionPoints.map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-brand-gold mr-3 mt-1">✓</span>
                  <span className="font-sans text-neutral-grey text-lg">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Our Strength Section */}
      <motion.section
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-navy">
              Our Strength in Numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem value="30+" label="Legal Professionals" />
            <StatItem value="4" label="Nationalized Banks (Panel Advocate)" />
            <StatItem
              value="21+"
              label="Educational Institutions Represented"
            />
            <StatItem value="1979" label="Year Established" />
          </div>
        </div>
      </motion.section>

      {/* CTA to Team Page */}
      <div className="bg-brand-navy text-center py-16">
        <h2 className="text-3xl font-serif text-brand-gold mb-4">
          Meet the Minds Behind Our Success
        </h2>
        <p className="text-lg text-neutral-light-grey mb-8 max-w-2xl mx-auto">
          Our team of dedicated advocates is our greatest asset.
        </p>
        <Button href="/our-team" variant="primary" size="lg">
          View Our Team
        </Button>
      </div>
    </>
  );
}
