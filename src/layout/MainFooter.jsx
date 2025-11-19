import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import "@css/layout/MainFooter.css";
import LangSwitcher from "./LangSwitcher";

export default function MainFooter() {
  const { t } = useTranslation();

  return (
    <>
      <footer className="pt-5">
        <div className="container">
          <div id="main-footer" className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>{t("Web Map")}</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a
                    href="{route('cv',['lang' => App::getLocale()]) }"
                    className="nav-link ev-link p-0"
                  >
                    {t("My CV")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="{route('home',['lang' => App::getLocale()]) }"
                    className="nav-link ev-link p-0"
                  >
                    {t("Home")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="{route('projects',['lang' => App::getLocale()]) }"
                    className="nav-link ev-link p-0"
                  >
                    {t("Projects")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="{route('contact',['lang' => App::getLocale()]) }"
                    className="nav-link ev-link p-0"
                  >
                    {t("Contact")}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>{t("Legal Notice")}</h5>
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
              <h5>{t("Languages")}</h5>
              <LangSwitcher />
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>{t("Subscribe to our newsletter")}</h5>
                <p>{t("subscribe_message")}</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="{t('Email address')}"
                  />
                  <button className="btn btn-primary" type="button">
                    {t("Subscribe")}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div
            id="secondary-footer"
            className="d-flex flex-column flex-sm-row justify-content-between py-4 border-top"
          >
            <p>© 2024 Eduviduvidu. {t("All rights reserved")}.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a target="_blank" href="https://www.linkedin.com/in/eduvi">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li className="ms-3">
                <a target="_blank" href="https://www.instagram.com/eduvi94/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="ms-3">
                <a href="mailto:94villadaedu@gmail.com">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
