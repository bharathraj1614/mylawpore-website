import React from "react";

const svgBase = "h-12 w-12 text-brand-navy transition-colors duration-300";

// Helper for dual-tone style: Main strokes are Navy (currentColor), Accents are Gold
export const BankingIcon = () => (
  <svg
    className={svgBase}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 21H21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 21V7L12 3L19 7V21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 10C9 10 10 11.5 12 11.5C14 11.5 15 10 15 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Gold Accent: The Coin/Vault circle */}
    <circle
      cx="12"
      cy="14"
      r="2"
      className="fill-brand-gold/20 stroke-brand-gold"
      strokeWidth="1.5"
    />
  </svg>
);

export const PropertyIcon = () => (
  <svg
    className={svgBase}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 22V12H15V22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Gold Accent: The Key/Lock aspect */}
    <rect x="11" y="15" width="2" height="4" className="fill-brand-gold" />
  </svg>
);

export const CompanyIcon = () => (
  <svg
    className={svgBase}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="7"
      width="20"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Gold Accent: The Clasp */}
    <path
      d="M12 11V13"
      className="stroke-brand-gold"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const LabourIcon = () => (
  <svg
    className={svgBase}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Gold Accent: The Gear (Industry) */}
    <path
      d="M23 9C23 9 20 9 20 12M20 12C20 15 23 15 23 15M20 12H16"
      className="stroke-brand-gold"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArbitrationIcon = () => (
  <svg
    className={svgBase}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V15Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Gold Accent: Handshake or Agreement lines */}
    <path
      d="M8 11H16"
      className="stroke-brand-gold"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M8 11L10 9M16 11L14 13"
      className="stroke-brand-gold"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const CyberCrimeIcon = () => (
  <svg
    className={svgBase}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22S20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Gold Accent: The Lock Circuit */}
    <path d="M12 8V11" className="stroke-brand-gold" strokeWidth="1.5" />
    <rect
      x="10"
      y="11"
      width="4"
      height="4"
      rx="1"
      className="fill-brand-gold/20 stroke-brand-gold"
      strokeWidth="1.5"
    />
  </svg>
);

export const JurisdictionIcon = () => (
  <svg
    className={svgBase}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 2A15.3 15.3 0 0 1 16 12A15.3 15.3 0 0 1 12 22A15.3 15.3 0 0 1 8 12A15.3 15.3 0 0 1 12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    {/* Gold Accent: Location Marker */}
    <circle cx="12" cy="12" r="3" className="fill-brand-gold" />
  </svg>
);

export const TaxIcon = () => (
  <svg
    className={svgBase}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 2V8H20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Gold Accent: Percentage */}
    <path
      d="M9 15L15 11"
      className="stroke-brand-gold"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="10" cy="11" r="1" className="fill-brand-gold" />
    <circle cx="14" cy="15" r="1" className="fill-brand-gold" />
  </svg>
);

export const TestamentaryIcon = () => (
  <svg
    className={svgBase}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Gold Accent: The Feather Pen */}
    <path
      d="M12 11C12 11 15.5 7 17 7C18.5 7 18 9 16.5 10.5C15 12 11 16 11 16"
      className="stroke-brand-gold"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M11 16L9 18L8 16L11 16Z" className="fill-brand-gold" />
  </svg>
);

export const GeneralMattersIcon = () => (
  <svg
    className={svgBase}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.5 2H20V22H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Gold Accent: Bookmark */}
    <path
      d="M12 2V8L14 6L16 8V2"
      className="fill-brand-gold/20 stroke-brand-gold"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
