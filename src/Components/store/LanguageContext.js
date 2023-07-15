import React, { useState } from "react";

const languageContext = React.createContext({
  isEnglish: false,
  changeLanguage: (value) => {},
});

const LanguageProvider = (props) => {
  const [isEnglish, setIsEnglish] = useState(false);

  const changeLanguageHandler = (value) => {
    if (value === "lt") {
      setIsEnglish(false);
    }
    if (value === "en") {
      setIsEnglish(true);
    }
  };

  const currentLanguageContext = {
    isEnglish: isEnglish,
    changeLanguage: changeLanguageHandler,
  };

  return (
    <languageContext.Provider value={currentLanguageContext}>
      {props.children}
    </languageContext.Provider>
  );
};

export const languageCtx = languageContext;
export default LanguageProvider;
