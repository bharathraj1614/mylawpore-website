"use client";

import { motion } from "framer-motion";
import { practiceAreas, courtsAndTribunals } from "@/data/practiceAreas";
import Card from "@/components/ui/Card";

// Animation variants for the container and items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function PracticeAreasPage() {
  return (
    <>
      <div className="bg-brand-navy text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-gold">
            Areas of Expertise
          </h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto text-neutral-light-grey">
            Providing comprehensive legal services across a wide spectrum of
            civil and corporate law.
          </p>
        </div>
      </div>

      {/* Main Grid of Practice Areas */}
      <motion.div
        className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {practiceAreas.map((area) => (
          <Card key={area.title}>
            <h2 className="text-2xl font-serif text-brand-navy mb-3">
              {area.title}
            </h2>
            <p className="text-neutral-grey font-sans flex-grow">
              {area.description}
            </p>
          </Card>
        ))}
      </motion.div>

      {/* Courts and Tribunals Section */}
      <div className="bg-neutral-light-grey py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-navy">
              Our Practice Arenas
            </h2>
            <p className="text-lg mt-4 max-w-2xl mx-auto text-neutral-grey">
              We represent our clients before a wide range of courts, tribunals,
              and judicial forums.
            </p>
          </div>
          <motion.ul
            className="columns-1 md:columns-2 lg:columns-3 gap-x-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {courtsAndTribunals.map((court) => (
              <motion.li
                key={court}
                className="mb-3 font-sans text-neutral-grey text-lg break-inside-avoid"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <span className="text-brand-gold mr-2">✓</span>
                {court}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </>
  );
}
