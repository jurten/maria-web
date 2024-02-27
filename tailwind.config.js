/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#3949AB",
        "secondary": {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        "lato": ["Lato", "sans-serif"],
      },
      container: {
        center: true,
        padding: "2rem",
      },
      screens: {
        "sm": "640px",
        "md": "768px",
      },
    },
  },
  plugins: [],
}

