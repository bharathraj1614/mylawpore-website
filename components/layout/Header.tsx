"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { usePathname } from "next/navigation"; // Import usePathname for current page indication
// import Image from "next/image";

// Define your firm's SVG logo directly as a React component
// const FirmLogoSVG = ({ size = 40, color = "#0D2745" }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     stroke={color}
//     strokeWidth="1.5"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="transform"
//   >
//     {/* Beam */}
//     <line x1="4" y1="8" x2="20" y2="8" />

//     {/* Fulcrum */}
//     <circle cx="12" cy="4" r="1.5" />

//     {/* Center pole */}
//     <line x1="12" y1="4" x2="12" y2="18" />

//     {/* Left pan */}
//     <line x1="7" y1="8" x2="7" y2="12" />
//     <circle cx="7" cy="14" r="2" />

//     {/* Right pan */}
//     <line x1="17" y1="8" x2="17" y2="12" />
//     <circle cx="17" cy="14" r="2" />

//     {/* Base */}
//     <line x1="9" y1="18" x2="15" y2="18" />
//   </svg>
// );

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/our-team" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Blog", href: "/blog" },
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
          {/* <Image
            src="/logo.png" // This path points to `public/logo.png`
            alt="M/s. K.V. Subramanian Associatez Logo"
            width={40} // Set a base width for the logo
            height={20} // Set a corresponding height to maintain aspect ratio
            priority // Tells Next.js to load this image first (good for LCP)
          /> */}
          <span className="text-xl font-serif font-bold text-brand-gold">
            M/S. K.V. Subramanian Associatez
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
