/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      merriweather: ["Merriweather", "sans-serif"],
      mina: ["Mina", "sans-serif"],
      caveat: ["Caveat", "cursive"],
    },
  },
  plugins: [],
};
