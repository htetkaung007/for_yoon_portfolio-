import { Box } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const MovingSquare: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: [0, 20],
      y: [0, 20, 0],
      rotate: [0, 360],
      transition: {
        x: { duration: 10, repeat: Infinity, ease: "anticipate" },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 10, repeat: Infinity, ease: "linear" },
      },
    });
  }, [controls]);

  return (
    <Box>
      {/* Shadow Trail */}
      <motion.div
        animate={controls}
        style={{
          position: "absolute",
          width: "30px",
          height: "30px",
          backgroundColor: "rgba(0, 0, 255, 0.5)",
          borderRadius: "4px",
          filter: "blur(10px)",
        }}
      />

      {/* Main Rolling Square */}
      <motion.div
        animate={controls}
        style={{
          position: "absolute",
          width: "20px",
          height: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "4px",
        }}
      />
    </Box>
  );
};

export default MovingSquare;
