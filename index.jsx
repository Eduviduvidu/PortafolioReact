import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import routes from "@conf/RouteMap";
import MainLayout from "@layout/MainLayout";

import "./i18n.js";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementsByTagName("body")[0];

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {Object.entries(routes).map(([path, element]) => (
            <Route
              key={path}
              index={element.index}
              path={path}
              element={element.element}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
