import { useContext, useEffect } from "react";

import "./LanguageSelector.css";

import { languageCtx } from "../../store/LanguageContext";

const LanguageSelector = (props) => {
  const languageContext = useContext(languageCtx);

  const selectionHandler = (event) => {
    const value = event.target.value;
    languageContext.changeLanguage(value);
  };

  useEffect(() => {
    languageContext.changeLanguage('en');
  }, []);

  return (
    <header>
      <select defaultValue="en" onChange={selectionHandler}>
        <option value="en">
          {/* <img className="flag-image" src='../public/britain_flag.png' /> */}
          <p>English</p>
        </option>
        <option value="lt">
          {/* <img  className="flag-image" height='10px' width='10px' src='https://w7.pngwing.com/pngs/619/652/png-transparent-flag-of-lithuania-flag-of-lithuania-tauti%C5%A1ka-giesm%C4%97-white-flag-flag-miscellaneous-angle-flag-thumbnail.png' /> */}
          <p>Lithuanian</p>
        </option>
      </select>
    </header>
  );
};

export default LanguageSelector;
