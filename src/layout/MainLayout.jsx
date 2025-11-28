import { Outlet } from "react-router";
import MainMenu from "@layout/MainMenu";
import MainFooter from "@layout/MainFooter";

export default function MainLayout() {
  const themeColor = localStorage.getItem("themeColor")
    ? localStorage.getItem("themeColor")
    : "light";

  return (
    <div id="theme" class={themeColor + "-theme"}>
      <MainMenu />
      <div className="page-grid">
        <main>
          <Outlet />
        </main>
        <MainFooter />
      </div>
    </div>
  );
}
