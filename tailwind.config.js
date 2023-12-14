/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-yellow': '#FFFBEB',
        'cpq-blue': '#002244',
      },
      fontFamily: {
        custom: ['Bricolage Grotesque', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
