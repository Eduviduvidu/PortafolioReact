import ContactForm from "@component/ContactForm";
import Page from "@layout/Page";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { useTranslation } from "react-i18next";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "@css/components/contactSection.css";

export default function ContactSection() {
  const { t } = useTranslation(["contact"]);
  return (
    <div className="row">
      <div className="col-sm-12 col-md-6 mr-1">
        <p>{t("contact-message")}</p>
        <ul className="contact-points p-0">
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/eduvi">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/eduvi"
              className="ev-link"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/eduvi94/"
              title="@eduvi94"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/eduvi94/"
              title="@eduvi94"
              className="ev-link"
            >
              Instagram
            </a>
          </li>
          <li>
            <a href="mailto:hello@example.com" title="hello@example.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="mailto:hello@example.com"
              title="hello@example.com"
              className="ev-link"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
      <div class="col-sm-12 col-md-6 ml-1">
        <ContactForm />
      </div>
    </div>
  );
}
