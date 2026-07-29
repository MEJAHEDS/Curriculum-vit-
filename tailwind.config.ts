import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#0B0E13",
        surface: "#12161D",
        surface2: "#181D26",
        line: "#232A35",
        mint: "#5EEAD4",
        amber: "#F5A623",
        ink: "#E6EDF3",
        muted: "#8B98A5",
      },
      fontFamily: {
        mono: ["var(--font-mono)"],
        sans: ["var(--font-sans)"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(94,234,212,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(94,234,212,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
