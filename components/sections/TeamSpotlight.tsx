"use client";

import { easeOut, motion } from "framer-motion";
import { featuredAdvocates } from "@/data/advocates";
import Image from "next/image";
import Button from "../ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export default function TeamSpotlight() {
  return (
    <motion.section
      className="py-16 md:py-24 bg-neutral-off-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-navy mb-4">
            Meet Our Experienced Advocates
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-neutral-grey">
            Led by a Senior Counsel with decades of experience, our team is
            dedicated to your success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredAdvocates.map((advocate) => (
            <motion.div
              key={advocate.name}
              className="text-center bg-white p-6 rounded-lg shadow-md border border-neutral-light-grey"
              variants={itemVariants}
            >
              <Image
                src={advocate.imageUrl}
                alt={`Profile of ${advocate.name}`}
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4 border-4 border-brand-gold"
              />
              <h3 className="text-2xl font-serif text-brand-navy">
                {advocate.name}
              </h3>
              <p className="text-brand-gold font-semibold mb-3">
                {advocate.title}
              </p>
              <p className="text-neutral-grey font-sans">{advocate.bio}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Button href="/our-team" variant="outline" size="lg">
            View Our Entire Team
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
