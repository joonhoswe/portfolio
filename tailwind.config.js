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
      }
    },
  },
  plugins: [],
}

