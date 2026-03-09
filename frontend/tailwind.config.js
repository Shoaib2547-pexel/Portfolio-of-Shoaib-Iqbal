/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
        react: '#61DBFB',
        github: '#f5f5f5',
        html: '#e34c26',
        css: '#264de4',
        javascript: '#f0db4f',
        gradient1: '#ff6a00',
        gradient2: '#ee0979',
        darkgray: '#333333',
      },
      },
    },

  },
  plugins: [],
}