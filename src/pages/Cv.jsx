import { useTranslation } from "react-i18next";
import { Image } from "react-bootstrap";
import { useEffect } from "react";
import { Route } from "react-router";

import fperfil from "@img/Fperfil.webp";
import "@css/cv.css";

export default function Cv() {
  const { t } = useTranslation("cv");

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
                      "<h2>{t("contact")}</h2>"
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
                      <span className="dec dec-json-key">{t("cv.Phone")}"</span>
                      <span className="dec dec-white">:</span> 615851449
                    </li>
                    <li>
                      <span className="dec dec-json-key">{t("cv.Link")}"</span>
                      <span className="dec dec-white">:</span>{" "}
                      <a href="#" className="ev-link">
                        {" "}
                        {t("cv.Contact")}
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
                      "<h2>{t("cv.Hobbies")}</h2>"
                    </span>
                    <span className="dec dec-white">:</span>
                    <span className="dec dec-json-syntax">[</span>
                  </div>
                  <ul>
                    <li>{t("cv.Electronics")}</li>
                    <li>{t("cv.Robotics")}</li>
                    <li>{t("cv.3D design/printing")}</li>
                    <li>{t("cv.Games")}</li>
                    <li>{t("cv.Motorcycles")}</li>
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
                      "<h2>{t("cv.Skills")}</h2>"
                    </span>
                    <span className="dec dec-white">:</span>
                    <span className="dec dec-json-syntax">[</span>
                  </div>
                  <ul>
                    <li>{t("cv.Self-taught")}</li>
                    <li>{t("cv.Creative")}</li>
                    <li>{t("cv.Empathetic")}</li>
                    <li>{t("cv.Proactive")}</li>
                    <li>{t("cv.Responsible")}</li>
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
                      "<h2>{t("cv.Others")}</h2>"
                    </span>
                    <span className="dec dec-white">:</span>
                    <span className="dec dec-json-syntax">[</span>
                  </div>
                  <ul>
                    <li>{t("cv.ACTIC Medium Level")}</li>
                    <li>{t("cv.Driving License B1 & A")}</li>
                    <li>{t("cv.Personal Vehicle")}</li>
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
                <h1>Eduardo Villada Gallardo</h1>
                <p className="lead dec dec-white">{t("cv.Web Developer")}</p>

                <div id="profile" className="row mb-3">
                  <h2>//{t("cv.Profile")}</h2>
                  <div className="dec dec-comment">
                    <p>/* {t("cv.profile-text-1")}</p>
                    <p>{t("cv.profile-text-2")}*/</p>
                  </div>
                </div>
                <div id="work-exp" className="row mb-3">
                  <h2>//{t("cv.Work Experience")}</h2>
                  <div className="row">
                    <span className="dec dec-strong-text">
                      <b>INS Lliçà</b> <i>(Lliçà d'Amunt)</i>
                    </span>
                    <p>{t("cv.ins-llica-content")}</p>
                  </div>
                  <div className="row">
                    <span className="dec dec-strong-text">
                      <b>Arrova.cat</b> <i>(Granollers)</i>
                    </span>
                    <p>{t("cv.arrova-content")}</p>
                  </div>
                  <div className="row">
                    <span className="dec dec-strong-text">
                      <b>Computer desarrollos informaticos S.L</b>{" "}
                      <i>(Mollet del Vallés)</i>
                    </span>
                    <p>{t("cv.computer-content")}</p>
                  </div>
                  <div className="row">
                    <span className="dec dec-strong-text">
                      <b>Escola Sant Gervasi</b> <i>(Mollet del Vallés)</i>
                    </span>
                    <p>{t("cv.sant-gervasi-content")}</p>
                  </div>
                </div>
                <div id="education" className="row mb-3">
                  <h2>//{t("cv.Education")}</h2>
                  <div className="row">
                    <span className="dec dec-strong-text">
                      <b>FOAP DWF - {t("cv.Frontend Web Developement")}</b>{" "}
                      <i>{t("cv.Currently Studying")}</i>
                    </span>
                    <p>
                      Tecnocampus UPF (Mataró) -{t("cv.Synchronous Online")}
                    </p>
                  </div>
                  <div className="row">
                    <span className="dec dec-strong-text">
                      <b>CFGS DAW - {t("cv.Web App Development")}</b>
                    </span>
                    <p>INS Carles Vallbona (Granollers)</p>
                  </div>
                  <div className="row">
                    <span className="dec dec-strong-text">
                      <b>CFGS DAM - {t("cv.Multiplatform App Development")}</b>
                    </span>
                    <p>INS La Ferreria (Montcada i Reixac)</p>
                  </div>
                  <div className="row">
                    <span className="dec dec-strong-text">
                      <b>
                        CFGM SMX - {t("cv.Microcomputer Systems and Networks")}
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
