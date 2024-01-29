/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "cs-blue":"#46a6ff",
        "cs-dark-slate":"",
        "cs-light-slate": "",
        "cs-off-white":"#fafafa",
        "cs-light-gray": "#f1f1f1"
      },
      fontFamily: {
        Signika : ["Signika Negative, sans-serif"],
        SanFran : ["San Fransisco, sans-serif"]       
      }
    },
  },
  plugins: [],
}

