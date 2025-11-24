import Page from "@layout/Page";

import { useTranslation } from "react-i18next";
import ContactSection from "@component/ContactSection";

export default function Contact() {
  const { t } = useTranslation(["contact"]);
  return (
    <Page>
      <h2>{t("Contact me")}</h2>
      <ContactSection />
    </Page>
  );
}
