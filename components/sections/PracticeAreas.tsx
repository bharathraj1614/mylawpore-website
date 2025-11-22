"use client";

import { motion } from "framer-motion";
import { featuredPracticeAreas } from "@/data/practiceAreas";
import Button from "../ui/Button";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function PracticeAreas() {
  return (
    <section className="py-12 md:py-20 bg-neutral-50 relative overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0D2745 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* --- Section Header --- */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 border border-brand-gold/30 rounded-full text-brand-gold text-xs font-bold tracking-widest uppercase mb-4 bg-white">
            Legal Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-navy mb-6 leading-tight">
            Our Key Practice Areas
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-neutral-600 leading-relaxed">
            Providing comprehensive legal solutions tailored to your specific
            needs with strategic counsel.
          </p>
        </motion.div>

        {/* --- Grid Layout --- */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuredPracticeAreas.map((area, index) => {
            const IconComponent = area.icon;

            return (
              <motion.div
                key={area.title || index}
                // variants={cardVariants}
                className="group relative bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-2xl hover:border-brand-gold/20 transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
              >
                {/* 
                   Icon Container 
                   FIX: Hover state now uses bg-brand-gold and text-brand-navy for high contrast.
                */}
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full text-brand-navy transition-all duration-300 ease-out">
                  {IconComponent ? (
                    <div className="w-8 h-8">
                      <IconComponent />
                    </div>
                  ) : null}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  {/* 
                     Title 
                     FIX: Removed text-brand-gold on hover. It stays Navy for readability.
                  */}
                  <h3 className="text-xl md:text-2xl font-serif text-brand-navy mb-3 font-medium">
                    {area.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-500 font-sans leading-relaxed line-clamp-3 mb-6">
                    {area.description}
                  </p>
                </div>

                {/* Bottom Action */}
                {/* <div className="mt-auto pt-6 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-navy group-hover:text-brand-gold uppercase tracking-widest transition-colors duration-300">
                    Learn More
                  </span>
                  <span className="text-brand-navy/30 group-hover:text-brand-gold group-hover:translate-x-1 transition-all duration-300">
                    <ArrowIcon />
                  </span>
                </div> */}
              </motion.div>
            );
          })}
        </motion.div>

        {/* --- Bottom CTA --- */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button
            href="/practice-areas"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto justify-center"
          >
            View Full Service List
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
