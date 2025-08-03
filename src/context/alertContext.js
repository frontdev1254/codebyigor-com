import { createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";  // Importa o hook de tradução

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const { t } = useTranslation(); // Obtém a função de tradução
  const [state, setState] = useState({
    isOpen: false,
    type: 'success',
    message: '',
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, messageKey) => {
          // Resolve a chave de tradução
          const message = t(messageKey);
          setState({ isOpen: true, type, message });
        },
        onClose: () => setState({ isOpen: false, type: '', message: '' }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
