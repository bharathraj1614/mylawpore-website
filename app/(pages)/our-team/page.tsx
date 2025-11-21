"use client";

import { useState, useEffect } from "react";
import { easeOut, motion, AnimatePresence } from "framer-motion";
import { advocates, Advocate } from "@/data/advocates";
import Image from "next/image";

// --- UI Icons (No external deps) ---
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
    width="16"
    height="16"
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
    transition: { staggerChildren: 0.15 },
  },
};

// typed custom easing to avoid 'any' cast
const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: customEase },
  },
};

export default function OurTeamPage() {
  const [selectedAdvocate, setSelectedAdvocate] = useState<Advocate | null>(
    null
  );

  // Prevent background scrolling when modal is open
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
    <div className="min-h-screen bg-neutral-50">
      {/* --- Hero Section --- */}
      <div className="relative bg-brand-navy text-white pt-20 pb-24 md:pt-24 md:pb-32 overflow-hidden">
        {/* Decorative Background Circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 border border-brand-gold/30 rounded-full text-brand-gold text-xs font-bold tracking-widest uppercase mb-4">
              Legal Experts
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
              Meet Our Team
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
              A collective of seasoned legal professionals dedicated to
              upholding justice with integrity and excellence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- Team Grid --- */}
      <div className="container mx-auto px-4 -mt-16 md:-mt-20 pb-24 relative z-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {advocates.map((advocate) => (
            <motion.div
              key={advocate.name}
              variants={cardVariants}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 flex flex-col h-full"
              onClick={() => setSelectedAdvocate(advocate)}
            >
              {/* Top Accent Bar */}
              <div className="h-1 w-full bg-brand-gold/80 group-hover:h-2 group-hover:bg-brand-gold transition-all duration-300"></div>

              <div className="p-8 flex flex-col items-center flex-grow cursor-pointer">
                {/* Image Container */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-brand-navy rounded-full scale-105 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <Image
                    src={advocate.imageUrl}
                    alt={advocate.name}
                    width={140}
                    height={140}
                    className="rounded-full border-4 border-white shadow-md object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                    style={{ width: "140px", height: "140px" }}
                  />
                  {advocate.experienceTag && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 z-20 whitespace-nowrap">
                      <span className="bg-brand-navy text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border-2 border-white shadow-sm">
                        {advocate.experienceTag}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="text-center w-full">
                  <h2 className="text-2xl font-serif text-brand-navy mb-1 group-hover:text-brand-gold transition-colors duration-300">
                    {advocate.name}
                  </h2>
                  <p className="text-sm font-semibold text-brand-gold uppercase tracking-widest mb-4">
                    {advocate.title}
                  </p>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {advocate.summary}
                  </p>
                </div>

                {/* Button */}
                <div className="mt-auto pt-4 w-full border-t border-neutral-100 flex justify-center">
                  <span className="inline-flex items-center text-sm font-semibold text-brand-navy group-hover:text-brand-gold transition-colors gap-2">
                    View Profile <ArrowRight />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- Custom Modal Overlay --- */}
      <AnimatePresence>
        {selectedAdvocate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-4 md:py-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAdvocate(null)}
              className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white w-full max-w-4xl max-h-full md:max-h-[85vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Close Button Mobile */}
              <button
                onClick={() => setSelectedAdvocate(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-white/80 rounded-full md:hidden text-brand-navy"
              >
                <CloseIcon />
              </button>

              {/* Left Side: Visual Profile (Desktop) / Top Header (Mobile) */}
              <div className="w-full md:w-1/3 bg-neutral-50 border-b md:border-b-0 md:border-r border-neutral-200 p-8 md:p-10 flex flex-col items-center text-center overflow-y-auto">
                <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6">
                  <Image
                    src={selectedAdvocate.imageUrl}
                    alt={selectedAdvocate.name}
                    fill
                    className="rounded-full border-4 border-white shadow-lg object-cover"
                  />
                </div>

                <h2 className="text-2xl md:text-3xl font-serif text-brand-navy mb-2">
                  {selectedAdvocate.name}
                </h2>
                <p className="text-brand-gold font-bold text-sm uppercase tracking-wider mb-6">
                  {selectedAdvocate.title}
                </p>

                {/* Quick Info Pills */}
                <div className="w-full space-y-3">
                  {selectedAdvocate.experienceTag && (
                    <div className="bg-white p-3 rounded-lg border border-neutral-200 shadow-sm">
                      <p className="text-xs text-neutral-400 uppercase font-bold">
                        Experience
                      </p>
                      <p className="text-brand-navy font-semibold">
                        {selectedAdvocate.experienceTag}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side: Details (Scrollable) */}
              <div className="w-full md:w-2/3 p-8 md:p-10 overflow-y-auto relative bg-white">
                {/* Close Button Desktop */}
                <button
                  onClick={() => setSelectedAdvocate(null)}
                  className="hidden md:block absolute top-6 right-6 text-neutral-400 hover:text-brand-navy transition-colors"
                >
                  <CloseIcon />
                </button>

                <div className="max-w-2xl">
                  {/* Section: Overview */}
                  <div className="mb-8">
                    <h3 className="text-lg font-serif text-brand-navy mb-3 flex items-center gap-2 border-b border-neutral-100 pb-2">
                      Overview
                    </h3>
                    <p className="text-neutral-600 leading-relaxed whitespace-pre-line">
                      {selectedAdvocate.summary}
                    </p>
                  </div>

                  {/* Section: Areas of Practice */}
                  {selectedAdvocate.areasOfPractice &&
                    selectedAdvocate.areasOfPractice.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-lg font-serif text-brand-navy mb-4 flex items-center gap-2 border-b border-neutral-100 pb-2">
                          <span className="text-brand-gold">
                            <GavelIcon />
                          </span>{" "}
                          Areas of Expertise
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedAdvocate.areasOfPractice.map(
                            (area, index) => (
                              <span
                                key={index}
                                className="px-3 py-1.5 bg-brand-navy/5 text-brand-navy text-sm font-medium rounded-md border border-brand-navy/10 hover:bg-brand-navy hover:text-white transition-colors cursor-default"
                              >
                                {area}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    )}

                  {/* Section: Detailed Background */}
                  {selectedAdvocate.detailedBackground && (
                    <div>
                      <h3 className="text-lg font-serif text-brand-navy mb-3 border-b border-neutral-100 pb-2">
                        Detailed Background
                      </h3>
                      <p className="text-neutral-600 text-sm md:text-base leading-7 whitespace-pre-line">
                        {selectedAdvocate.detailedBackground}
                      </p>
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
