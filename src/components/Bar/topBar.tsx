import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  ListItemText,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { ThemeContext } from "../utils/ThemeProviderWrapper";
import Link from "next/link";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";

interface Props {
  children?: React.ReactNode;
}

const TopBar = ({ children }: Props) => {
  const theme = useTheme();
  const router = useRouter();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const themeContext = useContext(ThemeContext);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setMenuAnchorEl(null);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (!themeContext) return null;

  const { toggleTheme } = themeContext;

  const TopLeftBarItem = [
    {
      id: 1,
      name: "About Me",
      to: "/about_me",
    },
    {
      id: 2,
      name: "Projects",
      to: "/projects",
    },
    {
      id: 3,
      name: "Contact Me",
      to: "/contact_me",
    },
  ];

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <>
      <AppBar
        color="primary"
        sx={{
          position: "sticky",

          color: theme.palette.text.primary,
          mt: 6,
          mb: 1,
          padding: "10px",
          border: "1px ",
          borderRadius: "8px",
          boxShadow: "1px 2px 10px #888888",
          bgcolor: theme.palette.success.main,
        }}
      >
        <Toolbar
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
                  alignItems: "center",
                  color:
                    router.pathname === "/"
                      ? theme.palette.text.disabled
                      : theme.palette.text.secondary,
                }}
              >
                <HomeIcon sx={{ fontSize: 33 }} />
                <Typography
                  sx={{
                    display: isMediumScreen ? "none" : "block",
                    fontWeight: "bold",
                    fontSize: 19,
                  }}
                >
                  {"Home"}
                </Typography>
              </Box>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: isSmallScreen ? "space-between" : "flex-end",
              width: isSmallScreen ? "25%" : "90%",
            }}
          >
            {/* Toggle Menu: Hamburger for Small Screens */}
            {isSmallScreen ? (
              <Box sx={{ display: "flex" }}>
                <IconButton
                  color="inherit"
                  onClick={handleMenuOpen}
                  aria-controls="hamburger-menu"
                  aria-haspopup="true"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="hamburger-menu"
                  anchorEl={menuAnchorEl}
                  open={Boolean(menuAnchorEl)}
                  onClose={handleMenuClose}
                  transformOrigin={{ vertical: "top", horizontal: "center" }}
                  sx={{
                    "& .MuiMenu-paper": {
                      backgroundColor: theme.palette.success.main,
                      color: theme.palette.text.primary,
                    },
                  }}
                >
                  {TopLeftBarItem.map((item) => (
                    <MenuItem key={item.id} onClick={handleMenuClose}>
                      <Link
                        href={item.to}
                        style={{
                          textDecoration: "none",
                          color:
                            router.pathname === item.to
                              ? theme.palette.text.disabled
                              : theme.palette.text.secondary,
                        }}
                      >
                        {item.name}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              /* Normal Navigation for Larger Screens */
              <Box sx={{ display: "flex", mr: "50px" }}>
                {TopLeftBarItem.map((item) => (
                  <Box key={item.id}>
                    <Link
                      href={item.to}
                      style={{ textDecoration: "none", cursor: "pointer" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "18px",
                        }}
                      >
                        <ListItemText
                          primary={item.name}
                          sx={{
                            color:
                              router.pathname === item.to
                                ? theme.palette.text.disabled
                                : theme.palette.text.secondary,
                          }}
                        />
                      </Box>
                    </Link>
                  </Box>
                ))}
              </Box>
            )}

            {/* Theme Toggle Icon */}
            <NightsStayIcon onClick={toggleTheme} sx={{ cursor: "pointer" }} />
          </Box>
        </Toolbar>
        {children}
      </AppBar>
    </>
  );
};

export default TopBar;
