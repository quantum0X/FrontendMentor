/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      // animation
      animation: {
          colorChanger: 'colorChanger 2s infinite ease-in-out'
      },
      // keyframes
      keyframes: {
        colorChanger : {
          '0%': {
              background: 'rgb(255, 73, 173)'
          },
          '50%' : {
              background: 'rgb(81, 65, 255)'
          }
        }
      },
      colors : {
        epic : '#131313'
      }
    }
  },
  plugins: [],
}