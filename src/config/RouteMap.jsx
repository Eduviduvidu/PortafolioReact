import Home from "@page/Home";
import Contact from "@page/Contact";
import Projects from "@page/Projects";
import Cv from "@page/Cv";
import BackendDashboard from "@page/admin/BackendDashboard";
import BackendLogin from "@page/admin/BackendLogin";

export default {
  "/": { element: <Home />, bodyClass: "basic-page" },
  "/cv": { element: <Cv />, bodyClass: "cv-page" },
  "/contact": { element: <Contact />, bodyClass: "basic-page" },
  "/projects": { element: <Projects />, bodyClass: "basic-page" },
};
export const adminRoutes = {
  "/admin": { element: <BackendDashboard />, bodyClass: "basic-page" },
  "/admin/login": { element: <BackendLogin />, bodyClass: "basic-page" },
};
