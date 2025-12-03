"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      // Changed threshold to 50px so it doesn't flicker immediately at the top
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu if route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/our-team" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Disclaimer", href: "/disclaimer" },
  ];

  return (
    <header
      // UPDATED CLASSNAMES HERE
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brand-navy shadow-xl py-3 border-b border-transparent" // Scrolled state: Solid, shadow, compact
          : "bg-transparent py-5 lg:py-6 border-b border-white/10" // Top state: Transparent, taller, subtle border
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        {/* --- Logo --- */}
        <Link href="/" className="flex items-center gap-3 z-50 relative">
          <div className="flex flex-col">
            <span className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-brand-gold leading-tight tracking-wide transition-all duration-300">
              K.V. Subramanian <span className="text-white">Associatez</span>
            </span>
          </div>
        </Link>

        {/* --- Desktop Navigation --- */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative group py-2"
              >
                <span
                  className={`text-sm xl:text-base font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-brand-gold"
                      : "text-neutral-200 group-hover:text-white"
                  }`}
                >
                  {link.name}
                </span>
                {/* Animated Underline */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          {/* CTA Button */}
          <div className="ml-2">
            <Button href="/contact" variant="primary" size="sm">
              Consultation
            </Button>
          </div>
        </nav>

        {/* --- Mobile Menu Toggle --- */}
        <button
          className="lg:hidden text-neutral-100 hover:text-brand-gold transition-colors focus:outline-none z-50 relative p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <div className="w-6 h-6 relative flex flex-col justify-center gap-1.5">
            <span
              className={`block w-full h-0.5 bg-current transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-full h-0.5 bg-current transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-full h-0.5 bg-current transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* --- Mobile Navigation Overlay --- */}
      <div
        // Added backdrop-blur to mobile menu for better readability over content
        className={`fixed inset-0 bg-brand-navy/95 backdrop-blur-sm z-40 transition-all duration-500 lg:hidden flex flex-col pt-24 px-6 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-5"
        }`}
      >
        <nav className="flex flex-col space-y-1">
          {navLinks.map((link, index) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                // Added onClick to close menu when a link is clicked
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-serif border-b border-white/10 py-4 transition-all ${
                  isActive
                    ? "text-brand-gold font-semibold pl-2"
                    : "text-neutral-200 hover:text-white hover:pl-2"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="mt-8">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="w-full justify-center"
            onClick={() => setIsOpen(false)}
          >
            Schedule a Consultation
          </Button>

          <div className="mt-8 text-center text-neutral-400 text-xs">
            <p>
              © {new Date().getFullYear()} M/S. K.V. Subramanian Associatez
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
