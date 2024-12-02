import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Divider,
  Chip,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CopyIcon from "../../utils/copyIcon";
import Skills from "./Skills";
import Bio from "./Bio";
import AnimatedJavaSkill from "./JavaIcon";

const Header: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const theme = useTheme();
  const isLaptopScreen = useMediaQuery("(min-width: 1200px)");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar
      sx={{
        position: "sticky",
        minWidth: "400px",
        color: theme.palette.text.primary,
        maxWidth: isLaptopScreen ? "1000px" : "80%",
        padding: "10px",
        border: "1px ",
        borderRadius: "8px",
        boxShadow: "1px 2px 10px #888888",
        bgcolor: theme.palette.text.secondary, // Background color from theme
      }}
    >
      {/* photo */}
      <Box
        sx={{
          display: isSmallScreen ? "block" : "none",
          justifyContent: "space-between",
        }}
      >
        <Toolbar
          sx={{
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            component="img"
            sx={{
              width: 100, // Reduced size (adjust as needed)
              height: 100,
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px none ", // Optional border
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow for a clean look
            }}
            alt="The house from the offer."
            src="./yoon.jpg"
          ></Box>
        </Toolbar>

        <Box
          sx={{ mr: 4, mt: 2, display: "flex", justifyContent: "space-around" }}
        >
          {children && <Box>{children}</Box>}
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {/* Left Section */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              ml: 3,
              fontFamily: "Roboto",
              fontSize: isSmallScreen ? 24 : 50,
            }}
          >
            Yoon Myat Phoo
          </Typography>
          <Typography variant="h6" sx={{ ml: 3, mb: -1, mt: 1 }}>
            <LocalPhoneIcon sx={{ mr: 1 }} />
            09-962287200
          </Typography>
          <Typography
            variant="h6"
            sx={{
              ml: 3,
              display: "flex",
              alignItems: "center",
            }}
          >
            <MailOutlineIcon sx={{ mr: 1 }} />
            yoonmyatphoo.mmr@gmail.com{" "}
            <CopyIcon text="yoonmyatphoo.mmr@gmail.com" />
          </Typography>
          <Box>
            <Bio />
            <AnimatedJavaSkill />
          </Box>
        </Box>
        {/* Right Section */}
        <Box
          sx={{
            display: isSmallScreen ? "none" : "block",
            width: "100%",
            mr: 4,
          }}
        >
          <Box
            sx={{
              flex: 1,
              position: "relative",
              mt: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Box
              component="img"
              src="./yoon.jpg" // Replace with your image URL
              alt="User Image"
              sx={{
                width: "100%",
                maxWidth: "250px",
                borderRadius: "8px",
                zIndex: 1,
                position: "relative",
              }}
            />
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
