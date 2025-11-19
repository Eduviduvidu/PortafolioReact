import { Routes, Route } from "react-router";
import routes from "@conf/RouteMap";
import MainLayout from "@layout/MainLayout";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "@css/global.css";
// import "@css/styles.css";


export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          {Object.entries(routes).map(([path, element]) => (
            <Route
              key={path}
              index={element.index}
              path={path}
              element={
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  {element.element}
                </motion.div>
              }
            />
          ))}
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
