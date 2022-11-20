/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  prefix: "tw-",
  theme: {
    extend: {
      boxShadow: {
        neumorphism_sm:
          "-3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, 0.288)",
        neumorphism_md:
          "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
        neumorphism_inset_sm:
          "inset -5px -5px 9px rgba(255,255,255,0.45), inset 5px 5px 9px rgba(94,104,121,0.3)",
        neumorphism_inset_md:
          " inset -3px -3px 7px #ffffff73,inset 3px 3px 5px rgba(94, 104, 121, 0.288)",
      },
    },
  },
  plugins: [],
};
