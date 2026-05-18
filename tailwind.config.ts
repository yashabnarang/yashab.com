import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        forest: {
          950: "#071510",
          900: "#0c1f17",
          800: "#143528",
          700: "#1d4a38",
          600: "#2a5f4a",
        },
      },
    },
  },
  plugins: [],
};

export default config;
