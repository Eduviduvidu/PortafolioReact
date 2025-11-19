import { Outlet } from "react-router";
import MainMenu from "@layout/MainMenu";
import MainFooter from "@layout/MainFooter";
import { useLocation } from "react-router-dom";
import { useBodyClass } from "@util/useBodyClass";

export default function MainLayout() {
  const location = useLocation();

  return (
    <>
      <MainMenu />
      <main>
        <Outlet />
      </main>
      <MainFooter />
    </>
  );
}
