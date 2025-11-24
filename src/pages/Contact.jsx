import ContactForm from "@component/ContactForm";
import Page from "@layout/Page";

import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation(["contact"]);
  return (
    <Page>
      <h2>{t("Contact me")}</h2>
      <div class="col-sm-12 col-md-6 mt-3">
        <p>
          Si te gusta mi contenido (o no) contáctame. Dame algunas ideas para
          desarrollar, dame algunos consejos y, por último, si tienes algún
          trabajo, ¡estaré encantado de escuchar tu oferta!
        </p>
        <ul class="contact-points p-0">
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/eduvi">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/eduvi"
              class="ev-link"
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
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/eduvi94/"
              title="@eduvi94"
              class="ev-link"
            >
              Instagram
            </a>
          </li>
          <li>
            <a href="mailto:hello@example.com" title="hello@example.com">
              <i class="fa-solid fa-envelope"></i>
            </a>
            <a
              href="mailto:hello@example.com"
              title="hello@example.com"
              class="ev-link"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
      <div class="col-sm-12 col-md-6 mt-3">
        <ContactForm />
      </div>
    </Page>
  );
}
