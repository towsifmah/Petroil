/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hadercolor: "#282828",
        Primary: "#F40404",
        overlay:"rgba(0, 0, 0, 0.60)"
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          DEFAULT: "100%",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1208px",
          
        },
      },
      fontFamily: {
        popping: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'bannerImg': "url('/src/assets/banner.svg')",
        'our': "url('/src/assets/our1.svg')",
        'supply': "url('/src/assets/supply1.svg')",
        'supply2': "url('/src/assets/supply2.svg')",
        'company': "url('/src/assets/company1.svg')",
        'card1': "url('/src/assets/card1.svg')",
        'card2': "url('/src/assets/card2.svg')",
        'card3': "url('/src/assets/card3.svg')",
      }
    },
  },
  plugins: [],
};
