/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'green': '#79E6AE',
        'grey' : '#D8D7D7',
        'green1' : '#1BB566',
        'krem' : '#E5E5E5'
    },
    borderRadius: {
      'lg': '40px',
    },
    fontSize: {
      base: '19px',
  },
},
},
  plugins: [require("daisyui")],
}

