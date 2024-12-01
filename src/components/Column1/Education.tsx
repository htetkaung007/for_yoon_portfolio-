import {
  Box,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { motion } from "framer-motion";

const data = [
  {
    title: "Education",
    kno: "Bechelor of Computer Science (Fourth Year) Dec 2019 - Sep 2025 University of Computer Studies, Taunggyi",
  },
  {
    title: "Languages",
    kno: ["English", "Burmese"],
  },
  {
    title: "Certificates",
    kno: [
      "Red Hat Certified System Administrator | (RHCSA)",
      "Red Hat Certified System Administrator || (RHCSA)",
      "Red Hat Certified System Administrator ||| (RHCSA)",
    ],
  },
];

const Education = () => {
  const isLaptopScreen = useMediaQuery("(min-width: 900px)");

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 20 }, // Start state
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 }, // Stagger animations
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 }, // Start state for items
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // End state
  };
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: 2,
        ml: 1,
        mr: 1,
        maxWidth: isLaptopScreen ? "420px" : "100%",
        maxHeight: "250px", // Limit height for scrolling
        overflowY: "auto", // Enable vertical scrolling
        border: "1px solid #ccc", // Optional: Border for better visibility
        borderColor: theme.palette.text.primary,
        borderRadius: 2,
        p: 1, // Padding around the content
        scrollbarWidth: "thin",
        color: theme.palette.text.primary,
      }}
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {data.map((item, index) => (
        <Box
          key={index}
          sx={{ mb: 2 }}
          component={motion.div}
          variants={itemVariants} // Apply animation to individual items
        >
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            {item.title}
          </Typography>

          {Array.isArray(item.kno) ? (
            item.kno.map((line, idx) => (
              <Typography key={idx} variant="body1" sx={{ ml: 2 }}>
                - {line}
              </Typography>
            ))
          ) : (
            <Typography variant="body1">{item.kno}</Typography>
          )}
          {/* Divider after each item except the last one */}
          {index !== data.length - 1 && <Divider sx={{ mt: 2 }} />}
        </Box>
      ))}
    </Box>
  );
};

export default Education;
