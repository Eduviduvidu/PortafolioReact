import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./i18n.js";
import "@css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementsByTagName("body")[0];

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
