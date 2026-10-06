/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#006B3F',
        'brand-green-light': '#E6F4EB',
        'brand-green-dark': '#004C2D',
        'brand-charcoal': '#2D3748',
        'brand-accent': '#3182CE',
        'brand-off-white': '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
