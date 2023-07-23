/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './views/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'md-plus': '770px',
      },
      colors: {
        theme: {
          main: 'var(--color-theme-main)',
          'main-dark': 'var(--color-theme-main-dark)',
          'main-light': 'var(--color-theme-main-light)',
        },
      },
    },
  },
  plugins: [],
}
