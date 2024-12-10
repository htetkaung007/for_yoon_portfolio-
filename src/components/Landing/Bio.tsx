import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { Box, ListItem, ListItemText, useMediaQuery } from "@mui/material";
import { List } from "@mui/material";

import { lightTheme } from "../utils/theme";
const Bio = () => {
  const isLaptopScreen = useMediaQuery("(min-width: 900px)");

  const theme = useTheme();
  const items = [
    "I enjoy working in teams to achieve shared goals and deliver outstanding results.",
    "Junior Back-end Developer",
  ];
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Divider textAlign="left">
          <Chip
            label="BIO"
            size="medium"
            sx={{ color: theme.palette.text.primary }}
          />
        </Divider>
        <Box
          sx={{
            ml: 2,
          }}
        >
          <List>
            {items.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemText
                  primary={`• ${item}`}
                  sx={{
                    maxWidth: isLaptopScreen ? "400px" : "100%",
                    width: "100%",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </ThemeProvider>
    </>
  );
};
export default Bio;
