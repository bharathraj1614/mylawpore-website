"use client";

import { motion, Variants } from "framer-motion";
import { featuredPracticeAreas } from "@/data/practiceAreas";
import Button from "../ui/Button";

// 1. Explicitly type the container variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// 2. Explicitly type the card variants and fix the ease type
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      // Use a standard string literal for safety,
      // OR if using an array, add 'as const': e.g., ease: [0.22, 1, 0.36, 1] as const
      ease: "easeOut",
    },
  },
};

export default function PracticeAreas() {
  return (
    <section className="py-20 md:py-28 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-2 block">
            Legal Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-navy mb-6">
            Our Key Practice Areas
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-lg max-w-2xl mx-auto text-neutral-600 leading-relaxed">
            We provide comprehensive legal solutions tailored to your specific
            needs, combining deep industry knowledge with strategic legal
            counsel.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuredPracticeAreas.map((area, index) => {
            const IconComponent = area.icon;

            return (
              <motion.div
                // Use the index as a fallback key if title isn't unique
                key={area.title || index}
                variants={cardVariants}
                className="group relative bg-white p-8 rounded-tr-2xl rounded-br-2xl shadow-sm hover:shadow-xl border-l-4 border-brand-gold transition-all duration-300 ease-out hover:-translate-y-1 flex flex-col"
              >
                {/* Icon Header */}
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                  {IconComponent ? <IconComponent /> : null}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-serif text-brand-navy mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-neutral-500 font-sans leading-relaxed mb-6 flex-grow">
                  {area.description}
                </p>

                {/* Animated Link */}
                {/* <div className="mt-auto">
                  <span className="inline-flex items-center text-sm font-bold text-brand-navy group-hover:text-brand-gold transition-colors uppercase tracking-wide">
                    Learn More
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div> */}
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button href="/practice-areas" variant="outline" size="lg">
            View Full Service List
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
