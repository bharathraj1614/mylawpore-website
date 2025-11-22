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
              className="bg-white p-6 rounded-lg shadow-md border border-neutral-light-grey flex flex-col h-full"
              variants={itemVariants}
            >
              {/* --- Profile Header --- */}
              <div className="flex flex-col items-center mb-6 text-center">
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src={advocate.imageUrl}
                    alt={`Profile of ${advocate.name}`}
                    fill
                    className="rounded-full border-4 border-brand-gold object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-2xl font-serif text-brand-navy mb-1">
                  {advocate.name}
                </h3>
                <p className="text-brand-gold font-semibold text-lg mb-2">
                  {advocate.title}
                </p>
                {/* Experience / Status Tag */}
                {advocate.experienceTag && (
                  <span className="inline-block bg-brand-light-gold/20 text-brand-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {advocate.experienceTag}
                  </span>
                )}
              </div>

              {/* --- Overview --- */}
              <div className="mb-6 text-center">
                <p className="text-neutral-grey font-sans text-sm leading-relaxed">
                  {advocate.summary}
                </p>
              </div>

              {/* --- Divider --- */}
              <hr className="border-neutral-light-grey mb-6" />

              {/* --- Full Expertise Tags --- */}
              {advocate.areasOfPractice &&
                advocate.areasOfPractice.length > 0 && (
                  <div className="mt-auto">
                    <h4 className="text-sm font-bold text-brand-navy mb-3 uppercase tracking-wider text-center">
                      Areas of Practice
                    </h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {advocate.areasOfPractice.map((area, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-md border border-neutral-200 whitespace-nowrap"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
            </motion.div>
          ))}
        </div>

        {/* Global Team Link */}
        <div className="text-center">
          <Button href="/our-team" variant="outline" size="lg">
            View Our Entire Team
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
