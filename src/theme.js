import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#EA285D",
      dark: "#8c0018",
      white: "#fff",
    },
    secondary: {
      main: "#FE8203",
      contrastText: "black",
      white: "#fff",
    },
    error: {
      main: red.A400,
    },
    gradient: {
      primary:
        "transparent linear-gradient(181deg, #176498 0%, #0095EC 100%) 0% 0% no-repeat padding-box",
    },
    background: {
      backgroundLoggin: "#DD062B",
      backgroundContent: "white",
      backgroundHeader: "#E02232",
    },
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
      },
    },
  },
  typography: {
    fontFamily: "Poppins !important",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default theme;
