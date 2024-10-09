import { useContext } from "react";

import "./AboutMeGeneralStyles.css";
import classes from "../../../General.module.css";

import { languageCtx } from "../../store/LanguageContext";
import { cryptobanter, invensa } from "../../../Assets/imports";
import ExperienceTimeline from "./ExperienceTimeline";

const exp = (isEnglish) => {
  return [
    {
      title: isEnglish ? "Crypto Researcher" : "Cryptovaliutų analitikas",
      skills: isEnglish ? ["Financial Analysis", "Understanding of macroeconomics", "Public Speaking"] : ["Finansinė analizė", "Makroekonomikos supratimas", "Viešas kalbėjimas"],
      logoPath: cryptobanter,
    },
    {
      title: isEnglish ? "(Voluntary experience) Activity in investment club 'Invensa'" : "(Savanoriavimas) Investuotojų klubo 'Invensa' narys",
      skills: isEnglish ? ["Financial Analysis", "Investing in various financial instruments", "Public Speaking"] : ["Finansinė analizė", "Investavimas į įvairius financinius instrumentus", "Viešas kalbėjimas"],
      logoPath: invensa,
    },
  ];
};

const Experience = () => {
  const languageContext = useContext(languageCtx);
  const isEnglish = languageContext.isEnglish;
  return (
    <div className="about-me-content-wrapper" id="work">
      <h3 className={classes.sectionTitle}>{isEnglish ? "Work / Voluntary experience" : "Darbo patirtis"}</h3>
      <h4 className={classes.sectionCaption}>{isEnglish ? "My work and volunteering experience" : "Mano darbo ir savanorystės patirtis"}</h4>
      <ExperienceTimeline skills={exp} isEnglish={isEnglish} />
    </div>
  );
};

export default Experience;
