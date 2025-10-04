"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { advocates } from "@/data/advocates";
import Button from "../ui/Button"; // Assuming you have a Button component

// Framer Motion variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each advocate's animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1], // Must be 4 numbers for a Bezier curve
    },
  },
};

export default function TeamSpotlight() {
  // We'll showcase the first 3 advocates from the data for the spotlight
  const featuredAdvocates = advocates.slice(0, 3);

  return (
    <section className="py-16 bg-neutral-off-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-serif text-brand-navy mb-4"
        >
          Meet Our Experienced Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg max-w-3xl mx-auto mb-12 text-neutral-grey"
        >
          Our firm is powered by seasoned legal professionals dedicated to
          upholding justice and providing exceptional client service.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {featuredAdvocates.map((advocate) => (
            <motion.div
              key={advocate.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center border-t-4 border-brand-gold"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-brand-gold">
                <Image
                  src={advocate.imageUrl || "/advocate.png"} // Fallback to a default placeholder if imageUrl is missing
                  alt={advocate.name}
                  fill // Fills the parent div
                  style={{ objectFit: "cover" }} // Ensures the image covers the area
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // For responsive image loading
                />
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-navy">
                {advocate.name}
              </h3>
              <p className="font-sans text-brand-gold mb-3">{advocate.title}</p>
              {/* Short bio preview, full bio in modal on Our Team page */}
              <p className="font-sans text-neutral-grey text-sm line-clamp-3">
                {advocate.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.5,
            delay: featuredAdvocates.length * 0.15 + 0.3,
          }} // Delay after cards
        >
          <Button href="/our-team" variant="primary">
            View All Advocates
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
