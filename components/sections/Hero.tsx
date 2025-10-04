"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-center text-white">
      {/* Background Image with Overlay */}
      <Image
        src="/hero-background.png" // Replace with a real background image
        alt="Legal books and gavel"
        layout="fill"
        objectFit="cover"
        className="opacity-95"
        priority
      />

      {/* Content */}
      <motion.div
        className="relative z-10 p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-gold mb-4 hero-title ">
          Law is Dharma
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 font-sans">
          A tradition of legal excellence and unwavering integrity since 2011.
        </p>
        <Button href="/contact" variant="primary" size="lg">
          Schedule a Consultation
        </Button>
      </motion.div>
    </section>
  );
}
