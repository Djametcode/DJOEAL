/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quick: ["Quicksand", "sans-serif"],
        jost: ["Jost", "sans-serif"],
        alata: ["Alata", "sans-serif"],
      },
      backgroundImage: {
        business: "url('./images/business,-entrepreneurship-and-growth.svg')",
        heikei: "url('./images/wave-haikei (5).svg')",
        video: "url('./src/images/degraded-119282.mp4')",
      },
    },
  },
  plugins: [],
};
