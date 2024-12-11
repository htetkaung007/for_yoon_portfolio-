import Skills from "@/components/ForAboutME/Skills";
import ButtomCv from "@/components/ForAboutME/Buttom";
import {
  AppBar,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { motion } from "framer-motion";

const AboutMe: React.FC = () => {
  const theme = useTheme();
  const isLaptopScreen = useMediaQuery("(min-width: 1200px)");

  return (
    <AppBar
      sx={{
        position: "sticky",

        color: theme.palette.text.primary,
        maxWidth: isLaptopScreen ? "1000px" : "100%",
        padding: "10px",
        border: "1px ",
        borderRadius: "8px",
        boxShadow: "1px 2px 10px #888888",
        bgcolor: theme.palette.primary.main, // Background color from theme
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
        >
          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
              About Me
            </Typography>
            <Typography>
              I am a final-year student and fresh graduate passionate about
              backend development. With over three years of experience in
              university projects, I specialize in Java, building scalable
              RESTful APIs using Spring Boot and Spring Cloud. My technical
              skills include working with databases like PostgreSQL, MySQL,
              MongoDB, and Redis, as well as integrating tools like RabbitMQ and
              Kafka. I also have experience leading project teams, strengthening
              my collaboration and problem-solving abilities. Hardworking,
              creative, and adaptable, I am eager to contribute to innovative
              software solutions while growing my expertise in the tech
              industry.
            </Typography>
          </Box>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
          >
            <ButtomCv></ButtomCv>
          </motion.div>
          <Skills />
        </motion.div>
      </Box>
    </AppBar>
  );
};

export default AboutMe;
