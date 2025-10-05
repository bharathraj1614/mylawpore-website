import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#1A237E",
          gold: "#C0A062",
        },
        neutral: {
          charcoal: "#333333",
          grey: "#4A4A4A",
          "light-grey": "#F4F4F4",
          "off-white": "#FCFCFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-lato)"],
        serif: ["var(--font-merriweather)"],
      },
      // Add the animation and keyframes here
      animation: {
        balance: "balance 2s ease-in-out infinite",
      },
      keyframes: {
        balance: {
          "0%, 100%": { transform: "rotate(5deg)" },
          "50%": { transform: "rotate(-5deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
