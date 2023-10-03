/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        cor:{
          preto: "#000000",
          branco: "#ffffff",
          cinza: "#e2e2e2", 
        }
      },
    },
  },
  plugins: [],
}