import { AppBar, Box, Toolbar, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { ThemeContext } from "../ThemeProviderWrapper";
import TopBar from "./topBar";
interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  /*  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const { toggleTheme } = themeContext;*/
  const theme = useTheme();

  return (
    <Box>
      <AppBar
        color="primary"
        sx={{
          position: "sticky",
          minWidth: "420px",
          color: theme.palette.text.primary,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "10px",
          border: "1px ",
          borderRadius: "8px",
          boxShadow: "1px 2px 10px #888888",
          bgcolor: theme.palette.info.main,
          height: "100vh ",
        }}
      >
        <TopBar />
        {children}
      </AppBar>
    </Box>
  );
};
export default Layout;
