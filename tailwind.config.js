/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    screens: {
      md: "769px",
      lg: "1024px",
    },
    extend: {
      padding: {
        "1/2": "50%",
      },
    },
  },
  plugins: [],
};
