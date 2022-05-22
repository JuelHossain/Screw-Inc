import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from 'styled-components';
import axios from 'axios';

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#2b44c5",
    },
    secondary: {
      main: "#f50057",
    },
    warning: {
      main: "#f57c00",
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    h1: {
      fontSize: "5rem",
      fontWeight: 300,
    },
    fontWeightBold: 700,
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
});

 

axios.defaults.baseURL = "http://localhost:5000/";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);