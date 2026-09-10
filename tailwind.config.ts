import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        loft: {
          green: "#2D8B4E",
          "green-dark": "#1A5C32",
          "green-light": "#3DA863",
          dark: "#0A0F0A",
          "dark-card": "#111911",
          cream: "#F5F0E8",
          "cream-dim": "#C8C0B0",
          gold: "#C9A84C",
          "gold-dim": "#8A7235",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;