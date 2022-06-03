/* eslint-disable react/prop-types */
import React, { createContext, useState, useMemo } from "react";
import { Paper, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
const ColorModelContext = createContext({
  togglemode: () => {},
  mode: "light",
});
function ThemeState({ children }) {
  const [mode, setMode] = useState("dark");
  const colorMode = useMemo(
    () => ({
      togglemode: () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
      mode,
    }),
    [mode]
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          primary: {
            main: "#6AAA64",
            secondary: "#CEB02C",
            third: "#939B9F",
            color: mode === "light" ? "black" : "white",
            bgitem: "#939B9F",
            bg: mode === "light" ? "white" : "#565F7E",
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModelContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Paper>{children}</Paper>
      </ThemeProvider>
    </ColorModelContext.Provider>
  );
}
export { ThemeState, ColorModelContext };
