import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hunt-dark": {
          100: "#31363F",
          200: "#222831",
        },
        "hunt-teal": {
          100: "#76ABAE",
        },
        "hunt-grey": {
          100: "#EEEEEE",
          200: "#f1f8f6",
          300: "#f3f1e7",
        },
        "green-pallete": {
          100: "#d4e9e2",
          200: "#008248",
          300: "#1e3932",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
