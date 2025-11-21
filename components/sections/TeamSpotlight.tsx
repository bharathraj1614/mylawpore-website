"use client";

import { easeOut, motion } from "framer-motion";
import { featuredAdvocates } from "@/data/advocates"; // Ensure this import points to your updated data structure
import Image from "next/image";
import Button from "../ui/Button"; // Assuming Button component is available

// Optional: You might want to create a Modal or a separate page for full advocate profiles
import { useState } from "react";

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
  // If you want to show detailedBackground in a modal, you'd manage state here
  // const [selectedAdvocate, setSelectedAdvocate] = useState(null);

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
              className="text-center bg-white p-6 rounded-lg shadow-md border border-neutral-light-grey flex flex-col h-full" // Added flex for consistent card height
              variants={itemVariants}
            >
              {/* Header Section */}
              <div className="flex flex-col items-center mb-4">
                <Image
                  src={advocate.imageUrl}
                  alt={`Profile of ${advocate.name}`}
                  // Slightly adjusted size for better fit
                  width={120}
                  height={120}
                  // Added object-cover
                  className="rounded-full mx-auto mb-3 border-4 border-brand-gold object-cover"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                <h3 className="text-2xl font-serif text-brand-navy mb-1">
                  {advocate.name}
                </h3>
                <p className="text-brand-gold font-semibold text-lg mb-2">
                  {advocate.title}
                </p>
                {/* New: Experience Tag */}
                {advocate.experienceTag && (
                  <span className="inline-block bg-brand-light-gold text-brand-navy text-xs font-medium px-3 py-1 rounded-full mb-3">
                    {advocate.experienceTag}
                  </span>
                )}
              </div>

              {/* Core Bio / Summary */}
              <div className="mb-4 text-left">
                <h4 className="text-lg font-semibold text-brand-navy mb-2">
                  Overview
                </h4>
                <p className="text-neutral-grey font-sans leading-relaxed">
                  {advocate.summary}
                </p>
              </div>

              {/* Key Areas of Practice/Expertise */}
              {advocate.areasOfPractice &&
                advocate.areasOfPractice.length > 0 && (
                  <div className="mb-6 text-left flex-grow">
                    {" "}
                    {/* flex-grow to push button to bottom */}
                    <h4 className="text-lg font-semibold text-brand-navy mb-2">
                      Expertise
                    </h4>
                    <ul className="list-disc list-inside text-neutral-grey font-sans text-sm space-y-1">
                      {advocate.areasOfPractice.slice(0, 3).map(
                        (
                          area,
                          index // Show first 3, or adjust
                        ) => (
                          <li key={index}>{area}</li>
                        )
                      )}
                      {advocate.areasOfPractice.length > 3 && (
                        <li className="font-medium text-brand-gold">
                          and more...
                        </li>
                      )}
                    </ul>
                  </div>
                )}

              {/* View Full Profile (linking to a dedicated page or opening a modal) */}
              <div className="mt-auto text-center pt-4 border-t border-neutral-light-grey">
                {" "}
                {/* mt-auto for bottom alignment */}
                {/* Option 1: Link to a full profile page */}
                <Button
                  href={`/our-team/${advocate.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  variant="primary"
                  size="sm"
                >
                  View Full Profile
                </Button>
                {/* Option 2: If you prefer a modal on the same page */}
                {/* <Button onClick={() => setSelectedAdvocate(advocate)} variant="primary" size="sm">
                  View Full Profile
                </Button> */}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Button href="/our-team" variant="outline" size="lg">
            View Our Entire Team
          </Button>
        </div>
      </div>
      {/* Optional: A Modal component for detailed background if you choose that approach */}
      {/* {selectedAdvocate && (
        <AdvocateDetailModal
          advocate={selectedAdvocate}
          onClose={() => setSelectedAdvocate(null)}
        />
      )} */}
    </motion.section>
  );
}

// Example of a simple Modal component (you'd define this separately)
/*
function AdvocateDetailModal({ advocate, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-3xl font-serif text-brand-navy mb-2">{advocate.name}</h2>
        <p className="text-brand-gold font-semibold text-xl mb-4">{advocate.title}</p>
        <p className="text-neutral-grey font-sans whitespace-pre-line">{advocate.detailedBackground}</p>
        <Button onClick={onClose} className="mt-6">Close</Button>
      </div>
    </div>
  );
}
*/
