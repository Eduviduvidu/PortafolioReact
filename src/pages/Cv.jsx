//Load Dependencies
import { useTranslation } from "react-i18next";
import { Image } from "react-bootstrap";

//Load Layout Components
import Page from "@layout/Page";
import JobText from "@component/JobText";
import EducationText from "@component/EducationText";
import Title from "@component/Title";
import AbsolutButton from "@component/AbsolutButton";

//Load assets and styles
import fperfil from "@img/Fperfil.webp";
import "@css/cv.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Children } from "react";

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
          <aside id="cv-extra-content" className="col-sm-12 col-md-3 pb-5">
            <div className="container-fluid">
              <div className="row">
                <div className="col p-3">
                  <Image
                    src={fperfil}
                    alt="Profile photo"
                    width="600"
                    height="600"
                    className="img-thumbnail rounded-circle mx-auto d-block"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="h2">
                    <span className="dec dec-json-key">
                      "<h2>{t("Contact")}</h2>"
                    </span>
                    <span className="dec dec-white">:</span>
                    <span className="dec dec-json-syntax">[</span>
                  </div>
                  <ul>
                    <li>
                      <span className="dec dec-json-key">"@"</span>
                      <span className="dec dec-white">:</span>{" "}
                      94villadaedu@gmail.com,
                    </li>
                    <li>
                      <span className="dec dec-json-key">{t("Phone")}"</span>
                      <span className="dec dec-white">:</span> 615851449
                    </li>
                    <li>
                      <span className="dec dec-json-key">{t("Link")}"</span>
                      <span className="dec dec-white">:</span>{" "}
                      <a href="#" className="ev-link">
                        {t("Contact")}
                      </a>
                    </li>
                  </ul>
                  <div className="h2">
                    <span className="dec dec-json-syntax">],</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="h2">
                    <span className="dec dec-json-key">
                      "<h2>{t("Hobbies")}</h2>"
                    </span>
                    <span className="dec dec-white">:</span>
                    <span className="dec dec-json-syntax">[</span>
                  </div>
                  <ul>
                    {cvData.hobbies.map((hobby, idx) => {
                      return <li key={idx}>{hobby}</li>;
                    })}
                  </ul>
                  <div className="h2">
                    <span className="dec dec-json-syntax">],</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="h2">
                    <span className="dec dec-json-key">
                      "<h2>{t("Skills")}</h2>"
                    </span>
                    <span className="dec dec-white">:</span>
                    <span className="dec dec-json-syntax">[</span>
                  </div>
                  <ul>
                    {cvData.capabilities.map((capability, idx) => {
                      return <li key={idx}>{capability}</li>;
                    })}
                  </ul>
                  <div className="h2">
                    <span className="dec dec-json-syntax">],</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="h2">
                    <span className="dec dec-json-key">
                      "<h2>{t("Others")}</h2>"
                    </span>
                    <span className="dec dec-white">:</span>
                    <span className="dec dec-json-syntax">[</span>
                  </div>
                  <ul>
                    {cvData.others.map((other, idx) => {
                      return <li key={idx}>{other}</li>;
                    })}
                  </ul>
                  <div className="h2">
                    <span className="dec dec-json-syntax">]</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <section id="cv-main-content" className="col p-0 pb-5">
            <div className="container-fluid">
              <div id="cv-content" className="container mt-3 mb-3">
                <h1>
                  {t("name", { ns: "cvData" })} {t("surname", { ns: "cvData" })}{" "}
                  {t("lastname", { ns: "cvData" })}
                </h1>
                <p className="lead dec dec-white">
                  {t("title", { ns: "cvData" })}
                </p>

                <div id="profile" className="row mb-3">
                  <h2>//{t("Profile")}</h2>
                  <div className="dec dec-comment">
                    <p>/* {t("profile", { ns: "cvData" })} */</p>
                  </div>
                </div>
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
                <div id="education" className="row mb-3">
                  <h2>//{t("Education")}</h2>
                  {cvData.education?.map((study, idx) => {
                    return <EducationText key={idx} education={study} />;
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>

        <AbsolutButton id="mv-extra-content-toggler" click={toggleAside}>
          <FontAwesomeIcon icon={faPlus} />
        </AbsolutButton>
      </Page>
    </>
  );
}
