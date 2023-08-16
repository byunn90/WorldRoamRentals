module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1DA1F2",
        secondary: "#14171A",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["group-hover"],
      display: ["group-hover"],
    },
  },
  plugins: [],
};
