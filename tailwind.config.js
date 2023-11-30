/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./js/*.js"],
  theme: {
    extend: {
      colors : {
        //Colores principales
        "d-blue-intro" : "hsl(217, 28%, 15%)",
        "d-blue-main" : "hsl(218, 28%, 13%)",
        "d-blue-foot" : "hsl(216, 53%, 9%)",
        "d-blue-testi" : "hsl(219, 30%, 18%)",
        //Colores secundarios (accent)
        "d-cyan" : "hsl(176, 68%, 64%)",
        "d-cyan" : "hsl(198, 60%, 50%)",
        "d-cyan" : "hsl(0, 100%, 63%)",
      },
      fontFamily: {
        "raleway" : "'Raleway', sans-serif",
        "opensans" : "'Open Sans', sans-serif"
      },
      backgroundImage : {
        "curva-mobile" : "url('/src/svg/bg-curvy-mobile.svg')",
        "curva-desktop" : "url('/src/svg/bg-curvy-desktop.svg')"
      }
    },
  },
  plugins: [],
}

