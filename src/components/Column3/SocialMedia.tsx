import React from "react";
import { Box, IconButton, Tooltip, useTheme } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

const SocialMediaButtons: React.FC = () => {
  const theme = useTheme(); // Access the globally provided theme

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 1,
        p: 2,
        borderRadius: 2,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      {/* Facebook Button */}
      <Tooltip title="Facebook">
        <IconButton
          sx={{
            color: theme.palette.info.light, // Use the `light` color from theme
            mx: 2,
            borderRadius: "50%",
            border: "2px solid ",
            borderColor: theme.palette.info.light,
            padding: "8px",
            transition: "transform 0.3s ease",
            "&:hover": {
              color: "#1877F2",
              transform: "scale(1.2)",
              borderColor: "#3f51b5",
            },
          }}
          onClick={() =>
            window.open(
              "https://www.facebook.com/smoo.chie.71?mibextid=ZbWKwL",
              "_blank"
            )
          }
        >
          <FacebookIcon />
        </IconButton>
      </Tooltip>

      {/* LinkedIn Button */}
      <Tooltip title="LinkedIn">
        <IconButton
          sx={{
            color: theme.palette.info.light,
            mx: 2,
            borderRadius: "50%",
            border: "2px solid ",
            borderColor: theme.palette.info.light,
            padding: "8px",
            transition: "transform 0.3s ease",
            "&:hover": {
              color: "#0A66C2",
              transform: "scale(1.2)",
              borderColor: "#3f51b5",
            },
          }}
          onClick={() =>
            window.open(
              "https://linkedin.com/in/yoon-myat-phoo-9b32531b7",
              "_blank"
            )
          }
        >
          <LinkedInIcon />
        </IconButton>
      </Tooltip>

      {/* WhatsApp Button */}
      <Tooltip title="WhatsApp">
        <IconButton
          sx={{
            color: theme.palette.info.light,
            mx: 2,
            borderRadius: "50%",
            border: "2px solid ",
            borderColor: theme.palette.info.light,
            padding: "8px",
            transition: "transform 0.3s ease",
            "&:hover": {
              color: "#25D366",
              transform: "scale(1.2)",
              borderColor: "#25D366",
            },
          }}
          onClick={() => window.open("https://wa.me/959962287200", "_blank")}
        >
          <WhatsAppIcon />
        </IconButton>
      </Tooltip>

      {/* Telegram Button */}
      <Tooltip title="Telegram">
        <IconButton
          sx={{
            color: theme.palette.info.light,
            mx: 2,
            borderRadius: "50%",
            border: "2px solid ",
            borderColor: theme.palette.info.light,
            padding: "8px",
            transition: "transform 0.3s ease",
            "&:hover": {
              color: "#0088cc",
              transform: "scale(1.2)",
              borderColor: "#3f51b5",
            },
          }}
          onClick={() => window.open("https://t.me/Yoon_AmaraPhoo", "_blank")}
        >
          <TelegramIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default SocialMediaButtons;
