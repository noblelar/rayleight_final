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
    },
    colors: {
      primaryColor: "#cd0e2d",
      backgroundColor: "#fff",
      textColor: "#000",
      secondaryColor: "#1e81b0",
      accenColor: "#9DCE0E",
      wedding: "#ede8dc",
      weddingText: "#dfbd86",
      baptism: "#b2574b",
      baptism2: "#f9ecde",
      hallhire: "#999",
    },
    extend: {
      grayscale: {
        50: "50%",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'inner1': ' inset 0 0px 20px rgba(0, 0, 0, 0.3)',
        'xxxl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
export default config;

// secondaryColor: "#1e81b0",
