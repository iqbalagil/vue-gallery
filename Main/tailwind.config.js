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
      animation: {
        marquee: 'marquee var(--marquee-duration, 6000ms) linear infinite',
        'marquee-delayed': 'marquee var(--marquee-duration, 50s) linear infinite',
      },
      animationDelay: {
        'marquee-delayed': 'calc(var(--marquee-duration, 26s) / -2)',
      },
    },
    keyframes: {
      marquee: {
        '100%': {'transform': 'translate(calc(-50% - 0.5rem))'}
      }
    }
  },
  plugins: [],
}

