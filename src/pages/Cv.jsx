//Load Dependencies
import { useTranslation } from "react-i18next";

//Load Layout Components
import Page from "@layout/Page";
import JobText from "@component/JobText";
import EducationText from "@component/EducationText";
import Title from "@component/Title";
import AbsolutButton from "@component/AbsolutButton";
import CVAside from "@layout/CVAside";

//Load assets and styles
import "@css/cv.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Cv() {
  const { i18n, t } = useTranslation(["cv", "cvData"]);
  const cvData = i18n.options.resources[i18n.language].cvData;

  // Funció encarregada de mostrar/ocultar la barra lateral de la pàgina.
  function toggleAside() {
    const body = document.getElementsByTagName("body")[0];
    const aside = document.getElementById("cv-extra-content");
    const toogglerBtn = document.getElementById("mv-extra-content-toggler");

    aside.classList.toggle("visible");
    if (aside.classList.contains("visible")) {
      body.style.overflow = "hidden";
      toogglerBtn.style.transform = "rotate(45deg)";
    } else {
      body.style.overflow = "visible";
      toogglerBtn.style.transform = "rotate(0deg)";
    }
  }
  return (
    <>
      <Page classNames={["container-fluid", "cv-main-container", "dark-theme"]}>
        <div className="row">
          <CVAside cvData={cvData} />

          <div id="cv-main-content" className="col p-0 pb-5">
            <div className="container-fluid">
              <div id="cv-content" className="container mt-3 mb-3">
                <Title
                  text={`${cvData.name} ${cvData.surname} ${cvData.lastname}`}
                  isComment={true}
                  titleLevel={1}
                />
                <p className="lead dec dec-white">
                  {t("title", { ns: "cvData" })}
                </p>

                <section id="profile" className="content-block">
                  <Title text={t("Profile")} isComment={true} titleLevel={2} />
                  <div className="dec dec-comment">
                    <p>/* {t("profile", { ns: "cvData" })} */</p>
                  </div>
                </section>

                <section id="jobs" className="content-block">
                  <Title
                    text="Work Experience"
                    isComment={true}
                    titleLevel={2}
                  />
                  {cvData.jobs.map((job, i) => {
                    return <JobText key={i} job={job} titleLevel={3} />;
                  })}
                </section>

                <section id="education" className="content-block">
                  <Title
                    text={t("Education")}
                    isComment={true}
                    titleLevel={2}
                  />
                  {cvData.education?.map((study, idx) => {
                    return <EducationText key={idx} education={study} />;
                  })}
                </section>
              </div>
            </div>
          </div>
        </div>

        <AbsolutButton id="mv-extra-content-toggler" click={toggleAside}>
          <FontAwesomeIcon icon={faPlus} />
        </AbsolutButton>
      </Page>
    </>
  );
}
