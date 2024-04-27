/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      // fontFamily: {
      //     custom: ["Quicksand", "sans-serif"]
      // },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(15px)',
      },
    },
  },
  plugins: [],
}

