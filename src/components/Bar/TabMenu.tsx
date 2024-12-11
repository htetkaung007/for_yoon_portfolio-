import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, IconButton, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect } from "react";

const TabMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const theme = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const TopLeftBarItem = [
    { id: 1, name: "About Me", to: "/about_me" },
    { id: 2, name: "Projects", to: "/projects" },
    { id: 3, name: "Contact Me", to: "/contact_me" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth >= 900) {
        setAnchorEl(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box>
      <IconButton onClick={handleClick} size="small">
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "120px",
            marginTop: "10px",
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
