import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import ButtomCv from "@/components/Cv form Buttom/Buttom";
import Skills from "@/components/Column1/Skills";

const AboutMe: React.FC = () => {
  const theme = useTheme();
  const isLaptopScreen = useMediaQuery("(min-width: 1200px)");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        minWidth: "400px",
        color: theme.palette.text.primary,
        maxWidth: isLaptopScreen ? "1000px" : "80%",

        border: "1px ",
        borderRadius: "8px",
        boxShadow: "1px 2px 10px #888888",
        bgcolor: theme.palette.primary.main, // Background color from theme
      }}
    >
      <Box sx={{ mb: 3, mt: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
          About Me
        </Typography>
        <Typography variant="subtitle1" sx={{ ml: 2, mt: 2 }}>
          I am a final-year student and fresh graduate passionate about backend
          development. With over three years of experience in university
          projects, I specialize in Java, building scalable RESTful APIs using
          Spring Boot and Spring Cloud. My technical skills include working with
          databases like PostgreSQL, MySQL, MongoDB, and Redis, as well as
          integrating tools like RabbitMQ and Kafka. I also have experience
          leading project teams, strengthening my collaboration and
          problem-solving abilities. Hardworking, creative, and adaptable, I am
          eager to contribute to innovative software solutions while growing my
          expertise in the tech industry.
        </Typography>
      </Box>
      <ButtomCv></ButtomCv>

      <Skills />
    </Box>
  );
};

export default AboutMe;
