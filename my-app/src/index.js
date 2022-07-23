import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
setTimeout(() => {
  fetch(`https://api.jikan.moe/v4/random/anime`)
    .then((res) => {
      if (res.status === 200) {
        root.render(
          <React.StrictMode>
            <App />
          </React.StrictMode>
        );
      }
    })
    .catch((err) => window.alert(" you are offline"));
}, 3000);

//
