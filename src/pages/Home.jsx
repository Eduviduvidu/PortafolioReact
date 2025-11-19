import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <>
      <div className="container">
        <div id="bienvenida" className="row my-5">
          <div className="col">
            <h1>Bienvenido!</h1>
            <p>{t("welcome-text-1")}</p>
            <p>{t("welcome-text-2")}</p>
            <p>{t("welcome-text-3")}</p>
          </div>
        </div>

        <div id="projects-row" className="row my-5">
          
        </div>

        <div id="formContact" className="row my-5">
          <div className="col">
            <h2>{t("contact me")}</h2>
            
          </div>
        </div>
      </div>
    </>
  );
}
