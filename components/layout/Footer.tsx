import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-charcoal text-neutral-light-grey py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Column */}
        <div>
          <h3 className="text-xl font-serif text-brand-gold mb-4">
            M/s. K.V. Subramanian Associatez
          </h3>
          <p className="text-sm font-sans leading-relaxed">
            Dedicated to providing expert legal counsel with integrity and a
            client-focused approach. &quot;Law is Dharma&quot;.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="text-xl font-serif text-brand-gold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="hover:text-brand-gold transition-colors duration-200 font-sans"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/our-team"
                className="hover:text-brand-gold transition-colors duration-200 font-sans"
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                href="/practice-areas"
                className="hover:text-brand-gold transition-colors duration-200 font-sans"
              >
                Practice Areas
              </Link>
            </li>{" "}
            {/* Assuming this page exists */}
            <li>
              <Link
                href="/contact"
                className="hover:text-brand-gold transition-colors duration-200 font-sans"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Links Column */}
        <div>
          <h3 className="text-xl font-serif text-brand-gold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/disclaimer"
                className="hover:text-brand-gold transition-colors duration-200 font-sans"
              >
                Disclaimer
              </Link>
            </li>{" "}
            {/* Added Disclaimer link */}
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-brand-gold transition-colors duration-200 font-sans"
              >
                Privacy Policy
              </Link>
            </li>{" "}
            {/* Placeholder */}
            <li>
              <Link
                href="/terms-of-service"
                className="hover:text-brand-gold transition-colors duration-200 font-sans"
              >
                Terms of Service
              </Link>
            </li>{" "}
            {/* Placeholder */}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h3 className="text-xl font-serif text-brand-gold mb-4">Contact</h3>
          <address className="not-italic text-sm font-sans space-y-2">
            <p>No. 5, Balaji Avenue, I Street,</p>
            <p>Gandhi Nagar, Adyar, Chennai - 600 020,</p>
            <p>Tamil Nadu, India.</p>
            <p>Phone: +91 94441 33434</p>
            <p>
              Email:{" "}
              <a
                href="mailto:kvsubramanianassociatez@gmail.com"
                className="hover:text-brand-gold transition-colors duration-200"
              >
                kvsubramanianassociatez@gmail.com
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-neutral-grey text-center text-sm font-sans">
        <p>
          &copy; {currentYear} M/s. K.V. Subramanian Associatez. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
