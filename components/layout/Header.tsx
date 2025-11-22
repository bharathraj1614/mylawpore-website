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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/our-team" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Disclaimer", href: "/disclaimer" }, // Shortened for better fit
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${
        scrolled
          ? "bg-brand-navy/95 backdrop-blur-md shadow-lg py-3"
          : "bg-brand-navy py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        {/* --- Logo --- */}
        <Link href="/" className="flex items-center gap-3 z-50 relative">
          {/* Optional: Uncomment if you want to use the image logo alongside text */}
          {/* 
          <div className="relative w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
             <Image src="/logo.png" alt="Logo" fill className="object-contain" />
          </div> 
          */}
          <div className="flex flex-col">
            <span className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-brand-gold leading-tight tracking-wide">
              K.V. Subramanian <span className="text-white">Associatez</span>
            </span>
            {/* Optional Tagline for larger screens */}
            {/* <span className="hidden md:block text-[10px] text-neutral-300 tracking-widest uppercase">
              Advocates & Legal Consultants
            </span> */}
          </div>
        </Link>

        {/* --- Desktop Navigation (Hidden on Mobile/Tablet) --- */}
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

        {/* --- Mobile Menu Toggle (Visible on Mobile/Tablet) --- */}
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
      {/* Using simple CSS transition for height/opacity to avoid heavy deps */}
      <div
        className={`fixed inset-0 bg-brand-navy z-40 transition-all duration-300 lg:hidden flex flex-col pt-24 px-6 ${
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
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-serif border-b border-white/10 py-4 transition-colors ${
                  isActive
                    ? "text-brand-gold font-semibold pl-2"
                    : "text-neutral-200 hover:text-white hover:pl-2"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }} // Stagger effect
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

          {/* Mobile Footer Info */}
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
