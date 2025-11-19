// import type { Metadata } from "next";

// // Define some common variables for easier reuse
// const TITLE = "M/s. K.V. Subramanian Associatez | Top Law Firm in Chennai";
// const DESCRIPTION =
//   "Leading Chennai law firm offering expert legal services in banking, property, company, and labour law. Contact our experienced advocates for robust legal advice and representation. Law is Dharma.";
// const SITE_URL = "https://www.mylawpore.com"; // Renamed to avoid confusion with the URL class
// const IMAGE_URL = `${SITE_URL}/og-image.png`;
// const KEYWORDS = [
//   "law firm Chennai",
//   "advocates Chennai",
//   "legal services Chennai",
//   "banking law India",
//   "property lawyer Chennai",
//   "corporate law firm Chennai",
//   "labour law India",
//   "arbitration services Chennai",
//   "high court advocate Chennai",
//   "Mylapore lawyers",
//   "legal advice India",
//   "best law firm Chennai",
//   "K.V. Subramanian Associatez",
//   "Dharma law",
//   "Indian legal firm",
// ];

// export const metadata: Metadata = {
//   // 1. Basic SEO Metadata
//   metadataBase: new URL(SITE_URL), // Use the 'URL' constructor with our site's string URL

//   title: {
//     default: TITLE,
//     template: `%s | M/s. K.V. Subramanian Associatez`, // Simplified template
//   },
//   description: DESCRIPTION,
//   keywords: KEYWORDS,
//   authors: [{ name: "M/s. K.V. Subramanian Associatez", url: SITE_URL }],
//   creator: "M/s. K.V. Subramanian Associatez",
//   publisher: "M/s. K.V. Subramanian Associatez",

//   // 2. Open Graph
//   openGraph: {
//     title: TITLE,
//     description: DESCRIPTION,
//     url: SITE_URL,
//     siteName: "M/s. K.V. Subramanian Associatez",
//     images: [
//       {
//         url: IMAGE_URL,
//         width: 1200,
//         height: 630,
//         alt: "M/s. K.V. Subramanian Associatez Law Firm Office in Chennai",
//       },
//     ],
//     locale: "en_IN",
//     type: "website",
//   },

//   // 3. Twitter Card (for Twitter sharing)
//   twitter: {
//     card: "summary_large_image", // Can be 'summary', 'summary_large_image', 'app', or 'player'
//     title: TITLE,
//     description: DESCRIPTION,
//     // creator: "@your_twitter_handle", // If your firm has a Twitter account
//     images: [IMAGE_URL], // Same image as Open Graph is often fine
//   },

//   // 4. Icons & Favicons
//   icons: {
//     icon: "/favicon.ico", // Standard favicon
//     shortcut: "/favicon-16x16.png", // Example for a specific shortcut icon
//     apple: "/apple-touch-icon.png", // For iOS home screen icons
//     other: [
//       {
//         rel: "android-chrome-192x192",
//         url: "/android-chrome-192x192.png",
//       },
//       {
//         rel: "android-chrome-512x512",
//         url: "/android-chrome-512x512.png",
//       },
//     ],
//   },

//   // 5. Canonical URL
//   // While Next.js handles this well, you can explicitly set it if needed.
//   // Note: For canonical, it's often better to set it on a per-page basis if URLs differ.
//   // This global one acts as a fallback.
//   alternates: {
//     canonical: URL,
//   },

//   // 6. Viewport for responsive design (usually default in Next.js)
//   viewport: {
//     width: "device-width",
//     initialScale: 1,
//     maximumScale: 1,
//     userScalable: false,
//   },

//   // 7. Theme Color (for browser UI elements on mobile)
//   themeColor: "#0D2547", // Your brand-navy color

//   // 8. Other optional headers (e.g., for web app manifest)
//   manifest: "/manifest.webmanifest", // Path to your Web App Manifest file (PWA related)

//   // 9. Robots (for search engine crawling directives)
//   // This is handled by app/robots.ts, but can also be defined here directly.
//   // It's generally better to use app/robots.ts for more control.
//   // robots: {
//   //   index: true,
//   //   follow: true,
//   //   nocache: false,
//   //   googleBot: {
//   //     index: true,
//   //     follow: true,
//   //     noimageindex: false,
//   //     'max-video-preview': -1,
//   //     'max-image-preview': 'large',
//   //     'max-snippet': -1,
//   //   },
//   // },

//   // 10. Verification (for proving ownership to search engines)
//   // google: "google-site-verification=YOUR_CODE",
//   // yandex: "yandex-verification=YOUR_CODE",
//   // facebook: "facebook-domain-verification=YOUR_CODE",
//   // You'll get these codes from Google Search Console, Bing Webmaster Tools, etc.
// };

import type { Metadata } from "next";

// Define some common variables for easier reuse
const TITLE = "M/s. K.V. Subramanian Associatez | Top Law Firm in Chennai";
const DESCRIPTION =
  "Leading Chennai law firm offering expert legal services in banking, property, company, and labour law. Contact our experienced advocates for robust legal advice and representation. Law is Dharma.";
const SITE_URL = "https://www.mylawpore.com"; // Use this constant throughout
const IMAGE_URL = `${SITE_URL}/og-image.png`;
const KEYWORDS = [
  "law firm Chennai",
  "advocates Chennai",
  "legal services Chennai",
  "banking law India",
  "property lawyer Chennai",
  "corporate law firm Chennai",
  "labour law India",
  "arbitration services Chennai",
  "high court advocate Chennai",
  "Mylapore lawyers",
  "legal advice India",
  "best law firm Chennai",
  "K.V. Subramanian Associatez",
  "Dharma law",
  "Indian legal firm",
];

export const metadata: Metadata = {
  // 1. Basic SEO Metadata
  metadataBase: new URL(SITE_URL),

  title: {
    default: TITLE,
    template: `%s | M/s. K.V. Subramanian Associatez`,
  },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: "M/s. K.V. Subramanian Associatez", url: SITE_URL }],
  creator: "M/s. K.V. Subramanian Associatez",
  publisher: "M/s. K.V. Subramanian Associatez",

  // 2. Open Graph
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "M/s. K.V. Subramanian Associatez",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "M/s. K.V. Subramanian Associatez Law Firm Office in Chennai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // 3. Twitter Card
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE_URL],
  },

  // 4. Icons & Favicons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },

  // 5. Canonical URL
  alternates: {
    canonical: SITE_URL, // Use the string constant here
  },

  // // 6. Viewport
  // viewport: {
  //   width: "device-width",
  //   initialScale: 1,
  //   maximumScale: 1,
  //   userScalable: false,
  // },

  // // 7. Theme Color
  // themeColor: "#0D2547",

  // 8. Other optional headers
  manifest: "/manifest.webmanifest",

  // 9. Verification
  // google: "google-site-verification=YOUR_CODE",
};
