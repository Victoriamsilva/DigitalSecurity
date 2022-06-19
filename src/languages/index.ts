import { initReactI18next } from "react-i18next";
import PTBR from "./pt/pt-br.json";
import ENUS from "./en/en-us.json";
import i18next from "i18next";

const resources = {
  "pt-BR": PTBR,
  "en-US": ENUS,
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en-US",
});
