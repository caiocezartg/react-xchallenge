import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      light: '#5FBCAE',
      main: '#4D9488',
      dark: '#606062',
    },
    background : {
      default: '#A4BBDD'
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
