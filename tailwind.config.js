/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'header' : '750px',
        'Videos' : '1000px',
        'VideosSemiLaptop':'850px',
        'VideosTablet' : '700px',
        'VideosTablet2' : '500px',
        'VideosPhone':'250px'
      }
    },
  },
  plugins: [],
}