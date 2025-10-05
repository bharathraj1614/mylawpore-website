"use client";
import { motion } from "framer-motion";
import { featuredPracticeAreas } from "@/data/practiceAreas"; // Import featuredPracticeAreas
import Card from "../ui/Card";
import Button from "../ui/Button"; // Import Button component

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function PracticeAreas() {
  return (
    <motion.section
      className="py-16 md:py-24 bg-neutral-light-grey"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-navy mb-4">
            Our Key Practice Areas
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-neutral-grey">
            We provide expert legal services across a wide range of practice
            areas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {" "}
          {/* Added mb-12 for button spacing */}
          {featuredPracticeAreas.map(
            (
              area // Use featuredPracticeAreas here
            ) => (
              <Card key={area.title}>
                <h3 className="text-2xl font-serif text-brand-navy mb-3">
                  {area.title}
                </h3>
                <p className="text-neutral-grey font-sans flex-grow">
                  {area.description}
                </p>
              </Card>
            )
          )}
        </div>
        <div className="text-center">
          <Button href="/practice-areas" variant="outline" size="lg">
            View All Practice Areas
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
