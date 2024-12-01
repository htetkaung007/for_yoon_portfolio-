import React from "react";
import {
  AppBar,
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ProjectCard from "@/components/ProjectCard";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
const projects = [
  {
    title: "Project 1",
    imageUrl: "/path/to/project1-image.jpg", // Replace with your actual image URL
    link: "https://example.com", // Replace with your actual project link
    description: "A brief description of Project 1.",
  },
  {
    title: "Project 2",
    imageUrl: "/path/to/project2-image.jpg",
    link: "https://example.com",
    description: "A brief description of Project 2.",
  },
  {
    title: "Project 3",
    imageUrl: "/path/to/project3-image.jpg",
    link: "https://example.com",
    description: "A brief description of Project 3.",
  },
];

const Portfolio: React.FC = () => {
  const theme = useTheme();
  const isLaptopScreen = useMediaQuery("(min-width: 1200px)");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar
      position="sticky"
      sx={{
        color: theme.palette.text.primary,
        minWidth: "400px",
        maxWidth: isLaptopScreen ? "1000px" : "80%",
        padding: "10px",
        border: "1px ",
        borderRadius: "8px",
        boxShadow: "1px 2px 10px #888888",
        bgcolor: theme.palette.primary.main, // Background color from theme
      }}
    >
      <Container sx={{ marginTop: "20px" }}>
        <Box
          sx={{
            display: "flex",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FolderOpenIcon sx={{ fontSize: 50, mr: 3 }} />
          <Typography variant="h5">My Portfolio</Typography>
        </Box>

        {/* Using Flexbox for Layout */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",

            justifyContent: "center",
            gap: "20px",
            padding: "20px",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Container>
    </AppBar>
  );
};

export default Portfolio;
