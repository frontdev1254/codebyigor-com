import React, { createContext, useState, useEffect } from "react";
import i18n from '../i18n/i18n';

// Cria o contexto
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Pega o idioma inicial do navegador ou usa 'en' como padrão
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  // Função para mudar o idioma
  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang); // Muda o idioma no i18n
    localStorage.setItem("language", lang); // Salva no localStorage para lembrar a escolha do usuário
  };

  // Atualiza o idioma quando o app inicia
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
