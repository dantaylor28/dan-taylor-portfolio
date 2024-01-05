import type { Config } from "tailwindcss";
const { addDynamicIconSelectors } = require("@iconify/tailwind");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/*.html"],
//   plugins: [
//     // Iconify plugin
//     addDynamicIconSelectors(),
//   ],
// };

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    // Iconify Plugin
    addDynamicIconSelectors(),
  ],
};
export default config;
