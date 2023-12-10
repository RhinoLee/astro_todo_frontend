/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "main-blue": "#22ABE6",
        "gray-1": "#E1E1E1",
        "gray-2": "#848484",
        "gray-3": "#F4F4F4",
        "black-1": "#262626",
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".custom-input": {
          border: "none",
          "border-color": theme("colors.gray-1"),
        },
        ".custom-input:focus": {
          outline: "none",
        },
      });
    },
  ],
};
