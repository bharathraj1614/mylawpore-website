import { ReactNode } from "react";
import { motion } from "framer-motion"; // For scroll animations
import Link from "next/link"; // For navigation
import { easeOut } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string; // Optional: if the card itself is clickable
}

// Framer Motion variants for subtle lift-up on hover and fade-in on scroll
const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  hover: {
    y: -5,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.2, ease: easeOut },
  },
};

export default function Card({ children, className, href }: CardProps) {
  const baseStyles =
    "bg-white p-6 rounded-lg shadow-md border border-neutral-light-grey flex flex-col items-center text-center";

  // If href is provided, render as a clickable Link
  const CardContent = (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="animate" // Animates when it comes into view
      viewport={{ once: true, amount: 0.2 }} // Animates only once, when 80% of it is visible
      whileHover="hover" // Apply hover animation
      className={`${baseStyles} ${className || ""}`}
    >
      {children}
    </motion.div>
  );

  return href ? (
    <Link href={href} passHref>
      {CardContent}
    </Link>
  ) : (
    CardContent
  );
}
