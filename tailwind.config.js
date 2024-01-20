/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "background": "#01051e",
        "primary-color":"#321768",
        "second-text-color":"#ada2c3",
        "sub-heading":"#ffc50c",
        "color-blob1": "#ff7d3b",
        "color-blob": "#A427DF"
      },

      fontFamily:{
        'primary-font':"Barlow",
        
      }

    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}
