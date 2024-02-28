import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      one: "#0F0F0F",
      second: "#6A0DAD",
      third: "#C0C0C0",
      text: "#fff",
      transparent: "transparent",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
    },
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [nextui()],
};
export default config;
