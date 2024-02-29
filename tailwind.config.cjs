const { createThemes } = require("tw-colors");

module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.ts"],
  theme: {
    extend: {
      spacing: {
        '775px': 'calc(100vh - 63px - 24px)', // Chiều cao phần tử là 100% chiều cao trình duyệt trừ đi khoảng cách từ top (63px) và padding bottom (24px)
        '572px': '572px',
        '164px': '164px',
        '48px': '48px',
        '12px': '12px',
        '24px': '24px',
      },
      width: {
        'fixed': '640px',
        'fixed-569': '569px'
      },
      padding: {
        '24px': '24px'
      },
      borderRadius: {
        '8': '8px',
        '0': '0', 
      },
      borderWidth: {
        '1': '1px',
      },
      justifyContent: {
        'space-between': 'space-between',
      },
      gap: {
        '20': '20px'
      },
      colors: {
        customGrayLight: "#D8D8D8",
        customGrayDark: "#939090",
        customYellow: "#FBAF17",
        customBlack: "#2E2E2E",
        customGray: "#5F5F5F",
        customDarkGray: "#252525",
        customBrown: "#533700",
        customWhite: "#FFFFFF",
        customDark: "#080808",
        customDark2: "#151515",
        customBlack2: "#000000",
        customDark3: "#212121",
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
