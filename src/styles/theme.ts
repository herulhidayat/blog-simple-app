"use client";
import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: "var(--font-poppins)",
  },
  palette: {
    primary: {
      main: "#E6AB09",
    },
    secondary: {
      main: "#FFD86C",
    },
  },
});

export default theme;
