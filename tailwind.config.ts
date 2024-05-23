import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebasneue: ["var(--font-bebas-neue)"],
        opensans: ["var(--font-open-sans)"]
      },
      colors: {
        text: "#ebe9fc",
        background: "#010104",
        primary: "#9b92e9",
        secondary: "#020024",
        accent: "#0600c2",
      },
    },
  },
  plugins: [],
};
export default config;
