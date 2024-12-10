import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Box, Button, Divider, useMediaQuery, useTheme } from "@mui/material";
const ButtomCv = () => {
  const theme = useTheme();
  const cvDownloadLink =
    "https://drive.google.com/uc?export=download&id=1Seruv0FT3fUvxLEGgj3FNB_L__WsHF_Q";
  const cvViewLink =
    "https://drive.google.com/file/d/1Seruv0FT3fUvxLEGgj3FNB_L__WsHF_Q/view?usp=drive_link/view?usp=sharing";

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Divider textAlign="right"></Divider>
      <Box>
        <Box
          sx={{
            display: "flex",

            alignItems: "center",

            justifyContent: "space-evenly",
            mt: 2,
            mb: 3,
          }}
        >
          {/* View CV Button */}
          <Button
            variant="contained"
            href={cvViewLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              bgcolor: theme.palette.secondary.main,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              textTransform: "none",
              padding: "8px 16px",
            }}
          >
            <FontAwesomeIcon icon={faEye} style={{ marginRight: 8 }} />
            View CV
          </Button>
          {/* Download CV Button with Animation */}
          <motion.div
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Button
              variant="contained"
              href={cvDownloadLink}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "white",
                bgcolor: theme.palette.secondary.main,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                textTransform: "none",
                padding: "8px 16px",
              }}
            >
              <FontAwesomeIcon icon={faDownload} style={{ marginRight: 8 }} />
              Download CV
            </Button>
          </motion.div>
        </Box>
      </Box>
    </>
  );
};
export default ButtomCv;
