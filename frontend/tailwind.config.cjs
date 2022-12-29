/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#252121",
        "navbtn": "#6B399D",
        "darkbtn": "#4a276d",
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#6B399D",      
"secondary": "#28ccbe",     
"accent": "#ea3c9f",       
"neutral": "#2F2D39",       
"base-100": "#3A3A3B",      
"info": "#ABDBE8",      
"success": "#2FD0A5",     
"warning": "#F5AA14",     
"error": "#EB1E36",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
