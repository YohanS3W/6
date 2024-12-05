/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      scrollSnapType: {
        x: 'x',
        mandatory: 'mandatory',
      },
    },
  },
  plugins: [],
};