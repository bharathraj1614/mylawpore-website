"use client";

import { motion } from "framer-motion";
import { useState } from "react";
// import Image from "next/image";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field: string) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // For now, we'll just simulate a successful submission
    const response = { ok: true };

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

  const inputClasses =
    "w-full border-b-2 border-neutral-grey py-2 px-1 text-brand-navy bg-transparent focus:outline-none focus:border-brand-gold transition-colors duration-300 peer";

  // REVISED: Simpler labelClasses, relying on peer states for all styling
  const labelClasses =
    "absolute left-1 top-2 text-neutral-grey text-base transition-all duration-300 transform origin-left peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-gold peer-[:not(:placeholder-shown)]:-top-3.5 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-brand-gold pointer-events-none";

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
            <h2 className="text-3xl font-serif text-brand-navy mb-8">
              Get in Touch
            </h2>
            <div className="space-y-8 text-lg text-neutral-grey font-sans">
              <div>
                <h3 className="font-semibold text-brand-gold mb-2">Address:</h3>
                <p>No. 12A, Brindavanam Street,</p>
                <p>Mylapore, Chennai – 600004.</p>
                <p>Tamil Nadu, India.</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-gold mb-2">Phone:</h3>
                <a
                  href="tel:+918925733441"
                  className="text-brand-navy hover:text-brand-gold transition-colors"
                >
                  +91 89257 33441
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-brand-gold mb-2">Email:</h3>
                <p>
                  <a
                    href="mailto:mylawpore@gmail.com"
                    className="text-brand-navy hover:text-brand-gold transition-colors"
                  >
                    mylawpore@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Advanced Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl border border-neutral-light-grey/20">
            <h2 className="text-3xl font-serif text-brand-navy mb-8 text-center">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: "name", label: "Name", type: "text", required: true },
                { id: "email", label: "Email", type: "email", required: true },
                {
                  id: "phone",
                  label: "Phone (Optional)",
                  type: "tel",
                  required: false,
                },
                {
                  id: "subject",
                  label: "Subject",
                  type: "text",
                  required: true,
                },
              ].map((field) => (
                <div key={field.id} className="relative mt-6">
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    onFocus={() => handleFocus(field.id)}
                    onBlur={handleBlur}
                    className={inputClasses}
                    required={field.required}
                    placeholder=" " // Required for the peer-placeholder-shown pseudo-class to work
                  />
                  {/* REVISED: Simpler className, no conditional logic needed here */}
                  <label htmlFor={field.id} className={labelClasses}>
                    {field.label}
                  </label>
                </div>
              ))}

              <div className="relative mt-6">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={handleBlur}
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  required
                  placeholder=" "
                ></textarea>
                {/* REVISED: Simpler className */}
                <label htmlFor="message" className={labelClasses}>
                  Message
                </label>
              </div>

              <div className="flex items-center justify-center mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-brand-navy cursor-pointer text-white font-bold py-3 px-8 rounded-full focus:outline-none shadow-md hover:shadow-lg transition-all duration-300 ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:bg-brand-gold"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                      Sending...
                    </div>
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Google Map Section */}
      <div className="w-full h-[400px] md:h-[500px] bg-neutral-grey relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.728074783358!2d80.26076837597913!3d13.036751987284655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d100000001%3A0xabc1234567890def!2s12A%2C%20Brindavanam%20St%2C%20Mylapore%2C%20Chennai%2C%20Tamil%20Nadu%20600004!5e0!3m2!1sen!2sin!4v1698765432109!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) contrast(90%)" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Office Location"
          className="absolute inset-0"
        ></iframe>
        {/* Optional: Add a colored overlay to match brand */}
        <div className="absolute inset-0 bg-brand-navy/10 pointer-events-none"></div>
      </div>
    </>
  );
}
