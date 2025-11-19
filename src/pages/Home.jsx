import { useTranslation } from "react-i18next";
import Page from "@layout/Page";
import Projects from "@component/Projects";

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <>
      <Page>
        <div id="bienvenida" className="row my-5">
          <div className="col">
            <h1>{t("Welcome!")}</h1>
            <p>{t("welcome-text-1")}</p>
            <p>{t("welcome-text-2")}</p>
            <p>{t("welcome-text-3")}</p>
          </div>
        </div>

        <div id="projects-row" className="row my-5">
          <Projects />
        </div>

        <div id="formContact" className="row my-5">
          <div className="col">
            <h2>{t("contact me")}</h2>
          </div>
        </div>
      </Page>
    </>
  );
}
