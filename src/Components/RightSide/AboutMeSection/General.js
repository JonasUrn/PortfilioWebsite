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
        Hey! <br />
        <br /> I'm a 19-year-old aspiring developer with a passion for coding
        and a zest for life. When I'm not immersed in lines of code, you'll
        often find me on the basketball court or hitting the gym, striving for
        physical and mental well-being. I also find solace in the world of books
        and movies. <br />
        <br /> As an introvert, I bring a calm and composed demeanor to my work.
        Responsibility is a core value of mine, and I consistently deliver
        high-quality work within given timelines. Punctuality is ingrained in my
        DNA, as I firmly believe in respecting others' time and ensuring smooth
        collaboration. <br />
        <br />
        I'm driven by a deep curiosity and a desire to solve real-world problems
        through programming. The endless possibilities and the ability to create
        something from scratch captivate my imagination. But I also believe in
        maintaining a balanced lifestyle. Engaging in activities that invigorate
        my mind and body helps me stay energized and productive.
      </p>
    ) : (
      <p className={cssClasses.join(" ")}>
        Sveiki! <br />
        <br /> Esu 19 metų jaunuolis su didele aistra programavimui. Kai
        neprogramuoju dažnai žaidžiu krepšinį, einu į sporto salę ar važinėju
        dviračiu, laisvalaikiu skaitau knygas bei esu didelis fantastinių filmų
        megėjas.
        <br />
        <br /> Esu intravertas, todėl dažniausia elgiuose ramiai, santūriai ar
        net droviai. Esu atsakingas ir punktualus, niekada neveluoju, o duotus
        darbus visada atlieku geriausiai, kiek galiu, iki duoto laiko limito.
        Mano intravertiškumas kiek apsunkina paprastą bendravimą bei pažinčių
        kūrimą, tačiau netrukdo dirbti komandoje siekiant bendro tikslo ar
        sprendžiant svarbius klausimus.
        <br />
        <br />
        Aš itin duomiuose dirbtiniu intelektu, kriptovaliutomis bei šių
        technologijų pritaikymu realiame gyvenime. Šis susidomėjimas man kilo
        dar būnant 15 metų, pradėjus žaisti kompiuterinius žaidimus, todėl
        šiomis technologijomis domiuosi pakankamai ilgą laiką.
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
