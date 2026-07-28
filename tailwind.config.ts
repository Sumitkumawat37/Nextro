import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          DEFAULT: "#2448D8",
          light: "#3D5FE8",
          dark: "#1A35B0",
        },
        navy: {
          DEFAULT: "#10172B",
          light: "#1A2340",
          dark: "#0A0F1D",
        },
        "blue-light": {
          50: "#F0F4FF",
          100: "#E0E9FF",
          200: "#C0D4FF",
          300: "#90B8FF",
          400: "#609CFF",
          500: "#3080FF",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-blue": "linear-gradient(135deg, #2448D8 0%, #3D5FE8 50%, #609CFF 100%)",
        "gradient-blue-light": "linear-gradient(135deg, #F0F4FF 0%, #E0E9FF 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "slide-in": "slideIn 0.6s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(36, 72, 216, 0.1)",
        "glow": "0 0 40px rgba(36, 72, 216, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
