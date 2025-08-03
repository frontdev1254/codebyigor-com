import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div>
      <button onClick={() => changeLanguage("en")} disabled={language === "en"}>
        🇺🇸 English
      </button>
      <button onClick={() => changeLanguage("pt")} disabled={language === "pt"}>
        🇧🇷 Português
      </button>
    </div>
  );
};

export default LanguageSwitcher;
