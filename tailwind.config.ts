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
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
