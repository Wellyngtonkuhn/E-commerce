import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import App from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";

const client = new QueryClient();

const stripePromise = loadStripe(
  "pk_test_51MRzSNEbu03lGNpWijTe8raSGZb8iRsPxtsgkiWM2hOCGz00sDLrDhcqqPXZd8LFicT03zmFKi4FsOuMKHRC2Xz6006xudfQCO"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <QueryClientProvider client={client}>
      <GlobalStyles />
      <Provider store={store}>
        <Elements stripe={stripePromise}>
          <Suspense>
            <App />
          </Suspense>
        </Elements>
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </>
);
