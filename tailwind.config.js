/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        Black: "#272727",
        Gray: "#747474",
        Orange: "#FF652F",
        Yellow: "FFE400",
        Green: "#14A76C",
        TextColor: "#FFFFFF" 
      }
    },
  },
  plugins: [],
}
