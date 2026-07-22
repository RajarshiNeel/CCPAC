import type { Config } from "tailwindcss";

// Design tokens for CCPAC. See CONTENT_GUIDE.md if you ever need to
// tweak the palette — but the colors below were chosen deliberately
// to match the club's "physics & astronomy" identity, so change with care.
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0E1A",
        surface: "#121729",
        elevated: "#171D33",
        border: "#242C48",
        ink: "#EAEDF7",
        muted: "#97A0BE",
        accent: {
          DEFAULT: "#5B7FFF",
          soft: "#8B7CF6",
        },
        gold: "#F2B84B",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "orbit-radial":
          "radial-gradient(circle at 50% 30%, rgba(91,127,255,0.18), transparent 60%)",
        "gold-radial":
          "radial-gradient(circle at 80% 20%, rgba(242,184,75,0.12), transparent 55%)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        spinSlowReverse: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        drift: "drift 6s ease-in-out infinite",
        "spin-slow": "spinSlow 60s linear infinite",
        "spin-slow-reverse": "spinSlowReverse 90s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
