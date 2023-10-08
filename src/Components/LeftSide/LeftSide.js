import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";

import "./LeftSide.css";

import { languageCtx } from "../store/LanguageContext";

const secondaryList = (isEnglish, hide) => {
  return (
    <React.Fragment>
      <li>
        <Link to="about-me" onClick={hide} smooth={true}>
          About me
        </Link>
      </li>
      <ul className="secondary-list">
        <li>
          <Link to="education" onClick={hide} smooth={true}>
            {isEnglish ? "Education" : "Išsilavinimas"}
          </Link>
        </li>
        <li>
          <Link to="work" onClick={hide} smooth={true}>
            {isEnglish ? "Work / Voluntary experience" : "Darbo patirtis"}
          </Link>
        </li>
        <li>
          <Link to="courses" onClick={hide} smooth={true}>
            {isEnglish ? "Courses finished" : "Baigti kursai"}
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

const navigationContent = (isEnglish, hide) => {
  return (
    <ul>
      <li>
        <Link to="home" onClick={hide}>
          {isEnglish ? "Home" : "Pagrindinis"}
        </Link>
      </li>
      {secondaryList(isEnglish, hide)}
      <li>
        <Link to="projects" onClick={hide} smooth={true}>
          {isEnglish ? "Projects" : "Projektai"}
        </Link>
      </li>
      <li>
        <Link to="technologies" onClick={hide} smooth={true}>
          {isEnglish ? "Technologies" : "Technologijos"}
        </Link>
      </li>
      <li>
        <Link to="footer" onClick={hide} smooth={true}>
          {isEnglish ? "Contacts" : "Kontaktai"}
        </Link>
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
  };

  const hideNavigation = () => {
    setIsExtended(false);
  };

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
