import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFE6A9",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    secondary: {
      main: "#3876BF",
    },
    info: {
      main: "#F99E18",
      light: "#000000",
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff",
    },
    success: {
      main: "#000000",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#666666",
    },
    background: {
      default: "#404040",
      paper: "#1c1c1c",
    },
    secondary: {
      main: "#ffffff",
    },
    info: {
      main: "#4335A7",
      light: "#E9EFEC",
    },
    text: {
      primary: "#ffffff",
      secondary: "#000000",
    },
    success: {
      main: "#ffffff",
    },
  },
});
