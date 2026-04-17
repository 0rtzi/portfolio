/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./assets/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-primary-fixed-variant": "#0e009d",
        "error-dim": "#d73357",
        "secondary-fixed": "#6df5e1",
        "on-secondary-fixed-variant": "#00655b",
        "on-secondary": "#005b51",
        "tertiary-fixed": "#fd8bca",
        "primary-fixed-dim": "#8387ff",
        "primary-fixed": "#9396ff",
        "on-error-container": "#ffb2b9",
        "on-primary-fixed": "#000000",
        "secondary-dim": "#5de7d3",
        "inverse-primary": "#494bd7",
        "surface-container-lowest": "#000000",
        "tertiary-fixed-dim": "#ee7ebc",
        "tertiary": "#ff9dd1",
        "tertiary-container": "#fa88c8",
        "primary-container": "#9396ff",
        "surface-tint": "#a3a6ff",
        "primary": "#a3a6ff",
        "background": "#060e20",
        "surface-container-high": "#141f38",
        "on-secondary-container": "#dcfff7",
        "error": "#ff6e84",
        "secondary-fixed-dim": "#5de7d3",
        "on-secondary-fixed": "#00463e",
        "surface-container-highest": "#192540",
        "outline-variant": "#40485d",
        "on-surface-variant": "#a3aac4",
        "on-primary-container": "#0a0081",
        "on-background": "#dee5ff",
        "surface": "#060e20",
        "on-tertiary-fixed": "#360024",
        "secondary": "#6df5e1",
        "surface-container": "#0f1930",
        "inverse-surface": "#faf8ff",
        "inverse-on-surface": "#4d556b",
        "on-tertiary": "#6c0f4d",
        "primary-dim": "#6063ee",
        "on-tertiary-fixed-variant": "#6d104e",
        "on-primary": "#0f00a4",
        "on-tertiary-container": "#5e0042",
        "error-container": "#a70138",
        "surface-variant": "#192540",
        "on-error": "#490013",
        "secondary-container": "#006b5f",
        "surface-dim": "#060e20",
        "on-surface": "#dee5ff",
        "surface-bright": "#1f2b49",
        "tertiary-dim": "#eb7bba",
        "surface-container-low": "#091328",
        "outline": "#6d758c"
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px"
      },
      fontFamily: {
        headline: ["Manrope"],
        body: ["Manrope"],
        label: ["Manrope"]
      }
    }
  },
  plugins: []
}
