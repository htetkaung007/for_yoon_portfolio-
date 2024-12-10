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
import Skills from "../ForAboutME/Skills";
import Bio from "./Bio";
import AnimatedJavaSkill from "./JavaIcon";
import { motion } from "framer-motion";

const LandingPage: React.FC = () => {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar
      sx={{
        position: "sticky",

        minHeight: "400px",
        color: theme.palette.text.primary,

        padding: "10px",
        border: "1px ",
        borderRadius: "8px",
        boxShadow: "1px 2px 10px #888888",
        bgcolor: theme.palette.primary.main, // Background color from theme
      }}
    >
      {/* photo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} // Start hidden and slide up
        animate={{ opacity: 1, y: 0 }} // Animate to visible and default position
        transition={{
          duration: 0.6,
          delay: 0.2, // Stagger animations for each icon
        }}
      >
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
                width: 100,
                height: 100,
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px none ",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
              alt="The house from the offer."
              src="./yoon.jpg"
            ></Box>
          </Toolbar>
        </Box>
      </motion.div>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: isSmallScreen ? -2 : 0,
            }}
          >
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
              +95-9962287200
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
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
              >
                <Bio />
                <AnimatedJavaSkill />
              </motion.div>
            </Box>
          </Box>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
        >
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
                src="./yoon.jpg"
                alt="Yoon Image"
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
        </motion.div>
      </Box>
    </AppBar>
  );
};

export default LandingPage;
