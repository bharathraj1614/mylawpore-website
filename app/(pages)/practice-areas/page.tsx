"use client";

import { motion } from "framer-motion";
import { practiceAreas, courtsAndTribunals } from "@/data/practiceAreas";
// Will build the card styles inline for maximum control over the UI

const BuildingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M12 6h.01" />
    <path d="M12 10h.01" />
    <path d="M12 14h.01" />
    <path d="M16 10h.01" />
    <path d="M16 14h.01" />
    <path d="M8 10h.01" />
    <path d="M8 14h.01" />
  </svg>
);

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function PracticeAreasPage() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* --- Hero Section --- */}
      <div className="relative bg-brand-navy text-white pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        {/* Abstract Decor */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 border border-brand-gold/30 rounded-full text-brand-gold text-xs font-bold tracking-widest uppercase mb-4 bg-brand-navy/50 backdrop-blur-sm">
              Our Expertise
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-gold mb-6">
              Practice Areas
            </h1>
            <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto text-neutral-200 font-light leading-relaxed">
              Providing comprehensive legal solutions across diverse domains,
              combining decades of experience with strategic counsel.
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- Practice Areas Grid --- */}
      <motion.section
        className="py-16 md:py-24 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Subtle Grid Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#0D2745 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {practiceAreas.map((area, index) => {
              const IconComponent = area.icon;

              return (
                <motion.div
                  key={area.title || index}
                  // variants={itemVariants}
                >
                  <div className="group h-full bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-xl hover:border-brand-gold/30 transition-all duration-300 flex flex-col relative top-0 hover:-top-2">
                    {/* Icon */}
                    <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-navy/5 text-brand-navy group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors duration-300">
                      {IconComponent ? <IconComponent /> : null}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl md:text-2xl font-serif text-brand-navy mb-3 font-medium">
                      {area.title}
                    </h3>
                    <p className="text-neutral-500 font-sans text-sm md:text-base leading-relaxed flex-grow">
                      {area.description}
                    </p>

                    {/* Fake Link/Action */}
                    {/* <div className="mt-6 pt-4 border-t border-neutral-50 flex items-center text-brand-navy font-bold text-xs uppercase tracking-widest group-hover:text-brand-gold transition-colors">
                      <span>Details</span>
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                        <ArrowRight />
                      </span>
                    </div> */}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* --- Courts & Tribunals Section --- */}
      <motion.section
        className="py-16 md:py-24 bg-white border-t border-neutral-100"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-navy mb-4">
              Courts & Tribunals
            </h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full mb-4"></div>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              We regularly appear and represent clients before various judicial
              and quasi-judicial bodies across the region.
            </p>
          </div>

          {/* 
               Redesigned Layout: 
               Using a dense grid with "Plaque" style cards instead of big empty boxes.
            */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {courtsAndTribunals.map((court, index) => (
              <motion.div
                key={index}
                // variants={itemVariants}
              >
                <div className="flex items-start gap-4 p-5 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-brand-navy/30 hover:bg-white hover:shadow-md transition-all duration-300 cursor-default group">
                  {/* Icon */}
                  <div className="shrink-0 mt-1 text-neutral-400 group-hover:text-brand-gold transition-colors">
                    <BuildingIcon />
                  </div>
                  {/* Text */}
                  <div>
                    <h4 className="text-base font-semibold text-brand-navy leading-snug group-hover:text-brand-navy transition-colors">
                      {court}
                    </h4>
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mt-1 block">
                      Jurisdiction
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
