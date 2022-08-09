import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
setTimeout(() => {
  fetch(`https://api.jikan.moe/v4/random/anime`)
    .then((res) => {
      if (res.status === 200) {
        root.render(
          <React.StrictMode>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </React.StrictMode>
        );
      }
    })
    .catch((err) => window.alert(" you are offline"));
}, 5000);

//
