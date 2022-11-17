import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import App from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <QueryClientProvider client={client}>
      <GlobalStyles />
      <App />
    </QueryClientProvider>
  </>
);
