import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import {
  faJava,
  faJs,
  faDocker,
  faAws,
  faGitAlt,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { lightTheme } from "../utils/theme";
import { motion } from "framer-motion";
import { Chip, Divider } from "@mui/material";

const Skills = () => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const skills = [
    { icon: faJava, color: "#5382A1", label: "Java" },
    { icon: faPython, color: "#306998", label: "Python" },

    { icon: faDatabase, color: "#F39C12", label: "MySQL" },
    { icon: faDocker, color: "#0db7ed", label: "Docker" },
    { icon: faAws, color: "#FF9900", label: "AWS" },
    { icon: faGitAlt, color: "#F05032", label: "Git" },
    { icon: faDatabase, color: "#0064a5", label: "PostgreSQL" },
    { icon: faJs, color: "#F7DF1E", label: "JavaScript" },
  ];

  const visibleIconsCount = isSmallScreen ? 3 : isLaptopScreen ? 6 : 5;

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={lightTheme}>
      <Divider>
        <Chip
          label="I've learned these skills"
          size="medium"
          sx={{ color: theme.palette.text.primary }}
        />
      </Divider>
      <Box
        sx={{
          mt: 2,
          width: "100%",
          display: "flex",
          gap: 4,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          padding: 1,
          mb: 4,
        }}
      >
        {/* Animate visible icons */}
        {skills.slice(0, visibleIconsCount).map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <FontAwesomeIcon
                icon={skill.icon}
                color={skill.color}
                size="2x"
              />
              <Box
                sx={{
                  marginTop: 1,
                  fontSize: "0.8rem",
                  color: theme.palette.text.primary,
                }}
              >
                {skill.label}
              </Box>
            </Box>
          </motion.div>
        ))}

        {/* Animate "More" Button */}
        {skills.length > visibleIconsCount && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              onClick={handleClickOpen}
              variant="contained"
              color="primary"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                textTransform: "none",
              }}
            >
              <FontAwesomeIcon icon={faEllipsisV} />
              More
            </Button>
          </motion.div>
        )}

        {/* Animate dialog content */}
        <Dialog open={open} onClose={handleClose}>
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {skills.slice(visibleIconsCount).map((skill, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <FontAwesomeIcon
                    icon={skill.icon}
                    color={skill.color}
                    size="2x"
                  />
                  <Box
                    sx={{
                      marginTop: 1,
                      fontSize: "0.9rem",
                    }}
                  >
                    {skill.label}
                  </Box>
                </Box>
              </motion.div>
            ))}
          </DialogContent>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
};

export default Skills;
