module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.4rem",
      },
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
