//Load React
import React from "react";
import ReactDOM from "react-dom/client";
//Load Dependencies
import { BrowserRouter } from "react-router-dom";
//Load Configurations
import "@conf/i18n.conf.js";
//Load App Component
import App from "./App";

ReactDOM.createRoot(document.getElementsByTagName("body")[0]).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
