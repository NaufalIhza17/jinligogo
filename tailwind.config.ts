import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", ...fontFamily.sans],
        gilroy: ["Gilroy", ...fontFamily.sans],
        switzer: ["Switzer", ...fontFamily.sans],
        "general-sans": ["GeneralSans", ...fontFamily.sans],
      },
      colors: {
        "primary-blue": "#8A95A6",
      },
      backgroundImage: {
        review: "url('/images/bg-review.png')",
        upgrade: "url('/images/bg-upgrade.png')",
      },
    },
  },
  plugins: [],
};
export default config;
