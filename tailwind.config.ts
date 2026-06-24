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
        navy: {
          DEFAULT: "#080f1e",
          2: "#0d1a2e",
          3: "#111f38",
        },
        accent: {
          DEFAULT: "#2563eb",
          dark: "#1d4ed8",
          darker: "#1e40af",
        },
        muted: "#8a94a6",
        offwhite: "#f5f5f0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
      },
      letterSpacing: {
        tight: "-0.025em",
        tighter: "-0.035em",
      },
    },
  },
  plugins: [],
};

export default config;
