import { Transition } from "react-transition-group";

import React, { useState, useContext } from "react";

import "./General.css";

import { languageCtx } from "../../store/LanguageContext";

const General = () => {
  const [isExtended, setIsExtended] = useState(false);

  const languageContext = useContext(languageCtx);
  const isEnglish = languageContext.isEnglish;

  const extensionHandler = () => {
    setIsExtended((prevIsExtended) => !prevIsExtended);
  };

  const pageContent = (cssClasses) =>
    isEnglish ? (
      <p className={cssClasses.join(" ")}>
        I’m an AI student at Kaunas University of Technology with a strong passion for both artificial intelligence and the investment field. <br /> <br />
        While my academic focus is on AI, I actively explore financial technologies and markets, especially through my involvement in the investments club "Invensa." <br /> <br />
        Additionally, I have practical experience in the cryptocurrency sector, which has deepened my understanding of the intersection between technology and finance. <br /><br />
        I am eager to continue learning and applying my skills in both AI and finance, contributing to innovative and impactful projects.
      </p>
    ) : (
      <p className={cssClasses.join(" ")}>
        Esu dirbtinio intelekto programos studentas, duomiuosi ir naujausiuomis technologijomis, ir investicijų, finansų pasauliu. <br /><br />
        Nors studijuoju dirbtinį intelektą, aktyviai duomiuose finansų rinkomis ir įvairiais finansiniais instrumentais - esu investuotojų klubo "Invensa" narys bei esu dirbęs su kriptovaliutų investavimu. <br /><br />
        Nekantrauju tobulinti savo žinias tiek DI tiek finansų srityse.
      </p>
    );
  // }
  return (
    <>
      <button className="extension-button" onClick={extensionHandler}>
        {isEnglish
          ? "Hey! Click here to learn more about my personality and hobbies!"
          : "Paspaukite norėdami sužinoti daugiau apie mano asmenybę."}
      </button>
      <Transition unmountOnExit mountOnEnter in={isExtended} timeout={500}>
        {(state) => {
          console.log(state);
          const cssClasses = [
            "general-info",
            state === "entering"
              ? "fade-in"
              : state === "exiting"
              ? "fade-out"
              : state === "entered"
              ? "shown"
              : " ",
          ];
          return pageContent(cssClasses);
        }}
      </Transition>
    </>
  );
};

export default General;
