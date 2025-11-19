import Home from "@page/Home";
import Contact from "@page/Contact";
import Projects from "@page/Projects";
import Cv from "@page/Cv";

const routes = {
  "/": { element: <Home />, bodyClass: "basic-page"},
  "/cv": { element: <Cv />, bodyClass: "cv-page"  },
  "/contact": { element: <Contact />, bodyClass: "basic-page" },
  "/projects": { element: <Projects />, bodyClass: "basic-page" },
};

export default routes;
