import React from "react";
import { useTranslation } from "react-i18next";
import { NavDropdown, Image } from "react-bootstrap";

import es_flag from "@img/flags/es.webp";
import en_flag from "@img/flags/en.webp";
import ca_flag from "@img/flags/ca.webp";

const locales = {
  "es-ES": { name: "Español", flag: es_flag },
  "ca-CA": { name: "Català", flag: ca_flag }, // agrega más si necesitas
  "en": { name: "English", flag: en_flag },
};

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <NavDropdown
      title={
        <>
          <Image
            className="lang-flag me-1"
            src={locales[currentLocale]?.flag}
            alt={`Flag of ${locales[currentLocale]?.name}`}
            width="20"
            height="20"
          />
          {locales[currentLocale]?.name ?? currentLocale}
        </>
      }
      id="language-switch"
    >
      {Object.entries(locales).map(([code, { name, flag }]) => (
        <NavDropdown.Item
          key={code}
          onClick={() => changeLanguage(code)}
          active={currentLocale === code}
        >
          <Image
            className="lang-flag me-1"
            src={flag}
            alt={`Flag of ${name}`}
            width="20"
            height="20"
          />
          {name}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}

export default LanguageSwitcher;
