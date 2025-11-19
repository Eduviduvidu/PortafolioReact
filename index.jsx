//Load React
import React from "react";
import ReactDOM from "react-dom/client";
//Load Dependencies
import { BrowserRouter } from "react-router-dom";
//Load Configurations
import "./i18n.js";

//Load Main App
import App from "./App";

ReactDOM.createRoot(document.getElementsByTagName("body")[0]).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
