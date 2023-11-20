/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('assets/images/landing-big.jpg')",
      },
      fontFamily: {
        playfairDisplay: ["Playfair Display", "serif"],
      },
      colors: {
        "primary-red": "#EE0000",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "primary-dark": "#38383F",
      },
    },
  },
  plugins: [],
};
