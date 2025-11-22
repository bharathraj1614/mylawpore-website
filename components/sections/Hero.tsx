"use client";

import { useRef } from "react";
import Image from "next/image";
import { easeOut, motion, useScroll, useTransform } from "framer-motion";
import Button from "../ui/Button";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Custom "easeOutQuart" for a premium feel
    },
  },
};

export default function Hero() {
  const sectionRef = useRef(null);

  // Scroll Parallax Logic
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax speed
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityChange = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      // min-h-[85dvh] ensures it covers most of the screen even on mobile with address bars
      className="relative min-h-[85dvh] flex items-center justify-center overflow-hidden"
    >
      {/* --- Background Layer with Parallax --- */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <div className="relative w-full h-[120%] -top-[10%]">
          {" "}
          {/* Taller height to prevent white gaps during parallax */}
          <Image
            src="/hero-background.png"
            alt="Legal books and gavel in a prestigious library"
            priority
            fill
            className="object-cover"
            quality={90}
          />
          {/* Gradient Overlay: Better than solid color.
              Allows image to show at bottom/center, but darkens top/center for text readability. */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/60 to-brand-navy/80 mix-blend-multiply" />
          {/* Texture Overlay (Optional noise for realism) */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>
      </motion.div>

      {/* --- Foreground Content --- */}
      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity: opacityChange }} // Fades out content as you scroll down
      >
        {/* Badge */}
        <motion.div className="mb-6">
          <span className="inline-block py-1 px-4 border border-brand-gold/50 rounded-full text-brand-gold text-xs md:text-sm font-serif tracking-[0.2em] uppercase bg-brand-navy/30 backdrop-blur-sm">
            Est. 1979
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-6 drop-shadow-lg leading-[1.1]">
          Law is <span className="text-brand-gold italic">Dharma</span>
        </motion.h1>

        {/* Decorative Divider */}
        <motion.div className="w-24 h-1 bg-brand-gold mb-8 rounded-full" />

        {/* Subheadline */}
        <motion.p className="text-lg md:text-xl lg:text-2xl text-neutral-200 max-w-xl md:max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Upholding a tradition of legal excellence, integrity, and unwavering
          advocacy for over four decades.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto justify-center shadow-xl shadow-brand-gold/10"
          >
            Schedule Consultation
          </Button>

          <Button
            href="/practice-areas"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto justify-center border-white text-white hover:bg-white hover:text-brand-navy"
          >
            Our Practice Areas
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
