import { useTranslation } from "react-i18next";
import Page from "@layout/Page";

//Components
import Projects from "@component/Projects";
import ContactSection from "@component/ContactSection";
import HomeBanerText from "@component/HomeBanerText";

//Assets
import reactIcon from "@img/React-icon.svg";
import motoIcon from "@img/bannerMotoHome.jpg";
export default function Home() {
  const { t } = useTranslation("home");

  return (
    <>
      <Page>
        <div id="bienvenida" className="row my-5">
          <div className="col">
            <h1>{t("Welcome!")}</h1>
            {/* Laravel & React Info */}
            <HomeBanerText
              image={reactIcon}
              text={t("welcome-text-1")}
              textSize={9}
            />
            <HomeBanerText
              image={reactIcon}
              text={t("welcome-text-2")}
              textSize={9}
              imgOnRight={true}
              />
            <HomeBanerText
              image={motoIcon}
              text={t("welcome-text-3")}
              imgClassName = "rounded-circle"
              textSize={9}
            />
          </div>
        </div>

        <div id="projects-row" className="row my-5">
          <Projects />
        </div>

        <div id="formContact" className="row my-5">
          <div className="col">
            <h2>{t("contact me")}</h2>
            <ContactSection />
          </div>
        </div>
      </Page>
    </>
  );
}
