/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        mobilelandscape: {
          raw: "(orientation: landscape) and (max-width: 640px)",
        },
        mobileportrait: {
          raw: "(orientation: portrait) and (max-width: 640px)",
        },
      },

      fontFamily: {

        Raleway: ["Raleway", "serif"],
        Inter: ["Inter", "serif"]
      },
    },
  },
  plugins: [],
};
