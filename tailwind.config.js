/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          cyan: "#5FB4A2",
          blue: "#203A4C",
          "gray-blue": "#33323D",
        },
        secondary: {
          "light-gray-bg": "#FAFAFA",
          "light-gray-field": "#EAEAEB",
          "bright-red": "#F43030",
        },
      },
    },
  },
  plugins: [],
};
