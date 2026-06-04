import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "ryukai-dark": "#05070a", // Deepest background
        "ryukai-blue": "#0033cc", // Primary brand (darker blue)
        "ryukai-light": "#e0e6ed", // Text color
        "ryukai-card": "rgba(15, 18, 25, 0.6)", // Glass card
        "ryukai-border": "rgba(30, 40, 60, 0.5)", // Glass border
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        heading: ["var(--font-rajdhani)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
