export interface Advocate {
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
  experience?: string;
}

export const advocates: Advocate[] = [
  {
    name: "Mr. K.V. Subramanian",
    title: "Senior Counsel",
    imageUrl: "/advocate.png",
    bio: `Enrolled as an Advocate in 1977 and initially practiced in civil and criminal matters before various courts in Kanyakumari District. Since 1979, he has been practicing before the Hon’ble High Court of Judicature at Madras, handling cases across Constitutional, Taxation, Original, Appellate, Insolvency, Labour, Service, Testamentary and Commercial Jurisdictions. He has represented Central and State Authorities, Banks, Local Bodies and Public Institutions. Designated as Senior Counsel in 2005, he continues to appear in complex matters before the High Court at Madras (both Principal Seat and Madurai Bench), DRT and DRAT.`,
    experience: "48+ Years",
  },
  {
    name: "Mr. R. Jagadeesan",
    title: "Advocate",
    imageUrl: "/advocate.png",
    bio: `Previously served in a Nationalized Bank before opting for Voluntary Retirement to pursue legal practice. A Postgraduate in Law, he has vast experience in Arbitration, Banking, Service, Labour, Cyber Crime, Testamentary and Property Matters. He regularly appears before the High Court at Madras, DRT, DRAT, City Civil Court, Administrative Tribunals and Consumer Courts.`,
    experience: "Former Banker | Vast Legal Expertise",
  },
  {
    name: "Mr. M.A. Abdul Wahab",
    title: "Advocate",
    imageUrl: "/advocate.png",
    bio: `Practicing before the Hon’ble High Court at Madras, Civil Courts, Administrative Tribunals and Consumer Courts for over 32 years. His areas of expertise include Civil, Original and Appellate Jurisdiction, Company Law, Testamentary Matters, Admiralty, Service and Trade Marks Jurisdictions. He also appears before DRT and DRAT.`,
    experience: "32 Years",
  },
  {
    name: "Mrs. V. Revathi",
    title: "Advocate",
    imageUrl: "/advocate.png",
    bio: `Practicing for over 13 years with extensive experience before Civil Courts and Debt Recovery Appellate Tribunals. She actively handles Original Applications, SARFAESI Proceedings and Civil Suits. She has managed more than 500 Original Applications and over 600 Original Suits.`,
    experience: "13 Years",
  },
  {
    name: "Mr. S. Deenadhayalan",
    title: "Advocate & Commissioner of Oath",
    imageUrl: "/advocate.png",
    bio: `Practicing for the past 7 years before the Hon’ble High Court at Madras, City Civil Courts, Debt Recovery Tribunal and Debt Recovery Appellate Tribunal. He is associated with M/s. K.V. Subramanian Associatez and also functions as a Commissioner of Oath.`,
    experience: "7 Years",
  },
  {
    name: "Mr. R. Farooq Khan",
    title: "Advocate",
    imageUrl: "/advocate.png",
    bio: `Practicing before the Hon’ble High Court at Madras, DRT and DRAT for the past 3 years. He is a Junior to M/s. K.V. Subramanian Associatez and actively assists in matters relating to Recovery and Civil Litigation.`,
    experience: "3 Years",
  },
];

export const featuredAdvocates = advocates.slice(0, 3);
