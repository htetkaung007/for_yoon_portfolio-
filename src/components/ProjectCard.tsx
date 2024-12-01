import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  useTheme,
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
  return (
    <motion.div
      whileHover={{
        scale: 1.05, // Scale the card up on hover
        opacity: 0.9, // Slightly decrease opacity
      }}
      whileTap={{
        scale: 0.95, // Scale down when clicked
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      style={{ margin: "10px", width: "250px", height: "auto" }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt={title} height="140" image={imageUrl} />
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <Link
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
              width: "80%",
              mr: 2,
              marginBottom: "10px",
              backgroundColor: theme.palette.info.main,
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
