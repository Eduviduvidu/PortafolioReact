import { useTranslation } from "react-i18next";
import { Image } from "react-bootstrap";

import fperfil from "@img/Fperfil.webp";
import "@css/cv.css";

export default function Cv() {
  const { t } = useTranslation(["cv"]);

  return (
    <>
      <div className="container-fluid cv-main-container dark-theme">
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
                    <li>{t("Electronics")}</li>
                    <li>{t("Robotics")}</li>
                    <li>{t("3D design/printing")}</li>
                    <li>{t("Games")}</li>
                    <li>{t("Motorcycles")}</li>
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
                    <li>{t("Self-taught")}</li>
                    <li>{t("Creative")}</li>
                    <li>{t("Empathetic")}</li>
                    <li>{t("Proactive")}</li>
                    <li>{t("Responsible")}</li>
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
                    <li>{t("ACTIC Medium Level")}</li>
                    <li>{t("Driving License B1 & A")}</li>
                    <li>{t("Personal Vehicle")}</li>
                  </ul>
                  <div className="h2">
                    <span className="dec dec-json-syntax">]</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <section id="cv-main-content" className="col p-0 pb-5 ">
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
                    <p>/* {t("profile", { ns: "cvData" })}*/</p>
                  </div>
                </div>
                <div id="work-exp" className="row mb-3">
                  <h2>//{t("Work Experience")}</h2>
                  <div className="row">
                    <span className="dec dec-strong-text">
                      <b>INS Lliçà</b> <i>(Lliçà d'Amunt)</i>
                    </span>
                    <p>{t("ins-llica-content")}</p>
                  </div>
                  <div className="row">
                    <span className="dec dec-strong-text">
                      <b>Arrova.cat</b> <i>(Granollers)</i>
                    </span>
                    <p>{t("arrova-content")}</p>
                  </div>
                  <div className="row">
                    <span className="dec dec-strong-text">
                      <b>Computer desarrollos informaticos S.L</b>{" "}
                      <i>(Mollet del Vallés)</i>
                    </span>
                    <p>{t("computer-content")}</p>
                  </div>
                  <div className="row">
                    <span className="dec dec-strong-text">
                      <b>Escola Sant Gervasi</b> <i>(Mollet del Vallés)</i>
                    </span>
                    <p>{t("sant-gervasi-content")}</p>
                  </div>
                </div>
                <div id="education" className="row mb-3">
                  <h2>//{t("Education")}</h2>
                  <div className="row">
                    <span className="dec dec-strong-text">
                      <b>FOAP DWF - {t("Frontend Web Developement")}</b>{" "}
                      <i>{t("Currently Studying")}</i>
                    </span>
                    <p>Tecnocampus UPF (Mataró) - {t("Synchronous Online")}</p>
                  </div>
                  <div className="row">
                    <span className="dec dec-strong-text">
                      <b>CFGS DAW - {t("Web App Development")}</b>
                    </span>
                    <p>INS Carles Vallbona (Granollers)</p>
                  </div>
                  <div className="row">
                    <span className="dec dec-strong-text">
                      <b>CFGS DAM - {t("Multiplatform App Development")}</b>
                    </span>
                    <p>INS La Ferreria (Montcada i Reixac)</p>
                  </div>
                  <div className="row">
                    <span className="dec dec-strong-text">
                      <b>
                        CFGM SMX - {t("Microcomputer Systems and Networks")}
                      </b>
                    </span>
                    <p>Educem (Granollers)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <a id="mv-extra-content-toggler" href="#">
          <i className="fa-solid fa-plus"></i>
        </a>
      </div>
    </>
  );
}
