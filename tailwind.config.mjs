import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.mono],
        serif: [...defaultTheme.fontFamily.mono],
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
          background: "hsl(var(--muted-background))",
        },
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
