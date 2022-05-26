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
import { QueryClient, QueryClientProvider } from "react-query";
 
// setting default base url of axios 
axios.defaults.baseURL = "https://screw-inc.herokuapp.com/";

// setting a default auth header to axios 
axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;

// creating query client of react query 
const queryClient = new QueryClient();

// creating theme of the app
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
 
// getting the root of the index.html and injecting our whole app on index html with react
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// thats the end of the application nothing here. be cool be awesome.