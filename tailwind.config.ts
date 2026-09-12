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
          green: "#D6AE72",
          "green-dark": "#9A743F",
          "green-light": "#EBCB9C",
          dark: "#171916",
          "dark-card": "#20231F",
          cream: "#F2EEE5",
          "cream-dim": "#BBBDB0",
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
