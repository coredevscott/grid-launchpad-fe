/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "grid-blue": {DEFAULT: "#1784E2"},
        "grid-black": {DEFAULT: "#0B0B0F"},
        "light-dark": {DEFAULT: "#1784E2"},
        "grid-color": {DEFAULT: "#6FBCFF"},
        "grid-dark": {DEFAULT: "#0B62D0"},
      },
    },
  },
  plugins: [],
};
