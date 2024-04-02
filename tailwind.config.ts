import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "16px",
      md: "18px",
      lg: "22px",
      xl: "26px",
      xxl: "56px",
      xxxl: "87px",
    },
    fontWeight: {
      thin: "100",
      base: "300",
      regular: "500",
      semibold: "700",
      bold: "900",
    },
    extend: {
      fontFamily: {
        primary: ["var(--font-primary)"],
        secondary: ["var(--font-secondary)"],
      },
      colors: {
        primary: "#010922",
        secondary: "#8080D7",
        alternative: "#AAD9D9",
        blue_button: "#1F1F7C",
        logos_bg: "#6358BD",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
