import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Box, Button, Divider, useMediaQuery, useTheme } from "@mui/material";
const ButtomCv = () => {
  const theme = useTheme();
  const cvDownloadLink =
    "https://drive.google.com/uc?export=download&id=1OFyYj8XlDT36Ind2sDqMZfMBf9CGxbvB";
  const cvViewLink =
    "https://drive.google.com/file/d/1OFyYj8XlDT36Ind2sDqMZfMBf9CGxbvB/view?usp=drive_link/view?usp=sharing";
  const isLaptopScreen = useMediaQuery("(min-width: 1200px)");
  return (
    <>
      <Divider textAlign="right"></Divider>
      <Box>
        <Box
          sx={{
            display: "flex",
            maxWidth: isLaptopScreen ? "1000px" : "80%",
            gap: 2,
            alignItems: "center",
            justifyContent: "space-around",
            mt: 2,
          }}
        >
          {/* View CV Button */}
          <Button
            variant="outlined"
            href={cvViewLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              border: 1,
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              textTransform: "none",
              padding: "8px 16px",
              bgcolor: theme.palette.info.main,
            }}
          >
            <FontAwesomeIcon icon={faEye} style={{ marginRight: 8 }} />
            View CV
          </Button>
          {/* Download CV Button with Animation */}
          <motion.div
            animate={{
              y: [0, -4, 0], // Jump animation
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Button
              color="info"
              variant="contained"
              href={cvDownloadLink}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
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
