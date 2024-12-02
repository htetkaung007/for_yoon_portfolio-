import React, { useState, useEffect, createContext, ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";

import { lightTheme, darkTheme } from "./theme";
import { Box } from "@mui/material";

interface ThemeContextProps {
  toggleTheme: () => void;
  mode: "light" | "dark";
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
}

const ThemeProviderWrapper: React.FC<Props> = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Access localStorage only in the browser
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, []); // Runs only once on the client after component mounts

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  useEffect(() => {
    console.log("Theme mode updated to:", mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderWrapper;
