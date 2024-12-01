// pages/landing-page.js
import { Box, Typography, Button } from "@mui/material";
import Layout from "./Bar/Layout";

export default function LandingPage() {
  return (
    <Box
      sx={{
        backgroundColor: "#FFA500", // Orange background
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          width: "100%",
          maxWidth: 900,
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: 3,
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            backgroundColor: "#FFEBCD",
            padding: 2,
            textAlign: "center",
          }}
        >
          <Layout></Layout>
        </Box>

        {/* Content Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Responsive layout
            padding: 4,
          }}
        >
          {/* Left Section */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingRight: { md: 4 },
              marginBottom: { xs: 4, md: 0 },
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              THE SHADES OF SPRING
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              New collection here
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: 3 }}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam
              nonummy.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF4500",
                color: "#fff",
                ":hover": { backgroundColor: "#FF6347" },
              }}
            >
              Shop Now
            </Button>
          </Box>

          {/* Right Section */}
          <Box
            sx={{
              flex: 1,
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src="./yoon.jpg" // Replace with your image URL
              alt="User Image"
              sx={{
                width: "100%",
                maxWidth: "250px",
                borderRadius: "8px",
                zIndex: 1,
                position: "relative",
              }}
            />
            {/* Price Section */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
