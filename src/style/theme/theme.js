import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 370,
      md: 900,
      lg: 1080,
      xl: 1336,
    },
  },
  palette: {
    background: {
      default: "#f5f7fb",
    },
  },
});

export default theme;
