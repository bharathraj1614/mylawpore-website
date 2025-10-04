"use client"; // This is a Client Component

import Link from "next/link";
import Image from "next/image"; // For optimized images

export default function Header() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Our Team", href: "/our-team" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-brand-navy text-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2">
          {/* Using a placeholder for the logo for now */}
          <Image
            src="/logo.png" // Path to your logo in the public folder
            alt="M/s. K.V. Subramanian Associatez Logo"
            width={40} // Adjust width as needed
            height={40} // Adjust height as needed
            className="h-10 w-10" // Tailwind classes for sizing
          />
          <span className="text-xl font-serif font-bold text-brand-gold">
            M/s. K.V. Subramanian Associatez
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-white hover:text-brand-gold text-lg font-sans relative group"
              >
                {link.name}
                {/* Hover effect for underline */}
                <span className="absolute left-0 bottom-0 h-[2px] bg-brand-gold w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
