import { Gothic_A1, Do_Hyeon } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red, indigo } from "@mui/material/colors";

export const gothicA1 = Gothic_A1({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const doHyeon = Do_Hyeon({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: indigo[400],
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: gothicA1.style.fontFamily,
  },
});

export default theme;
