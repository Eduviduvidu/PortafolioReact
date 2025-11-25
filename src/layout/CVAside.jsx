import fperfil from "@img/Fperfil.webp";
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function CVAside({ cvData }) {
  const { t } = useTranslation(["cv", "cvData"]);

  return (
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
                <span className="dec dec-white">:</span> 94villadaedu@gmail.com,
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
            <ul class="json-list">
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
            <ul class="json-list">
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
            <ul class="json-list">
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
  );
}
