import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  ListItemText,
} from "@mui/material";
import { useContext } from "react";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { ThemeContext } from "../ThemeProviderWrapper";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter for route detection

import HomeIcon from "@mui/icons-material/Home";

const TopBar = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const { toggleTheme } = themeContext;
  const theme = useTheme();
  const router = useRouter(); // Get the current route
  const isLaptopScreen = useMediaQuery("(min-width: 1200px)");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const TopLeftBarItem = [
    {
      id: 1,
      name: "About Me",
      to: "/about_me",
    },
    {
      id: 2,
      name: "Portfolio",
      to: "/portfolios",
    },
    {
      id: 3,
      name: "Contact Me",
      to: "/contact_me",
    },
  ];

  return (
    <>
      <AppBar
        color="primary"
        sx={{
          maxWidth: isLaptopScreen ? "1000px" : "80%",
          position: "sticky",
          minWidth: "400px",
          color: theme.palette.text.primary,
          mb: 1,
          padding: "10px",
          border: "1px ",
          borderRadius: "8px",
          boxShadow: "1px 2px 10px #888888",
          bgcolor: theme.palette.primary.main,
        }}
      >
        <Toolbar sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              mr: 4,
              alignItems: "center",
            }}
          >
            {/* Home Link */}
            <Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: isSmallScreen ? "none" : "block",
                }}
              >
                <Link
                  href={"/"}
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: theme.palette.text.primary,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color:
                        router.pathname === "/"
                          ? theme.palette.text.secondary
                          : theme.palette.text.primary,
                    }}
                  >
                    <HomeIcon sx={{ fontSize: 35 }} />
                    <Typography
                      sx={{
                        alignItems: "center",
                        fontWeight: "bold",
                        fontSize: 17,
                      }}
                    >
                      {"Home"}
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </Box>

            {/* Other Links */}
            <Box sx={{ display: "flex" }}>
              {TopLeftBarItem.map((item) => (
                <Box key={item.id} sx={{ mr: 3 }}>
                  <Link
                    href={item.to}
                    style={{ textDecoration: "none", cursor: "pointer" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        /* backgroundColor:
                          router.pathname === item.to
                           ? theme.palette.text.secondary
                          : theme.palette.text.primary, */
                        padding: "8px 12px",
                        borderRadius: "4px",
                      }}
                    >
                      <ListItemText
                        primary={item.name}
                        sx={{
                          color:
                            router.pathname === item.to
                              ? theme.palette.text.secondary
                              : theme.palette.text.primary,
                        }}
                      />
                    </Box>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Toggle Theme Icon */}
          <NightsStayIcon onClick={toggleTheme} sx={{ cursor: "pointer" }} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopBar;
