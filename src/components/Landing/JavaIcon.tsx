import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava } from "@fortawesome/free-brands-svg-icons";

const AnimatedJavaSkill: React.FC = () => {
  return (
    <>
      <Divider></Divider>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          mt: 2,
          ml: 2,
        }}
      >
        {/* Animated Java Icon */}
        <motion.div
          initial={{ y: -5, opacity: 0.3 }}
          animate={{ y: 0.3, opacity: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <FontAwesomeIcon
            icon={faJava}
            style={{
              fontSize: "4rem",
              color: "#FF6F00",
            }}
          />
        </motion.div>

        {/* Description Text */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "text.primary",
          }}
        >
          "I have a solid foundation and experience in Java".
        </Typography>
      </Box>
    </>
  );
};

export default AnimatedJavaSkill;
