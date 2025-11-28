import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Button from "@component/Button";

import "@css/layout/MainFooter.css";
import LangSwitcher from "./LangSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import ColorChange from "@component/ColorChange";

export default function MainFooter() {
  const { t } = useTranslation(["mainMenu", "footer"]);

  return (
    <>
      <footer className="pt-5">
        <div className="container">
          <div id="main-footer" className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>{t("Web Map", { ns: "footer" })}</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <NavLink to="/" className="ev-link">
                    {t("Home")}
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/cv" className="ev-link">
                    {t("CV")}
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/projects" className="ev-link">
                    {t("Projects")}
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/contact" className="ev-link">
                    {t("Contact")}
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>{t("Legal Notice", { ns: "footer" })}</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a
                    href="{route('privacy-policy',['lang' => App::getLocale()]) }"
                    className="nav-link ev-link p-0"
                  >
                    {t("Privacy Policy")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link ev-link p-0">
                    {t("Legal Info")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link ev-link p-0">
                    {t("Unsubscribe")}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>{t("Languages", { ns: "footer" })}</h5>
              <LangSwitcher />
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>{t("Subscribe to my newsletter", { ns: "footer" })}</h5>
                <p>{t("subscribe_message", { ns: "footer" })}</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder={t("Email address", { ns: "footer" })}
                  />
                  {/* <button className="btn btn-primary" type="button"></button> */}
                  <Button>{t("Subscribe", { ns: "footer" })}</Button>
                </div>
              </form>
            </div>
          </div>

          <div
            id="secondary-footer"
            className="d-flex flex-column flex-sm-row justify-content-between py-4 border-top"
          >
            <div class="bla">
              <ColorChange />
            </div>
            <p>
              © 2024 Eduviduvidu. {t("All rights reserved", { ns: "footer" })}.
            </p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a target="_blank" href="https://www.linkedin.com/in/eduvi">
                  <i className="fa-brands fa-linkedin"></i>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li className="ms-3">
                <a target="_blank" href="https://www.instagram.com/eduvi94/">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="ms-3">
                <a href="mailto:94villadaedu@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
