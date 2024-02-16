import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      opensans: ["Open Sans", "sans-serif"],
      kalnia: ["Kalnia", "serif"],
      playfair: ["Playfair Display", "serif"],
      mulish: ["Mulish", "sans-serif"],
    },
    colors: {
      primaryColor: "#cd0e2d",
      backgroundColor: "#fff",
      textColor: "#000",
      textColor1: "#BEBEBE",
      textColor2: "#2E3133",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
