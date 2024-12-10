import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

// Define the project interface to hold details for each project
interface ProjectCardProps {
  title: string;
  imageUrl: string;
  link: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imageUrl,
  link,
  description,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <motion.div
      whileTap={{
        scale: 0.95, // Scale down when clicked
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      style={{
        width: isSmallScreen ? "100%" : "80%",
        height: "auto",
      }}
    >
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          alt={/* title */ "Projects"}
          sx={{ maxWidth: "70%", maxHeight: "220px" }}
          image={imageUrl}
        />
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.primary }}
          >
            {description}
          </Typography>
        </CardContent>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={link}
          style={{
            textDecoration: "none",
            cursor: "pointer",
            color: theme.palette.text.primary,
          }}
        >
          <Button
            size="small"
            sx={{
              display: "block",
              width: "fulllwidth",
              mt: 2,
              marginBottom: "10px",
              backgroundColor: theme.palette.secondary.main,
              color: "white",
              "&:hover": {
                backgroundColor: "#1565C0",
              },
            }}
          >
            View Project
          </Button>
        </Link>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
