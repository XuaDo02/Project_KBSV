const { createThemes } = require("tw-colors");

module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.ts"],
  theme: {
    extend: {
      colors: {
        // Màu xám nhạt
        customGrayLight: "#D8D8D8",
        // Màu xám đậm
        customGrayDark: "#939090",
        // Màu vàng
        customYellow: "#FBAF17",
        // Màu đen
        customBlack: "#2E2E2E",
        // Màu xám
        customGray: "#5F5F5F",
        // Màu xám đậm
        customDarkGray: "#252525",
        // Màu nâu
        customBrown: "#533700",
        // Màu trắng
        customWhite: "#FFFFFF",
        // Màu #080808
        customDark: "#080808",
        // Màu #151515
        customDark2: "#151515",
        // Màu #000000
        customBlack2: "#000000",
        // Màu #212121
        customDark3: "#212121",
        //màu đỏ #FF453A
        customRed: "#FF453A"
      },
    }
  },

  plugins: [
    createThemes(({ light, dark }) => ({
      light: light({
        primary: "white",
        secondary: "black",
      }),
      dark: dark({
        primary: "black",
        secondary: "white"
      }),
      oled: dark({
        primary: "gray",
        secondary: "white"
      })
    }))
  ]
};
