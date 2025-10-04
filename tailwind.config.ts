import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Define the "Statesman" color palette
      colors: {
        brand: {
          navy: "#1A237E", // Primary color for trust and authority
          gold: "#C0A062", // Accent color for prestige and wisdom
        },
        neutral: {
          charcoal: "#333333", // For primary text
          grey: "#4A4A4A", // For secondary text
          "light-grey": "#F4F4F4", // For borders and backgrounds
          "off-white": "#FCFCFC", // For main page background
        },
      },
      // Extend the "Modern Authority" font families
      fontFamily: {
        sans: ["var(--font-lato)", ...defaultTheme.fontFamily.sans], // Lato for body text
        serif: ["var(--font-merriweather)", ...defaultTheme.fontFamily.serif], // Merriweather for headings
      },
    },
  },
  plugins: [],
};
export default config;
