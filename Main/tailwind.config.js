/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      cousine:[
        'Cousine', 'sans'
      ],
      tines: [
        'Tinos'
      ],
      netural: [
        'Netural'
      ]
    },
    extend: {
      animation:{
      marquee: 'marquee 20s linear infinite'
      },
    },
    keyframes: {
      marquee: {
        '0%': {transform: 'translateX(0%)'},
        '100%': {transform: 'translateX(-100%)'},
      }
    }
  },
  plugins: [],
}

