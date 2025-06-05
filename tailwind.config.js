/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#171717",
  "light": "#f4f3ed",
      },
      fontFamily: {
        sans: [ 'var(--font-quicksand)', ...defaultTheme.fontFamily.sans],
        serif: [ 'var(--font-noto-serif)', ...defaultTheme.fontFamily.serif],
        display: ['var(--font-poppins)',...defaultTheme.fontFamily.sans]
            },
      
    },
    animation: {
        'scroll-x': 'scrollX 40s linear infinite',
      },
      keyframes: {
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ]
}
