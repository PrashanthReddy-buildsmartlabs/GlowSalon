/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fcf3f6',
          100: '#fae4ec',
          200: '#f5ccd9',
          300: '#efa2bb',
          400: '#e56c94',
          500: '#db4273',
          600: '#c52857',
          700: '#a51c44',
          800: '#891a3c',
          900: '#731a35',
        },
        gold: {
          light: '#f9eed3',
          DEFAULT: '#d4af37',
          dark: '#aa8c2c',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 4px 20px rgba(212, 175, 55, 0.15)',
      }
    },
  },
  plugins: [],
}
