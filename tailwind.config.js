/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#1A1A1A",
        "dark-main-color": "#090D1F",
        purple: "#6941C6",
        "bg-purple": "#F9F5FF",
        blue: "#3538CD",
        "bg-blue": "#EEF4FF",
        pink: "#C11574",
        "bg-pink": "#FDF2FA",
        "navy-blue": "#363F72",
        "bg-navy-blue": "#F8F9FC",
        green: "#027A48",
        "bg-green": "#ECFDF3",
        orange: "#C4320A",
        "bg-orange": "#FFF6ED",
        aqua: "#026AA2",
        "bg-aqua": "#F0F9FF",
        "rose-red": "#C01048",
        "bg-rose-red": "#FFF1F3",
        gray: "#C0C5D0",
        "dark-gray": "#667085",
        lighterPurple: "#7F56D9",
        borderGray: "#D0D5DD",
      },
      spacing: {
        "17%": "17%",
        "59%": "59%",
        "7%": "7.5%",
        "2%": "2%",
        30: "30px",
        126: "126px", //for navbar, it should be 120 but with consedering the gap between the nav and header it became 126
        125: "125px",
        27: "110px",
        26: "92px",
        50: "50px",
        150: "150px"
      },
      screens: {
        756: "765px",
        iPad: "834px",
        1200: "1200px",
        1440: "1440px",
        1087: "1087px"
        
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
