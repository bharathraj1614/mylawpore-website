"use client";

import { useState } from "react";
import Link from "next/link";
// import Image from 'next/image'; // We no longer need this if the logo is inline SVG
import Button from "@/components/ui/Button";
import { usePathname } from "next/navigation"; // Import usePathname for current page indication
import { DharmaChakra } from "../ui/DharmaChakra";

// Define your firm's SVG logo directly as a React component
const FirmLogoSVG = ({ size = 40, color = "#C0A062" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="transform rotate-0" // Add any base styling here
  >
    {/* This is a simplified Scales of Justice for illustration.
        Replace this with your actual firm's logo SVG path.
        If your logo is a Dharma Chakra, use that SVG code.
    */}
    <path d="M6 15l6 6 6-6" />
    <path d="M12 3v18" />
    <path d="M3 10h18" />
    <circle cx="12" cy="7" r="2" /> {/* Represents the fulcrum/balance point */}
  </svg>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/our-team" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Contact Us", href: "/contact" },
    { name: "Disclaimer", href: "/disclaimer" },
  ];

  return (
    <header className="bg-brand-navy text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo - Now using inline SVG */}
        <Link href="/" className="flex items-center space-x-2">
          {/* <FirmLogoSVG size={40} color="#C0A062" />{" "} */}
          {/* Use your SVG component */}
          <DharmaChakra
            size={40} /* Adjust size for loader, e.g., 80px */
            color="#C0A062" /* Use brand-gold for the color */
            // className="loader-spin" /* Apply the spinning animation */
          />
          <span className="text-xl font-serif font-bold text-brand-gold">
            Subramanian Associatez
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => {
            // Determine if the link is active
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-sans transition-colors duration-200 ${
                  isActive
                    ? "text-brand-gold font-semibold"
                    : "text-neutral-off-white hover:text-brand-gold"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Button href="/contact" variant="primary" size="sm">
            Schedule a Consultation
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-off-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-brand-navy pb-4">
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-sans transition-colors duration-200 ${
                    isActive
                      ? "text-brand-gold font-semibold"
                      : "text-neutral-off-white hover:text-brand-gold"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              onClick={() => setIsOpen(false)}
            >
              Schedule a Consultation
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
