/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'mainDark':'#1A1A1A',
        'primaryColor':'#7A0F15',
        'secondaryColor':'#ABB8C3',
        'accentColor':'#9A5A52',
        'greenColor':'#D1E7E0',
        'beigeColor':'#F3EED9',
        'whiteColor':'#FFF6F2',
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}
