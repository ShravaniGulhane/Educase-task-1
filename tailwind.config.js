/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        popx: {
          primary: "#6A32F6",
          primaryLight: "#ECE3FF",
          gray: "#8A8A8E",
        }
      },
      boxShadow: {
        soft: "0 20px 45px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xxl: "1.25rem",
      }
    },
  },
  plugins: [],
}
