"use client";

import { useState } from "react";
import { easeOut, motion } from "framer-motion";
import { advocates, Advocate } from "@/data/advocates";
import Image from "next/image";
import Modal from "@/components/ui/Modal";

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
  // State to manage the currently selected advocate for the modal
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
            className="text-center bg-white p-6 rounded-lg shadow-md border border-neutral-light-grey cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            variants={itemVariants}
            onClick={() => handleOpenModal(advocate)}
          >
            <Image
              src={advocate.imageUrl}
              alt={`Profile of ${advocate.name}`}
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4 border-4 border-brand-gold"
            />
            <h2 className="text-2xl font-serif text-brand-navy">
              {advocate.name}
            </h2>
            <p className="text-brand-gold font-semibold mb-3">
              {advocate.title}
            </p>
            <span className="text-sm text-neutral-grey font-sans underline">
              View Profile
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for displaying advocate details */}
      <Modal
        isOpen={!!selectedAdvocate}
        onClose={handleCloseModal}
        title={selectedAdvocate?.name}
      >
        {selectedAdvocate && (
          <div className="space-y-4">
            <div className="flex justify-center">
              <Image
                src={selectedAdvocate.imageUrl}
                alt={`Profile of ${selectedAdvocate.name}`}
                width={120}
                height={120}
                className="rounded-full border-4 border-brand-gold"
              />
            </div>
            <p className="text-center text-xl font-semibold text-brand-gold">
              {selectedAdvocate.title}
            </p>
            <p className="text-neutral-grey font-sans text-base leading-relaxed">
              {selectedAdvocate.bio}
            </p>
          </div>
        )}
      </Modal>
    </>
  );
}
