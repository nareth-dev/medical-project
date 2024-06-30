import { orange } from "@mui/material/colors";
import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#008001",
        red: "#EA4B48",
        orange: '#FF8A00',
        gray40: "#CCCCCC",
        gray30: "#D1D5DB",
        gray20: "#F2F2F2",
        gray10: "#F7F7F7",
      },
    },
  },
  plugins: [flowbite.plugin(),],
};
export default config;
