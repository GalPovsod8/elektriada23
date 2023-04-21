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
      animation: {
        'show': 'show 2s ease-in-out forwards',
      },
      keyframes: {
        show: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
    },
  },
  plugins: [],
  }
}
