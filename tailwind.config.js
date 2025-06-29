import { mijnui } from "@mijn-ui/react";
import tailwindCssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,html,jsx,tsx,mdx}",
    "./node_modules/@mijn-ui/**/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "background-subtle": "hsl(var(--background-subtle))",
      },
    },
  },
  plugins: [
    mijnui({
      prefix: "mijnui",
    }),
    tailwindCssAnimate,
  ],
};
