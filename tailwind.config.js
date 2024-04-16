/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,tsx,mdx}",
    "./src/pages/dashboard/**{,/**}/*.{js,jsx,tsx,mdx}",
    "./src/Components/**{,/**}/*.jsx",
    "./src/HOC/**/*.{js,jsx,tsx,mdx}",
    "./src/Container/**/*.{js,jsx,tsx,mdx}",
    "./src/app/**/*.{js,jsx,tsx,mdx}",
    "./src/*.{js,ts,jsx,mdx}",
    "./*.{js,ts,jsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}