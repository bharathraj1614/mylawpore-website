import { metadata as siteMetadata } from "./metadata"; // Import the global metadata
import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import PracticeAreas from "@/components/sections/PracticeAreas";
import TeamSpotlight from "@/components/sections/TeamSpotlight";
import CtaSection from "@/components/sections/CtaSection";

// Force apply the metadata to the homepage
export const metadata = siteMetadata;

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <PracticeAreas />
      <TeamSpotlight />
      <CtaSection />
    </>
  );
}
