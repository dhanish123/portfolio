// /** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");

// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//       colors: {
//         ...colors,
//         // primary : colors.purple,
//         // secondary: colors.pink,
//         primary: colors.green,
//         secondary: colors.yellow,
//       },
//       animation: {
//         // marquee: 'marquee 10s linear infinite', // Add your marquee animation here
//         "loop-scroll": 'loop-scroll 10s linear infinite', // Add your marquee animation here

//       },
//       keyframes: {
//         "loop-scroll": {
//           '0%': { transform: 'translateX(0)' },
//           '100%': { transform: 'translateX(-100%)' },
//         },
//       },
//             // Add smooth scrolling behavior here
//             scrollBehavior: ['smooth'], 
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");


module.exports = {
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
        ...colors,
        primary: colors.green,
        secondary: colors.yellow,
      },
      animation: {
        "loop-scroll": 'loop-scroll 10s linear infinite', // Add your marquee animation here
      },
      keyframes: {
        "loop-scroll": {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      borderRadius: {
        'custom-md': '1.375rem', // Custom border-radius
      },
      // Add smooth scrolling behavior here
      scrollBehavior: ['smooth'], 
    },
  },
  plugins: [],
};


