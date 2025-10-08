"use client";

import { motion } from "framer-motion";
import { practiceAreas, courtsAndTribunals } from "@/data/practiceAreas";
import Card from "@/components/ui/Card";

// Animation variants for staggered appearance
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PracticeAreasPage() {
  return (
    <>
      <div className="bg-brand-navy text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-gold">
            Our Practice Areas
          </h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto text-neutral-light-grey">
            Providing comprehensive legal expertise across diverse domains to
            serve your needs.
          </p>
        </div>
      </div>

      <motion.section
        className="py-16 bg-neutral-off-white"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-navy text-center mb-12">
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area) => {
              const IconComponent = area.icon; // Get the icon component from data
              return (
                <motion.div key={area.title} variants={itemVariants}>
                  <Card>
                    <IconComponent /> {/* Render the icon */}
                    <h3 className="text-2xl font-serif text-brand-navy mb-3">
                      {area.title}
                    </h3>
                    <p className="text-neutral-grey font-sans">
                      {area.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 bg-neutral-light-grey"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-navy text-center mb-12">
            Courts & Tribunals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courtsAndTribunals.map((court, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex items-center justify-center text-center">
                  <p className="text-xl font-sans text-neutral-charcoal leading-relaxed">
                    {court}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
