"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";

// --- Icons ---
const TargetIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand-gold"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand-gold"
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// --- Components ---

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <motion.div
    className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm border border-neutral-100 hover:shadow-md transition-shadow duration-300"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <p className="text-4xl md:text-5xl font-serif font-bold text-brand-gold mb-2">
      {value}
    </p>
    <div className="h-1 w-12 bg-brand-navy mb-3 rounded-full"></div>
    <p className="text-sm md:text-base font-sans text-neutral-600 text-center font-medium uppercase tracking-wide">
      {label}
    </p>
  </motion.div>
);

const FeatureCard = ({
  title,
  points,
  icon,
}: {
  title: string;
  points: string[];
  icon: React.ReactNode;
}) => (
  <motion.div
    className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-gold h-full"
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-brand-navy/5 rounded-full">{icon}</div>
      <h3 className="text-2xl font-serif text-brand-navy font-bold">{title}</h3>
    </div>
    <ul className="space-y-4">
      {points.map((point, i) => (
        <li key={i} className="flex items-start group">
          <span className="text-brand-gold mr-3 mt-1.5 transform group-hover:scale-125 transition-transform duration-200">
            •
          </span>
          <span className="font-sans text-neutral-600 text-base leading-relaxed">
            {point}
          </span>
        </li>
      ))}
    </ul>
  </motion.div>
);

// --- Main Page ---

export default function AboutUsPage() {
  const missionPoints = [
    "Ensuring to reach perfection by excelling in legal profession.",
    "Accessibility to all needy citizens to solve their legal requirements.",
    "Maintaining utmost integrity and ethics in the legal profession.",
    "Treating the profession as a service.",
    "Exploring innovations to get highest proficiency.",
  ];

  const visionPoints = [
    "To make our legal firm a global requirement for all needy company/individuals.",
    "To introduce the latest technology to help litigants and other people.",
    "To adopt simple and honest approach under all circumstances.",
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* --- Hero Section --- */}
      <div className="relative bg-brand-navy text-white pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 mb-4 border border-brand-gold/30 rounded-full text-brand-gold text-xs font-bold tracking-widest uppercase bg-brand-navy/50 backdrop-blur-sm">
              Since 1979
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              About Our Firm
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed font-light">
              A legacy of justice, integrity, and client-focused advocacy
              spanning over four decades.
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- Foundation Story Section --- */}
      <motion.section
        className="py-16 md:py-24 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1 lg:w-1/2">
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-serif text-brand-navy mb-6 relative z-10">
                  Our Foundation
                </h2>
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-brand-gold/10 rounded-full blur-2xl"></div>
              </div>

              <div className="prose prose-lg text-neutral-600 font-sans">
                <p className="mb-6 leading-relaxed">
                  <span className="font-bold text-brand-navy">
                    M/s. K.V. Subramanian Associatez
                  </span>{" "}
                  was established in 1979 and is a registered firm before the
                  Hon’ble High Court at Madras. Our firm is dedicated to
                  catering to the legal requirements of litigants and providing
                  clear, effective solutions.
                </p>
                <p className="leading-relaxed">
                  We handle a multitude of cases relating to Appellate, original
                  and Testamentary Jurisdiction, as well as tax, service,
                  banking, company, property and labour matters. Our approach
                  combines traditional legal wisdom with modern strategic
                  thinking.
                </p>
              </div>

              <div className="mt-8">
                <div className="inline-flex items-center gap-4 p-4 bg-neutral-50 rounded-lg border-l-4 border-brand-gold">
                  <div>
                    <p className="text-brand-navy font-bold text-lg">
                      45+ Years
                    </p>
                    <p className="text-sm text-neutral-500">
                      of Legal Excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="order-1 lg:order-2 lg:w-1/2 w-full relative">
              <div className="relative aspect-[4/3] w-full">
                {/* Decorative offset border */}
                <div className="absolute inset-0 border-2 border-brand-gold translate-x-4 translate-y-4 rounded-lg hidden md:block"></div>

                <Image
                  src="/frim-building.jpg" // Ensure this path works
                  alt="Our Firm's Office"
                  fill
                  className="rounded-lg shadow-2xl object-cover relative z-10 bg-neutral-200"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 z-20 bg-brand-navy text-white p-6 rounded-lg shadow-xl hidden md:block">
                  <p className="text-center font-serif text-2xl font-bold text-brand-gold">
                    Est.
                  </p>
                  <p className="text-center font-sans font-bold text-white">
                    1979
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* --- Mission & Vision Grid --- */}
      <div className="bg-neutral-100 py-16 md:py-24 relative overflow-hidden">
        {/* Decorative background line */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(#0D2745 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FeatureCard
                title="Our Mission"
                points={missionPoints}
                icon={<TargetIcon />}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <FeatureCard
                title="Our Vision"
                points={visionPoints}
                icon={<EyeIcon />}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- Stats Section --- */}
      <motion.section
        className="py-16 md:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-navy mb-3">
              Our Strength in Numbers
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Quantifying our dedication to justice and client success through
              the decades.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatItem value="30+" label="Legal Professionals" />
            <StatItem value="4" label="Panel Advocate for Nationalized Banks" />
            <StatItem
              value="21+"
              label="Educational Institutions Represented"
            />
            <StatItem value="1979" label="Year Established" />
          </div>
        </div>
      </motion.section>

      {/* --- CTA Section --- */}
      <div className="relative bg-brand-navy py-20 md:py-28 text-center overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-2 border-brand-gold"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full border border-white"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
            Meet the Minds Behind Our Success
          </h2>
          <p className="text-lg text-neutral-300 mb-10 max-w-2xl mx-auto">
            Our team of dedicated senior counsels and advocates is our greatest
            asset.
          </p>
          <Button
            href="/our-team"
            variant="primary"
            size="lg"
            className="shadow-xl hover:shadow-brand-gold/20"
          >
            View Our Team
          </Button>
        </div>
      </div>
    </div>
  );
}
