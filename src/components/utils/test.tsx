import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, ListItemText, useTheme } from "@mui/material";
import Link from "next/link";
interface TopLeftBarItem {
  id: number;
  name: string;
  to: string;
}
interface Child {
  TopLeftBarItem: TopLeftBarItem[];
}
const MenuButton = ({ TopLeftBarItem }: Child) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon></MenuIcon>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {" "}
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
                <MenuItem onClick={handleClose}>
                  <ListItemText
                    primary={item.name}
                    sx={{
                      color: theme.palette.text.disabled,
                    }}
                  />
                </MenuItem>
              </Box>
            </Link>
          </Box>
        ))}
      </Menu>
    </div>
  );
};

export default MenuButton;
