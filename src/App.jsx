import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "./theme";
import Home from "./pages/Home";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Reset />
          <Home />
        </ThemeProvider>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
