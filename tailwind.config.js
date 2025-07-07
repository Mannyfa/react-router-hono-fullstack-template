/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: "#63B3ED",
        accent: "#FFD700",
        background: "#F7FAFC",
        text: "#2D3748",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
}
