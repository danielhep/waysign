/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IdentityFont', 'sans-serif'],
        sansAlt: ['Atkinson Hyperlegible', 'sans-serif'],
        sansAlt2: ['Fira Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
