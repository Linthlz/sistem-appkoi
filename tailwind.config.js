/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Definisikan palet warna baru di sini
        primary: {
          DEFAULT: '#DC2626', // red-600
          dark: '#B91C1C',    // red-700
          light: '#FEE2E2',   // red-100
        },
        accent: {
          DEFAULT: '#F97316', // orange-500
          dark: '#EA580C',    // orange-600
          light: '#FFEDD5',   // orange-100
        },
        // Anda bisa menambahkan warna lain jika perlu
      }
    },
  },
  plugins: [],
}
