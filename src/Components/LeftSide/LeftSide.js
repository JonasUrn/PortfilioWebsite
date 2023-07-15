import React, { useState, useEffect, useContext } from "react";

import "./LeftSide.css";

import { languageCtx } from "../store/LanguageContext";

const secondaryList = (isEnglish, hide) => {
  return (
    <React.Fragment>
      <li>
        <a href="#about-me" onClick={hide}>About me</a>
      </li>
      <ul className="secondary-list">
        <li>
          <a href="#education" onClick={hide}>{isEnglish ? "Education" : "Išsilavinimas"}</a>
        </li>
        <li>
          <a href="#work" onClick={hide}>
            {isEnglish ? "Work / Voluntary experience" : "Darbo patirtis"}
          </a>
        </li>
        <li>
          <a href="#courses" onClick={hide}>
            {isEnglish ? "Courses finished" : "Baigti kursai"}
          </a>
        </li>
      </ul>
    </React.Fragment>
  );
};

const navigationContent = (isEnglish, hide) => {
  return (
    <ul>
      <li>
        <a href="#home" onClick={hide}>{isEnglish ? "Home" : "Pagrindinis"}</a>
      </li>
      {secondaryList(isEnglish, hide)}
      <li>
        <a href="#projects" onClick={hide}>{isEnglish ? "Projects" : "Projektai"}</a>
      </li>
      <li>
        <a href="#footer" onClick={hide}>{isEnglish ? "Contacts" : "Kontaktai"}</a>
      </li>
    </ul>
  );
};

// -----------------------------------------------------------------------

const LeftSide = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isExtended, setIsExtended] = useState(true);

  const languageContext = useContext(languageCtx);
  const isEnglish = languageContext.isEnglish;

  useEffect(() => {
    const handleResizeMobile = () => {
      setIsMobile(window.innerWidth < 1250);
    };

    window.addEventListener("resize", handleResizeMobile);

    handleResizeMobile();

    return () => {
      window.removeEventListener("resize", handleResizeMobile);
    };
  }, []);

  const changeExtensionHandler = () => {
    setIsExtended(!isExtended);
  }

  const hideNavigation = () => {
    setIsExtended(false);
  }

  const defaultContent = (
    <div className="left-side">
      <h2>{isEnglish ? "Content" : "Turinys"}</h2>
      {navigationContent(isEnglish)}
    </div>
  );

  const mobileContent = (
    <div className="left-side">
      <div className="left-side-inner">
        <h2>{isEnglish ? "Content" : "Turinys"}</h2>
        <button className="dropbtn" onClick={changeExtensionHandler}>
          &#9776;
        </button>
      </div>
      {isExtended && (
        <div className="dropdown-content-nav">
          {navigationContent(isEnglish, hideNavigation)}
        </div>
      )}
    </div>
  );

  return <>{isMobile ? mobileContent : defaultContent}</>;
};

export default LeftSide;
