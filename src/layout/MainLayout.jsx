import { Outlet } from "react-router";
import MainMenu from "@layout/MainMenu";
import MainFooter from "@layout/MainFooter";

export default function MainLayout() {
  return (
    <>
      <MainMenu />
      <div class="page-grid">
        <main>
          <Outlet />
        </main>
        <MainFooter />
      </div>
    </>
  );
}
