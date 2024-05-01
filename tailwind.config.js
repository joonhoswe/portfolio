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
      height: {
        '128': '32rem',
      },
      outlineWidth: {
        '6': '6px',
      },
      boxShadow: {
        'r-lg': '5px 0 50px -12px rgba(0, 0, 0, 0.25)',
        'all-lg': '0 0 50px -4px rgb(0 0 0 / 0.25)',
      }
    },
  },
  plugins: [],
}

