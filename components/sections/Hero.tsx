"use client";
import { useRef } from "react";
import Image from "next/legacy/image";
import { easeOut, motion, useScroll, useTransform } from "framer-motion";
import Button from "../ui/Button";

// Framer Motion variants for staggered animation (no changes here)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};

export default function Hero() {
  // 1. Create a ref to track the hero section element
  const sectionRef = useRef(null);

  // 2. Track scroll progress within the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], // Track from the top of the section to the bottom
  });

  // 3. Map scroll progress to a vertical movement (0% to 50%) for the background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={sectionRef} // Attach the ref here
      className="relative h-[85vh] flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Background Image Container */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }} // Apply the parallax effect here
      >
        <div>
          <Image
            src="/hero-background.png"
            alt="Legal books and gavel in a library"
            layout="fill"
            objectFit="cover"
            priority
          />
          {/* Darker Overlay for better text contrast */}
          <div className="absolute inset-0 bg-brand-navy opacity-10"></div>
        </div>
      </motion.div>

      {/* Foreground Content (with staggered text animation) */}
      <motion.div
        className="relative z-10 p-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-serif font-bold text-brand-gold mb-4 drop-shadow-md"
          variants={itemVariants}
        >
          Law is Dharma
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 font-sans drop-shadow-sm"
          variants={itemVariants}
        >
          A tradition of legal excellence and unwavering integrity since 1979.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Button href="/contact" variant="primary" size="lg">
            Schedule a Consultation
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
