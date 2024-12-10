import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#EEEEEE",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    secondary: {
      main: "#FF7F3E",
    },
    info: {
      main: "#E5E3D4",
      light: "#000000",
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff",
      disabled: "#000000",
    },
    success: {
      main: "#176B87",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#31363F",
    },
    background: {
      default: "#404040",
      paper: "#1c1c1c",
    },
    secondary: {
      main: "#064663",
    },
    info: {
      main: "#041C32",
      light: "#E9EFEC",
    },
    text: {
      primary: "#ffffff",
      secondary: "#ffffff",
      disabled: "#FF7F3E",
    },
    success: {
      main: "#31363F",
    },
  },
});
