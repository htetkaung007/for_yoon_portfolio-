import { AppBar, Box, useMediaQuery, useTheme } from "@mui/material";

import TopBar from "./topBar";
import { motion } from "framer-motion";
import MovingSquare from "./MovingIcon";
interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const theme = useTheme();
  const isLaptopScreen = useMediaQuery("(min-width: 1200px)");

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
    >
      <AppBar
        color="primary"
        sx={{
          position: "sticky",
          minWidth: "440px",
          color: theme.palette.text.primary,
          display: "flex",
          alignItems: "center",
          margin: "auto",
          width: "100%",

          bgcolor: theme.palette.info.main,
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            minWidth: "420px",
            width: isLaptopScreen ? "1000px" : "80%",
          }}
        >
          <MovingSquare />
          <TopBar>{children}</TopBar>
        </Box>
      </AppBar>
    </motion.div>
  );
};
export default Layout;
