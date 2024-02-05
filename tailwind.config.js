/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   construction: "url('public/images/sample.jpg')",
      // },
      container: {
        center: true,
      },

      transformOrigin: {
        0: "0%",
      },
      zIndex: {
        "-1": "-1",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        pink: "#FFC0CB",
        lightpink: "#FFB6C1",
        hotpink: "#FF69B4",
        deeppink: "#FF1493",
      },
    },
  },
  plugins: [],
};
