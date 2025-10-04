"use client";
import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function CtaSection() {
  return (
    <motion.section
      className="py-16 md:py-24 bg-brand-navy text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-gold mb-6">
          Have a Legal Question?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 font-sans text-neutral-light-grey">
          Our team is ready to provide you with the expert legal advice you
          need. Reach out to us today to discuss your case.
        </p>
        <Button href="/contact" variant="primary" size="lg">
          Enquire Now
        </Button>
      </div>
    </motion.section>
  );
}
