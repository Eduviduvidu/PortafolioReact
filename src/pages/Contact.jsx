import ContactForm from "@component/ContactForm";
import Page from "@layout/Page";

import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation(["contact"]);
  return (
    <Page>
      <h2>{t("Contact me")}</h2>
      <ContactForm />
    </Page>
  );
}
