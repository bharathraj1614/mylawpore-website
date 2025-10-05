"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
  };

  return (
    <>
      {/* Page Header */}
      <div className="bg-brand-navy text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-serif text-brand-gold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-lg mt-4 max-w-2xl mx-auto text-neutral-light-grey"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Reach out to us for legal assistance or inquiries.
          </motion.p>
        </div>
      </div>

      {/* Contact Details Section */}
      <motion.section
        className="py-16 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-serif text-brand-navy mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6 text-lg text-neutral-grey font-sans">
              <div>
                <h3 className="font-semibold text-brand-gold">Address:</h3>
                <p>No. 5, Balaji Avenue, I Street,</p>
                <p>Gandhi Nagar, Adyar,</p>
                <p>Chennai - 600 020.</p>
                <p>Tamil Nadu, India.</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-gold">Phone:</h3>
                <p>+91 89257 33441</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-gold">Email:</h3>
                <p>
                  <a
                    href="mailto:mylawpore@gmail.com"
                    className="text-brand-navy hover:text-brand-gold"
                  >
                    mylawpore@gmail.com
                  </a>
                </p>
              </div>
              <div className="flex space-x-4 pt-4">
                {/* Social media icons (placeholders) */}
                <a href="#" className="text-brand-navy hover:text-brand-gold">
                  <Image
                    src="/images/icons/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="#" className="text-brand-navy hover:text-brand-gold">
                  <Image
                    src="/images/icons/twitter.svg"
                    alt="Twitter"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-light-grey p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-serif text-brand-navy mb-6 text-center">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-neutral-charcoal text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-charcoal leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-neutral-charcoal text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-charcoal leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-neutral-charcoal text-sm font-bold mb-2"
                >
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-charcoal leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-neutral-charcoal text-sm font-bold mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-charcoal leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-neutral-charcoal text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-charcoal leading-tight focus:outline-none focus:shadow-outline"
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-brand-navy hover:bg-brand-gold text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Google Map Section */}
      <div className="w-full h-[400px] md:h-[500px] bg-neutral-grey">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3886.893587635918!2d80.26634187507767!3d13.042444887279515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAyJzMyLjgiTiA4MMKwMTYnMDguMSJF!5e0!3m2!1sen!2sin!4v1759643990173!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Office Location"
        ></iframe>
      </div>
    </>
  );
}
