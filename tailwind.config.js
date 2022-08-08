module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'apFont': ['"IBM Plex Sans Thai Looped"', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui"),require('tailwindcss-animatecss')({
    classes: ['animate__animated', 'animate__fadeInDown', 'animate__fadeOutUp'],
    settings: {
      animatedSpeed: 1000,
      heartBeatSpeed: 1000,
      hingeSpeed: 2000,
      bounceInSpeed: 750,
      bounceOutSpeed: 750,
      animationDelaySpeed: 1000
    },
    variants: ['responsive', 'hover', 'reduced-motion'],
  })],
  daisyui: {
    styled: true,
    themes: ["cyberpunk","black","dark","coffee","synthwave"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "black",
  },
};