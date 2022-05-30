module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: '#C0C0C0',
        light: '#F1F0F0',
        dark: '#14061F',
        blue: '#2FB4FF',
        green: {
          300: '#2EF4CC',
          400: '#4AC08F'
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