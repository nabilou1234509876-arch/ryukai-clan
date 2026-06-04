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
        "ryukai-dark": "#000000", // Pitch black background
        "ryukai-blue": "#ffffff", // Primary brand (switched to white/monochrome)
        "ryukai-light": "#e0e6ed", // Text color
        "ryukai-card": "rgba(10, 10, 10, 0.8)", // Dark glass card
        "ryukai-border": "rgba(255, 255, 255, 0.1)", // Subtle border
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
