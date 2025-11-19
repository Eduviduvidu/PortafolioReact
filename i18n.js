// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Namespaces
import esHome from "@lang/es/home.json";
import esContact from "@lang/es/contact.json";

import caHome from "@lang/ca/home.json";
import caContact from "@lang/ca/contact.json";

import enHome from "@lang/en/home.json";
import enContact from "@lang/en/contact.json";

import esMenu from "@lang/es/mainMenu.json";
import caMenu from "@lang/ca/mainMenu.json";
import enMenu from "@lang/en/mainMenu.json";

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Vincula con React
  .init({
    fallbackLng: "en", // idioma por defecto
    debug: false,
    interpolation: {
      escapeValue: false, // React ya escapa los valores
    },
    resources: {
      es: {
        mainMenu: esMenu,
        home: esHome,
        contact: esContact,
      },
      ca: {
        mainMenu: caMenu,
        home: caHome,
        contact: caContact,
      },
      en: {
        mainMenu: enMenu,
        home: enHome,
        contact: enContact,
      }
    },
  });

export default i18n;
