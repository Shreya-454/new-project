/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('/assets/images/herobgimg.png')",
        'foot': "url('/assets/images/footer-bg.png')",
        'bg-gradient': "url('/assets/images/bg-ggradient.png')",
        'slider-bg': "url('/assets/images/slider-bg.png')",
        'bluegreen': 'linear-gradient(136deg, #0076BE 3.65%, #48BF91 89.63%)',
        'blueellipse': 'linear-gradient(134deg, #0076BE 11.95%, #95D8EB 100%)',
        'bluesec': ' linear-gradient(141deg, #48BF91 11.98%, #8BD9C7 83.25%)',
        'ellipse': 'linear-gradient(136deg, #0076BE 3.65%, #48BF91 89.63%)',


      },
      fontFamily: {
        'rubik': '"rubik"'
      },

    },
  },
  plugins: [require('flowbite/plugin'),]
}

