import { useTranslation } from "react-i18next";
import Page from "@layout/Page";

//Components
import Projects from "@component/Projects";
import ContactSection from "@component/ContactSection";
import HomeBanerText from "@component/HomeBanerText";

//Assets
import reactIcon from "@img/React-icon.svg";
import underConstruction from "@img/underConstruction.jpg";
import motoIcon from "@img/bannerMotoHome.jpg";
import Card from "../components/Card";
export default function Home() {
  const { t } = useTranslation("home");

  return (
    <Page>
      <div id="bienvenida" className="row my-5">
        <div className="col">
          <h1>{t("Welcome!")}</h1>
          <div className="row my-5">
            <div className="col-md-9">
              <Card>
                {/* Laravel & React Info */}
                <HomeBanerText
                  image={reactIcon}
                  text={t("welcome-text-1")}
                  textSize={7}
                />
              </Card>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md-3"></div>
            <div className="col-md-9">
              <Card>
                {/* Laravel & React Info */}
                <HomeBanerText
                  image={underConstruction}
                  text={t("welcome-text-2")}
                  imgClassName="rounded-circle"
                  textSize={7}
                />
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
              <Card>
                {/* Laravel & React Info */}
                <HomeBanerText
                  image={motoIcon}
                  text={t("welcome-text-3")}
                  imgClassName="rounded-circle"
                  textSize={7}
                />
              </Card>
            </div>
          </div>
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
  );
}
