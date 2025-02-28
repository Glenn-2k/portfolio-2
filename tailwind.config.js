/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scrollBehavior: ["smooth"],
    },
    fontFamily: {
      heading: ["raleway", "sans-serif"],
      body: ["lato", "sans-serif"],
    },
  },
  plugins: [],
};
