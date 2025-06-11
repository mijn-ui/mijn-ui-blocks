import { mijnui } from "@mijn-ui/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./blocks/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@mijn-ui/**/dist/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [mijnui()],
};
