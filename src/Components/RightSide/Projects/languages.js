import { languages } from "../../../Assets/data";
import classes from "./Tools.module.css";
import { Tilt } from "react-tilt";
import { useContext } from "react";

import textClasses from "../../../General.module.css";
import { languageCtx } from "../../store/LanguageContext";

const defaultOptions = {
  reverse: true, // reverse the tilt direction
  max: 30, // max tilt rotation (degrees)
  perspective: 2000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Languages = () => {
  const languageContext = useContext(languageCtx);
  const isEnglish = languageContext.isEnglish;
  return (
    <div className={classes.toolsSection} id="languages">
      <h3 className={textClasses.sectionTitle}>
        {isEnglish ? "Coding languages" : "Progamavimo kalbos"}
      </h3>
      <h4 className={textClasses.sectionCaption}>
        {isEnglish
          ? "Coding languages I am familiar with"
          : "Kalbos, kurias esu naudojęs"}
      </h4>
      <div className={classes.tools}>
        {languages.map((tech) => {
          const tiltStyle = {
            boxShadow: tech.config,
            p: 0,
          };
          return (
            <Tilt
              options={defaultOptions}
              key={tech.name}
              className={classes.tool}
              style={tiltStyle}
            >
              <img src={tech.icon} />
              <p>{tech.name}</p>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default Languages;
