"use client";

import { useState, useEffect } from "react";
import { easeOut, motion, AnimatePresence } from "framer-motion";
import { advocates, Advocate } from "@/data/advocates"; // Ensure path is correct
import Image from "next/image";

// --- UI Icons ---
const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 18 12" />
  </svg>
);

const GavelIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m14.5 12.5-8 8a2.119 2.119 0 0 1-3-3l8-8" />
    <path d="m16 16 6-6" />
    <path d="m8 8 6-6" />
    <path d="m9 7 8 8" />
    <path d="m21 11-8-8" />
  </svg>
);

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export default function OurTeamPage() {
  const [selectedAdvocate, setSelectedAdvocate] = useState<Advocate | null>(
    null
  );

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedAdvocate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedAdvocate]);

  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      {/* --- Hero Section --- */}
      <div className="relative bg-brand-navy text-white pt-28 pb-20 md:pt-32 md:pb-32 overflow-hidden px-4">
        {/* Abstract Background Element */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 border border-brand-gold/40 rounded-full text-brand-gold text-xs md:text-sm font-bold tracking-widest uppercase mb-4 bg-brand-navy/50 backdrop-blur-sm">
              Legal Experts
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
              Meet Our Team
            </h1>
            <p className="text-base md:text-xl text-neutral-200 max-w-2xl mx-auto leading-relaxed">
              A collective of seasoned legal professionals dedicated to
              upholding justice with integrity and excellence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- Team Grid --- */}
      <div className="container mx-auto px-4 -mt-10 md:-mt-16 pb-24 relative z-20">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {advocates.map((advocate) => (
            <motion.div
              key={advocate.name}
              variants={cardVariants}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-200 flex flex-col h-full cursor-pointer"
              onClick={() => setSelectedAdvocate(advocate)}
            >
              {/* Mobile Optimization: Reduced Padding */}
              <div className="p-5 md:p-8 flex flex-col items-center flex-grow">
                {/* Image */}
                <div className="relative mb-4 md:mb-6 w-28 h-28 md:w-36 md:h-36">
                  <Image
                    src={advocate.imageUrl}
                    alt={advocate.name}
                    fill
                    className="rounded-full border-4 border-neutral-50 shadow-sm object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 250px"
                  />
                </div>

                {/* Text Info */}
                <div className="text-center w-full">
                  <h2 className="text-xl md:text-2xl font-serif text-brand-navy mb-1 group-hover:text-brand-gold transition-colors">
                    {advocate.name}
                  </h2>
                  <p className="text-xs md:text-sm font-bold text-brand-gold uppercase tracking-wider mb-3">
                    {advocate.title}
                  </p>

                  {/* Summary - Line clamped for uniformity */}
                  <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {advocate.summary}
                  </p>
                </div>

                {/* Button Indicator */}
                <div className="mt-auto pt-4 w-full border-t border-neutral-100 flex justify-center">
                  <span className="inline-flex items-center text-sm font-semibold text-brand-navy group-hover:text-brand-gold transition-colors gap-1.5">
                    View Profile <ArrowRight />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- Responsive Detail Modal --- */}
      <AnimatePresence>
        {selectedAdvocate && (
          <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAdvocate(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              // Mobile: Slide up from bottom (100% height)
              // Desktop: Fade in scale (Centered card)
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative bg-white w-full h-full md:h-auto md:max-h-[85vh] md:max-w-4xl md:rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row md:transform-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* --- Mobile Sticky Header --- */}
              <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-neutral-100 bg-white sticky top-0 z-50 shadow-sm">
                <h3 className="font-serif text-brand-navy text-lg truncate pr-2">
                  {selectedAdvocate.name}
                </h3>
                <button
                  onClick={() => setSelectedAdvocate(null)}
                  className="p-2 bg-neutral-100 rounded-full text-neutral-600 active:scale-95 transition-transform"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* --- Close Button (Desktop) --- */}
              <button
                onClick={() => setSelectedAdvocate(null)}
                className="hidden md:flex absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white rounded-full text-neutral-500 hover:text-brand-navy transition-colors shadow-sm"
              >
                <CloseIcon />
              </button>

              {/* --- Left Side: Profile Visuals --- */}
              <div className="w-full md:w-1/3 bg-neutral-50 p-6 md:p-10 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-neutral-200 shrink-0">
                <div className="relative w-28 h-28 md:w-40 md:h-40 mb-4">
                  <Image
                    src={selectedAdvocate.imageUrl}
                    alt={selectedAdvocate.name}
                    fill
                    className="rounded-full border-4 border-white shadow-md object-cover"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif text-brand-navy mb-1">
                  {selectedAdvocate.name}
                </h2>
                <p className="text-brand-gold font-bold text-xs md:text-sm uppercase tracking-wider mb-4">
                  {selectedAdvocate.title}
                </p>

                {selectedAdvocate.experienceTag && (
                  <span className="inline-block bg-white border border-neutral-200 px-3 py-1 rounded-full text-xs font-bold text-brand-navy shadow-sm mb-2">
                    {selectedAdvocate.experienceTag}
                  </span>
                )}
              </div>

              {/* --- Right Side: Content (Scrollable) --- */}
              <div className="w-full md:w-2/3 p-6 md:p-10 overflow-y-auto bg-white h-full">
                <div className="max-w-2xl mx-auto md:mx-0 pb-20 md:pb-0">
                  {/* Overview */}
                  <div className="mb-8">
                    <h4 className="text-lg font-serif text-brand-navy mb-3 flex items-center gap-2 border-b border-neutral-100 pb-2">
                      Overview
                    </h4>
                    <p className="text-neutral-600 text-base leading-relaxed whitespace-pre-line">
                      {selectedAdvocate.summary}
                    </p>
                  </div>

                  {/* Expertise Tags */}
                  {selectedAdvocate.areasOfPractice &&
                    selectedAdvocate.areasOfPractice.length > 0 && (
                      <div className="mb-8">
                        <h4 className="text-lg font-serif text-brand-navy mb-4 flex items-center gap-2 border-b border-neutral-100 pb-2">
                          <span className="text-brand-gold">
                            <GavelIcon />
                          </span>
                          Expertise
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedAdvocate.areasOfPractice.map((area, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-brand-navy/5 text-brand-navy text-sm font-medium rounded-lg border border-brand-navy/10"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  {/* Detailed Background */}
                  {selectedAdvocate.detailedBackground && (
                    <div>
                      <h4 className="text-lg font-serif text-brand-navy mb-3 border-b border-neutral-100 pb-2">
                        Professional Background
                      </h4>
                      <div className="text-neutral-600 text-base leading-7 space-y-4">
                        {/* Handling newlines properly if formatted in data */}
                        {selectedAdvocate.detailedBackground
                          .split("\n")
                          .map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
