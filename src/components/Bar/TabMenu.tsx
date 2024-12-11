import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import router from "next/router";
import { Box, IconButton, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect } from "react";

const TabMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setAnchorEl(null);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

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
  const theme = useTheme();
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <IconButton
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
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
  );
};
export default TabMenu;
