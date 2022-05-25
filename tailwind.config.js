module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: '#C0C0C0',
        light: '#F1F0F0',
        dark: '#14061F',
        green: {
          300: '#2EF4CC'
        }
      },
      fontFamily: {
        'eesti': 'Eesti Pro',
        'body': 'Eesti Pro'
      }
    },
  },
  plugins: [],
}