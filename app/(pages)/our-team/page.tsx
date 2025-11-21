"use client";

import { useState } from "react";
import { easeOut, motion } from "framer-motion";
import { advocates, Advocate } from "@/data/advocates"; // Ensure this import points to your updated data structure
import Image from "next/image";
import Modal from "@/components/ui/Modal"; // Assuming your Modal component is robust

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

export default function OurTeamPage() {
  const [selectedAdvocate, setSelectedAdvocate] = useState<Advocate | null>(
    null
  );

  const handleOpenModal = (advocate: Advocate) => {
    setSelectedAdvocate(advocate);
  };

  const handleCloseModal = () => {
    setSelectedAdvocate(null);
  };

  return (
    <>
      <div className="bg-brand-navy text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-gold">
            Our Team
          </h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto text-neutral-light-grey">
            A collective of seasoned legal professionals dedicated to upholding
            justice.
          </p>
        </div>
      </div>
      <motion.div
        className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {advocates.map((advocate) => (
          <motion.div
            key={advocate.name}
            className="text-center bg-white p-6 rounded-lg shadow-md border border-neutral-light-grey cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full" // Added flex for consistent card height
            variants={itemVariants}
            onClick={() => handleOpenModal(advocate)}
          >
            {/* Main Card Display */}
            <div className="flex flex-col items-center mb-4">
              <Image
                src={advocate.imageUrl}
                alt={`Profile of ${advocate.name}`}
                // Slightly smaller for grid view
                width={120}
                height={120}
                className="rounded-full mx-auto mb-3 border-4 border-brand-gold object-cover"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
              <h2 className="text-2xl font-serif text-brand-navy mb-1">
                {advocate.name}
              </h2>
              <p className="text-brand-gold font-semibold text-lg mb-2">
                {advocate.title}
              </p>
              {/* New: Experience Tag on the main card */}
              {advocate.experienceTag && (
                <span className="inline-block bg-brand-light-gold text-brand-navy text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {advocate.experienceTag}
                </span>
              )}
            </div>

            {/* Short summary on the main card for quick overview */}
            <p className="text-neutral-grey font-sans text-sm mb-4 text-left flex-grow">
              {advocate.summary}
            </p>

            <span className="text-sm text-brand-gold font-sans underline mt-auto">
              {" "}
              {/* mt-auto for consistent button placement */}
              View Full Profile
            </span>
          </motion.div>
        ))}
      </motion.div>
      {/* Modal for displaying advocate details */}
      <Modal
        isOpen={!!selectedAdvocate}
        onClose={handleCloseModal}
        title={selectedAdvocate?.name} // Modal title remains the advocate's name
      >
        {selectedAdvocate && (
          <div className="space-y-4 text-brand-navy">
            {" "}
            {/* Added text-brand-navy for consistency */}
            <div className="flex justify-center mb-4">
              <Image
                src={selectedAdvocate.imageUrl}
                alt={`Profile of ${selectedAdvocate.name}`}
                // Larger image in modal
                width={150}
                height={150}
                className="rounded-full border-4 border-brand-gold object-cover"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
            <p className="text-center text-xl font-semibold text-brand-gold mb-2">
              {selectedAdvocate.title}
            </p>
            {selectedAdvocate.experienceTag && (
              <p className="text-center text-neutral-grey font-semibold text-base mb-4">
                {selectedAdvocate.experienceTag}
              </p>
            )}
            {/* Displaying Summary */}
            <h3 className="text-xl font-semibold border-b pb-2 mb-2 border-neutral-light-grey">
              Overview
            </h3>
            <p className="text-neutral-grey font-sans text-base leading-relaxed whitespace-pre-line mb-6">
              {selectedAdvocate.summary}
            </p>
            {/* Displaying Areas of Practice */}
            {selectedAdvocate.areasOfPractice &&
              selectedAdvocate.areasOfPractice.length > 0 && (
                <>
                  <h3 className="text-xl font-semibold border-b pb-2 mb-2 border-neutral-light-grey">
                    Areas of Expertise
                  </h3>
                  <ul className="list-disc list-inside text-neutral-grey font-sans text-base space-y-1 mb-6">
                    {selectedAdvocate.areasOfPractice.map((area, index) => (
                      <li key={index}>{area}</li>
                    ))}
                  </ul>
                </>
              )}
            {/* Displaying Detailed Background */}
            <h3 className="text-xl font-semibold border-b pb-2 mb-2 border-neutral-light-grey">
              Detailed Background
            </h3>
            <p className="text-neutral-grey font-sans text-base leading-relaxed whitespace-pre-line">
              {selectedAdvocate.detailedBackground}
            </p>
          </div>
        )}
      </Modal>
    </>
  );
}
