import React from "react";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "./theme";
import Home from "./pages/Home";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Reset />
        <Home />
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
