export interface PracticeArea {
  title: string;
  description: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    title: "Banking Matters",
    description:
      "Expert legal solutions for all banking matters, including DRT and SARFAESI applications.",
  },
  {
    title: "Property Matters",
    description:
      "Comprehensive legal services for all property-related matters, including disputes and documentation.",
  },
  {
    title: "Company Matters",
    description:
      "Advising on company matters, from incorporation to compliance and litigation.",
  },
  {
    title: "Labour & Service Matters",
    description:
      "Handling complex labour and service-related legal issues for both employers and employees.",
  },
  {
    title: "Arbitration",
    description:
      "Resolving disputes efficiently through our expert arbitration and mediation services.",
  },
  {
    title: "Banking Cyber Crime",
    description:
      "Specialized legal support for banking-related cyber crime and digital fraud cases.",
  },
  {
    title: "Appeal & Original Jurisdiction",
    description:
      "Representing clients in both original cases and appeals across various judicial levels.",
  },
  {
    title: "Tax Matters",
    description:
      "Providing legal counsel and representation for a variety of tax-related issues.",
  },
  {
    title: "Testamentary Jurisdiction",
    description:
      "Assisting with wills, probate, and other testamentary and succession matters.",
  },
  {
    title: "Rent & Electricity Matters",
    description:
      "Handling legal issues related to rent agreements, tenant disputes, and electricity regulations.",
  },
];

// Define a subset of practice areas for the homepage spotlight
export const featuredPracticeAreas = practiceAreas.slice(0, 6); // Displaying the first 6 areas

export const courtsAndTribunals: string[] = [
  "High Court at Madras (Original, Writ, Appellate Jurisdiction)",
  "Debt Recovery Tribunal (DRT) & Appellate Tribunal (DRAT)",
  "National Company Law Tribunal (NCLT), Chennai",
  "National Green Tribunal (NGT), Southern Zone Bench",
  "Central Administrative Tribunal, Chennai",
  "Civil Courts (Original Suits & Appeals)",
  "Consumer Courts",
  "Army Tribunal, Chennai",
  "Wakf Board / Wakf Tribunal",
];
