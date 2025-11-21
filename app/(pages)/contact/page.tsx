"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Define SVG Icons directly to avoid external dependencies
const Icons = {
  MapPin: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Phone: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Mail: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  ArrowRight: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  ),
};

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Thank you for your message! We will get back to you shortly.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } else {
      alert(
        "Sorry, there was an error sending your message. Please try again."
      );
    }
    setIsSubmitting(false);
  };

  // Styling for inputs
  const inputGroupClasses = "flex flex-col space-y-2";
  const labelClasses =
    "text-sm font-semibold text-brand-navy tracking-wide ml-1";
  const inputClasses =
    "w-full rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-3 text-brand-navy placeholder-neutral-400 transition-all duration-300 focus:border-brand-gold focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-gold";

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Page Header with Gradient Overlay */}
      <div className="relative bg-brand-navy pb-32 pt-20 lg:pt-28">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#1a2b4b] to-brand-navy opacity-50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-neutral-50 to-transparent opacity-10"></div>

        <div className="container relative mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/10 text-brand-gold text-sm font-bold tracking-wider mb-4 border border-brand-gold/20">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-tight">
              Contact Our{" "}
              <span className="text-brand-gold font-italic">Experts</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-neutral-300 leading-relaxed font-light">
              Whether you require legal counsel or have general inquiries, our
              team is ready to provide the assistance you need.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Section - Overlapping Layout */}
      <div className="container mx-auto px-4 -mt-20 relative z-10 pb-24">
        <motion.div
          className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-100"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid lg:grid-cols-12 min-h-[800px]">
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-5 bg-brand-navy text-white p-10 md:p-14 relative overflow-hidden flex flex-col justify-between">
              {/* Pattern Overlay */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-brand-gold opacity-5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-3xl font-serif mb-2 text-white">
                  Contact Information
                </h2>
                <div className="h-1 w-20 bg-brand-gold mb-8 rounded-full"></div>
                <p className="text-neutral-300 mb-12 leading-relaxed">
                  We are here to help. Reach out to us through any of the
                  channels below, or visit our office for a consultation.
                </p>

                <div className="space-y-8">
                  <a
                    href="https://maps.app.goo.gl/nGXeGcqHE1bV9q9S7"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors duration-300">
                      <Icons.MapPin />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Visit Us
                      </h3>
                      <p className="text-neutral-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                        No. 12A, Brindavanam Street,
                        <br />
                        Mylapore, Chennai – 600004,
                        <br />
                        Tamil Nadu, India.
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+918925733441"
                    className="flex items-start group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors duration-300">
                      <Icons.Phone />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Call Us
                      </h3>
                      <p className="text-neutral-300 text-sm group-hover:text-white transition-colors">
                        +91 89257 33441
                      </p>
                      <p className="text-xs text-neutral-400 mt-1">
                        Mon-Fri, 9am - 6pm
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:mylawpore@gmail.com"
                    className="flex items-start group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors duration-300">
                      <Icons.Mail />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Email Us
                      </h3>
                      <p className="text-neutral-300 text-sm group-hover:text-white transition-colors">
                        mylawpore@gmail.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="relative z-10 mt-12 lg:mt-0">
                <p className="text-xs text-neutral-400">
                  © {new Date().getFullYear()} K.V.S Associatez. All rights
                  reserved.
                </p>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 p-10 md:p-14 bg-white">
              <h2 className="text-3xl font-serif text-brand-navy mb-8">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className={inputGroupClasses}>
                    <label htmlFor="name" className={labelClasses}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className={inputGroupClasses}>
                    <label htmlFor="email" className={labelClasses}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className={inputGroupClasses}>
                    <label htmlFor="phone" className={labelClasses}>
                      Phone Number{" "}
                      <span className="text-neutral-400 font-normal">
                        (Optional)
                      </span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className={inputGroupClasses}>
                    <label htmlFor="subject" className={labelClasses}>
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Legal Inquiry"
                      required
                    />
                  </div>
                </div>

                <div className={inputGroupClasses}>
                  <label htmlFor="message" className={labelClasses}>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`${inputClasses} resize-none`}
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group w-full md:w-auto flex items-center justify-center gap-2 bg-brand-navy text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:shadow-xl hover:bg-brand-navy/90 hover:-translate-y-0.5 transition-all duration-300 ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <span className="group-hover:translate-x-1 transition-transform">
                          <Icons.ArrowRight />
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full Width Map Section */}
      <div className="w-full h-[450px] relative grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border-t border-neutral-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d971.7233969089795!2d80.26827306542398!3d13.042444887279515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAyJzMyLjgiTiA4MMKwMTYnMDguMSJF!5e0!3m2!1sen!2sin!4v1763743364379!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Office Location"
          className="absolute inset-0"
        ></iframe>

        {/* Map Overlay for better text contrast if needed, or just to blend branding */}
        <div className="absolute inset-0 bg-brand-navy/5 pointer-events-none"></div>

        {/* Map Tooltip/Label */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white py-3 px-6 rounded-full shadow-lg border border-neutral-200 md:hidden">
          <p className="text-brand-navy font-semibold text-sm flex items-center gap-2">
            <span className="text-brand-gold">
              <Icons.MapPin />
            </span>{" "}
            Locate on Map
          </p>
        </div>
      </div>
    </div>
  );
}
