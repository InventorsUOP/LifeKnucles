/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
      primary: "#2E8B57",
      secondary: {
        DEFAULT: "#FF9C01",
        100: "#FF9001",
        200: "#FF8E01",
      },
      black: {
        DEFAULT: "#000",
        100: "#1E1E2D",
        200: "#232533",
      },
      gray: {
        100: "#EEEEEE",
      },
      goldenyellow: {
        100:"#ffa91a"
      },
      blue:{
        100:"#F29318"
      }
    },
    fontFamily: {
      pthin: ["Poppins-Thin", "sans-serif"],
      pextralight: ["Poppins-ExtraLight", "sans-serif"],
      plight: ["Poppins-Light", "sans-serif"],
      pregular: ["Poppins-Regular", "sans-serif"],
      pmedium: ["Poppins-Medium", "sans-serif"],
      psemibold: ["Poppins-SemiBold", "sans-serif"],
      pbold: ["Poppins-Bold", "sans-serif"],
      pextrabold: ["Poppins-ExtraBold", "sans-serif"],
      pblack: ["Poppins-Black", "sans-serif"],
      marker: ["PermanentMarker-Regular", "sans-serif"],
      montserrat: ["Montserrat-Black", "sans-serif"],
      montserratItalic: ["Montserrat-Italic", "sans-serif"],
    },},
  },
  plugins: [],
}

