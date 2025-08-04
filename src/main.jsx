import { createRoot } from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@mui/material";

import App from "./App.jsx";
import theme from "./mui/theme.js";

import "./global.css";

const HYGRAPH_URL = import.meta.env.VITE_HYGRAPH_URL;

const client = new ApolloClient({
  uri: HYGRAPH_URL,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);
