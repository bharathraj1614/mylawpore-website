export interface Advocate {
  name: string;
  title: string;
  imageUrl: string;
  summary: string;
  areasOfPractice: string[];
  detailedBackground: string;
  experienceTag: string; // New field for a concise experience summary
}

export const advocates: Advocate[] = [
  {
    name: "Mr. K.V. Subramanian",
    title: "Senior Counsel", // Keeping original title
    imageUrl: "/advocate.png",
    experienceTag: "48+ Years | Senior Advocate", // Concise experience tag
    summary: `Mr. K.V. Subramanian is a highly experienced Senior Advocate and Constitutional Expert, practicing since 1977. He consistently appears before the Hon’ble High Court of Judicature at Madras, DRT, DRAT, and the Supreme Court of India.`,
    areasOfPractice: [
      "Constitutional Law",
      "Taxation",
      "Original Jurisdiction",
      "Appellate Jurisdiction",
      "Insolvency",
      "Labour Law",
      "Service Law",
      "Testamentary Matters",
      "Commercial Jurisdictions",
      "NCLT",
      "NCLAT",
      "CESTAT",
      "Company Courts",
    ],
    detailedBackground: `Enrolled as an Advocate in 1977, Mr. Subramanian initially practiced in civil and criminal matters across various courts in Kanyakumari District. Since 1979, he has focused his practice before the Hon’ble High Court of Judicature at Madras. He has represented Central and State Authorities, Banks, Local Bodies, and Public Institutions. Designated as Senior Counsel in 2005, his extensive experience includes complex matters before the High Court at Madras (both Principal Seat and Madurai Bench), DRT, DRAT, NCLT, NCLAT, CESTAT, and Company Courts. He is a recognized Constitutional Expert and appears before various High Courts in India and the Supreme Court of India. Associate K.V. Subramanian has been involved in legal matters since 1979.`,
  },
  {
    name: "Mr. R. Jagadeesan",
    title: "Advocate",
    imageUrl: "/advocate.png",
    experienceTag: "Vast Legal Expertise | Former Banker", // Concise experience tag
    summary: `Mr. R. Jagadeesan is a postgraduate in Law with vast legal expertise, particularly in Arbitration, Banking, and Property Matters, following a career in a Nationalized Bank.`,
    areasOfPractice: [
      "Arbitration",
      "Banking Law",
      "Service Law",
      "Labour Law",
      "Cyber Crime",
      "Testamentary & Property Matters",
      "NCLT",
      "NCLAT",
      "Company Courts",
      "CESTAT",
      "Intellectual Property Rights",
      "Green Law Tribunal",
      "RERA Matters",
      "Real Estate Matters",
      "Tax Matters",
    ],
    detailedBackground: `Previously served in a Nationalized Bank before opting for Voluntary Retirement to pursue legal practice. A Postgraduate in Law, he has vast experience in Arbitration, Banking, Service, Labour, Cyber Crime, Testamentary and Property Matters. He regularly appears before the High Court at Madras, DRT, DRAT (Chennai, Bombay, Delhi, Madurai, Coimbatore), City Civil Court, Administrative Tribunals, Consumer Courts, NCLT, NCLAT, Company Courts, CESTAT, Intellectual Property rights, Green Law Tribunal, RERA Matters, and REAL ESTATE Matters. He is an Expert in Banking, Service and Tax Matters.`,
  },
  {
    name: "Mr. M.A. Abdul Wahab",
    title: "Advocate",
    imageUrl: "/advocate.png",
    experienceTag: "32 Years Experience", // Concise experience tag
    summary: `Mr. M.A. Abdul Wahab has over 32 years of experience before the Hon’ble High Court at Madras and various tribunals, specializing in Civil, Original, and Appellate Jurisdictions.`,
    areasOfPractice: [
      "Civil Law",
      "Original & Appellate Jurisdiction",
      "Company Law",
      "Testamentary Matters",
      "Admiralty Law",
      "Service Law",
      "Trade Marks Jurisdictions",
      "DRT",
      "DRAT",
      "Small Causes Court",
      "Wakf Tribunal",
      "Commercial Courts",
    ],
    detailedBackground: `Practicing before the Hon’ble High Court at Madras, Civil Courts, Administrative Tribunals and Consumer Courts for over 32 years. His areas of expertise include Civil, Original and Appellate Jurisdiction, Company Law, Testamentary Matters, Admiralty, Service and Trade Marks Jurisdictions. He also appears before DRT and DRAT, Small Causes Court, Wakf Tribunal, and Commercial Courts.`,
  },
  {
    name: "Mrs. V. Revathi",
    title: "Advocate",
    imageUrl: "/advocate.png",
    experienceTag: "13 Years Experience", // Concise experience tag
    summary: `Mrs. V. Revathi has over 13 years of extensive experience, actively handling Original Applications, SARFAESI Proceedings, and Civil Suits before Civil Courts and Debt Recovery Appellate Tribunals.`,
    areasOfPractice: [
      "Original Applications",
      "SARFAESI Proceedings",
      "Civil Suits",
      "Debt Recovery Matters",
      "DRT",
      "Family Court Matters",
    ],
    detailedBackground: `Practicing for over 13 years with extensive experience before Civil Courts and Debt Recovery Appellate Tribunals. She actively handles Original Applications, SARFAESI Proceedings and Civil Suits. She has managed variously Original Applications and Original Suits. Her expertise also includes many cases and DRT and Family Court Matters.`,
  },
  {
    name: "Mr. S. Deenadhayalan",
    title: "Advocate & Commissioner of Oath",
    imageUrl: "/advocate.png",
    experienceTag: "7 Years Experience", // Concise experience tag
    summary: `Mr. S. Deenadhayalan, an Advocate and Commissioner of Oath, has 7 years of practice before the High Court at Madras and various tribunals, specializing in Civil and Debt Recovery matters.`,
    areasOfPractice: [
      "Debt Recovery Tribunal",
      "Debt Recovery Appellate Tribunal",
      "City Civil Courts",
      "Commercial Court",
      "Small Causes Courts",
    ],
    detailedBackground: `Practicing for the past 7 years before the Hon’ble High Court at Madras, City Civil Courts, Debt Recovery Tribunal and Debt Recovery Appellate Tribunal. He is associated with M/s. K.V. Subramanian Associatez and also functions as a Commissioner of Oath. His practice also includes Commercial Court and Small Causes Courts.`,
  },
  {
    name: "Mr. R. Farooq Khan",
    title: "Advocate",
    imageUrl: "/advocate.png",
    experienceTag: "4 Years Experience", // Concise experience tag
    summary: `Mr. R. Farooq Khan, with 4 years of experience, is a junior associate assisting in Recovery and Civil Litigation, with practice before the High Court of Madras, DRT, and NCLT.`,
    areasOfPractice: [
      "Recovery Matters",
      "Civil Litigation",
      "SARFAESI Proceedings",
      "NCLT",
      "NCLAT",
      "High Court of Madras",
    ],
    detailedBackground: `Practicing before the Hon’ble High Court at Madras, DRT and DRAT for the past 3 years. He is a Junior to M/s. K.V. Subramanian Associatez and actively assists in matters relating to Recovery and Civil Litigation. His practice also includes SARFAESI Proceedings, NCLT, NCLAT, and High Court of Madras matters.`,
  },
  {
    name: "Shankar",
    title: "Advocate",
    imageUrl: "/advocate.png",
    experienceTag: "To be Added",
    summary: "Profile details for Shankar to be added.",
    areasOfPractice: [], // Empty array for now
    detailedBackground: "Profile to be Added.",
  },
];

export const featuredAdvocates = advocates.slice(0, 3);
