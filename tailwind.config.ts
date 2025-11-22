import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        mw: ["var(--font-mw)", "sans-serif"],
        ab: ["var(--font-ab)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
