import { useTranslation } from "react-i18next";
import { Image } from "react-bootstrap";

//Load Layout Components
import Page from "@layout/Page";
import JobText from "@component/JobText";
import EducationText from "@component/EducationText";

//Load assets and styles
import fperfil from "@img/Fperfil.webp";
import "@css/cv.css";

export default function Cv() {
  const { t } = useTranslation(["cv", "cvData"]);

  const jobs = t("jobs", { ns: "cvData", returnObjects: true });
  const education = t("education", { ns: "cvData", returnObjects: true });
  const capabilities = t("capabilities", { ns: "cvData", returnObjects: true });
  const hobbies = t("hobbies", { ns: "cvData", returnObjects: true });
  const others = t("others", { ns: "cvData", returnObjects: true });

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
                    {hobbies.map((hobby, idx) => {
                      return <li id={idx}>{hobby}</li>;
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
                    {capabilities.map((capability, idx) => {
                      return <li id={idx}>{capability}</li>;
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
                    {others.map((other, idx) => {
                      return <li id={idx}>{other}</li>;
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
                <div id="work-exp" className="row mb-3">
                  <h2>//{t("Work Experience")}</h2>
                  {jobs?.map((job) => {
                    return <JobText job={job} />;
                  })}
                </div>
                <div id="education" className="row mb-3">
                  <h2>//{t("Education")}</h2>
                  {education?.map((study) => {
                    return <EducationText education={study} />;
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
        <a id="mv-extra-content-toggler" href="#">
          <i className="fa-solid fa-plus"></i>
        </a>
      </Page>
    </>
  );
}
