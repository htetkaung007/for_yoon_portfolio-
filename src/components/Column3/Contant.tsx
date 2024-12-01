import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Divider,
  Chip,
  useTheme,
  useMediaQuery,
  AppBar,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import SocialMediaButtons from "./SocialMedia";

import Education from "../Column1/Education";

const ContactForm: React.FC = () => {
  // State to hold form input values and submission status
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  // Form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // EmailJS template parameters
    const templateParams = {
      user_email: email,
      message: message,
    };

    // Sending email via EmailJS
    emailjs
      .send(
        "service_l44wfxp", // Replace with your EmailJS Service ID
        "template_vnf32g3", // Replace with your EmailJS Template ID
        templateParams,
        "KVOCpX_t2B6EorC2N" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  const theme = useTheme();
  const isLaptopScreen = useMediaQuery("(min-width: 900px)");
  return (
    <AppBar
      position="sticky"
      sx={{
        color: theme.palette.text.primary,
        maxWidth: isLaptopScreen ? "420px" : "100%",
        mt: isLaptopScreen ? 3 : 4,
        padding: "10px",
        border: "1px ",
        borderRadius: "8px",
        boxShadow: "1px 2px 10px #888888",
        bgcolor: theme.palette.primary.main, // Background color from theme
      }}
    >
      <Box sx={{ mb: 3 }}></Box>

      <Typography variant="h5" gutterBottom>
        Contact Us
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          margin="normal"
          variant="filled"
          sx={{
            bgcolor: theme.palette.primary.main,
            color: "white",
          }}
        />
        <TextField
          fullWidth
          label="Your Message"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          margin="normal"
          variant="filled"
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            bgcolor: theme.palette.info.main,
            color: "white",
          }}
        >
          Send
        </Button>
      </form>

      {status && (
        <Typography
          variant="body2"
          sx={{
            mt: 2,
            color: status.includes("successfully") ? "green" : "red",
          }}
        >
          {status}
        </Typography>
      )}
      <Divider sx={{ mt: 2 }}>
        <Chip
          label="SOCIAL CONTACT"
          size="small"
          sx={{
            color: theme.palette.text.primary,
          }}
        />
      </Divider>
      <SocialMediaButtons />
    </AppBar>
  );
};

export default ContactForm;
