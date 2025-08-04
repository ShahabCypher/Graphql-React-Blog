import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

const HYGRAPH_URL = import.meta.env.VITE_HYGRAPH_URL;

const client = new ApolloClient({
  uri: HYGRAPH_URL,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
