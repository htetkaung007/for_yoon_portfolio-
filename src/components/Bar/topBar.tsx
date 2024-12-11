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
import { ThemeContext } from "../utils/ThemeProviderWrapper";
import Link from "next/link";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";

interface Props {
  children?: React.ReactNode;
}

const TopBar = ({ children }: Props) => {
  const theme = useTheme();
  const router = useRouter();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const themeContext = useContext(ThemeContext);

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
              width: "90%",
            }}
          >
            <Box sx={{ display: "flex" }}>
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

            <NightsStayIcon
              onClick={toggleTheme}
              sx={{ cursor: "pointer", ml: isSmallScreen ? "4px" : "50px" }}
            />
          </Box>
        </Toolbar>
        {children}
      </AppBar>
    </>
  );
};

export default TopBar;
