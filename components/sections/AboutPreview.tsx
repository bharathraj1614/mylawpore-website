"use client";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <motion.section
      className="py-16 md:py-24 bg-neutral-off-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-navy mb-6">
            A Legacy of Trust & Expertise
          </h2>
          <p className="text-lg text-neutral-grey mb-8 font-sans">
            M/s. K.V. Subramanian Associatez was established in 2011 to cater to
            the legal requirements of litigants with integrity and proficiency.
            We are a registered panel advocate for nationalized banks,
            government corporations, and educational institutions, committed to
            delivering justice.
          </p>
          <Button href="/about" variant="outline" size="md">
            Learn More About Us
          </Button>
        </div>
        {/* Image Placeholder */}
        <Image
          src="/office-image.png"
          alt="Firm's office interior"
          className="rounded-lg shadow-xl"
          width={500} // Replace with the actual width of your image
          height={300} // Replace with the actual height of your image
        />
      </div>
    </motion.section>
  );
}
