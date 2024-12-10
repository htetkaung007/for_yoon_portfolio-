import React from "react";
import {
  AppBar,
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ProjectCard from "@/components/utils/ProjectCard";

import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
const projects = [
  {
    title:
      "Project Title: Unitversity Credit System [December 2021 - March2022]",
    imageUrl: "/bloodSystem.jpg", // Replace with your actual image URL
    link: "https://github.com/yoonmyatphoo-mmr/Credit-Management-System", // Replace with your actual project link
    description:
      "Description :  Led the development of a web-based School Credit System tostreamline student affairs processes and empower university studentsto manage their academic credits.As the backend developer, utilized Java, Spring MVC, Spring boot,Spring Data JPA, and Spring Security for secure user authentication.Designed and implemented the MySQL database schema. IntegratedBootstrap for a responsive frontend UI.Overcame challenges in data integration and security throughencryption and robust authentication measures.",
  },
  {
    title: "Project Title: Online Voting System [November 2022 - May 2023]",
    imageUrl: "/uni.jpg",
    link: "https://github.com/yoonmyatphoo-mmr/Online-Voting",
    description:
      "Description :  Developed and implemented an Online Voting System tailored for university students, leveraging Spring Boot, Spring Data JPA, Tailwind, JavaScript, and MySQL. The system facilitated the democratic selection of university Queens and Kings through a secure and user-friendly online platform. Admin functionality included the seamless upload of Queen and King selections for voting, ensuring an efficient and transparent process.",
  },
  {
    title: "Project Title : Blood Bank System [June 2022 - August 2022]",
    imageUrl: "/onlineVoting.jpg",
    link: "https://github.com/yoonmyatphoo-mmr/Blood_Bank_Management_System",
    description:
      "Description :  Led a project connecting those in urgent need of blood donation s  with willing donors to save lives. Developed a user-friendly syste m  enabling users to easily search for donors by blood group an d  location. Implemented a dual-role system for Admin and Users ,  ensuring strict privacy. Established secure logging for Patients an d  Donors, allowing them to track their processes with restricte d  access. Admin-exclusive visibility ensured confidentiality an d  streamlined data management.",
  },
];

const Portfolio: React.FC = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="sticky"
      sx={{
        color: theme.palette.text.primary,

        padding: "10px",
        border: "1px ",
        borderRadius: "8px",
        boxShadow: "1px 2px 10px #888888",
        bgcolor: theme.palette.primary.main,
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
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://github.com/yoonmyatphoo-mmr"}
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: theme.palette.text.primary,
              display: "flex",
              alignItems: "center",
            }}
          >
            <GitHubIcon sx={{ fontSize: 50, mr: 1, mb: 2 }} />
            <Typography variant="h5">My GitHub</Typography>
          </Link>
        </Box>

        {/* Using Flexbox for Layout */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",

            alignItems: "center",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Box>
      </Container>
    </AppBar>
  );
};

export default Portfolio;
