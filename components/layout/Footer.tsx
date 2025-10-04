import Link from "next/link";

export default function Footer() {
  // We'll define these links more concretely as pages are built out
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Our Team", href: "/our-team" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-brand-navy text-white py-10 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Contact Information */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-serif text-xl text-brand-gold mb-3">
            Contact Us
          </h3>
          <p className="font-sans text-neutral-off-white">
            No. 12A, Brindavanam Street,
            <br />
            Mylapore, Chennai-600004
          </p>
          <p className="font-sans">Email: mylawpore@gmail.com</p>
          <p className="font-sans">Phone: +91 89257 33441</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-serif text-xl text-brand-gold mb-3">
            Quick Links
          </h3>
          <ul className="space-y-1">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-neutral-off-white hover:text-brand-gold font-sans transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Placeholder for "Locate Us" or another column if needed */}
        {/* For now, it will be an empty column or can be removed if not needed */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-serif text-xl text-brand-gold mb-3">Follow Us</h3>
          <p className="font-sans text-neutral-off-white">
            {/* Placeholder for social media icons */}
            [Social Media Icons Here]
          </p>
        </div>

        {/* Copyright */}
        <div className="md:col-span-full lg:col-span-1 flex items-end justify-start lg:justify-end mt-6 lg:mt-0">
          <p className="text-neutral-light-grey text-sm font-sans">
            &copy; {new Date().getFullYear()} M/s. K.V. Subramanian Associatez.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
