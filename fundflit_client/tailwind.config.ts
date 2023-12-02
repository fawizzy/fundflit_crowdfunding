import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "system-ui"],
        montserrat: ["Montserrat", "system-ui"],
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        btn: "#26FF91",
        hyper: "#52FFE2",
        Green: "#00b14f",
        greenVariant: "#33c172",
        Black: "#242426",
      },
      keyframes: {
        "animate-fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "animate-fade-in 0.4s ease-out backwards",
      },
    },
  },
  plugins: [],
};
export default config;
