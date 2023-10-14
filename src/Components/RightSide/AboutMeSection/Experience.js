import { useContext } from "react";

import "./AboutMeGeneralStyles.css";
import classes from "../../../General.module.css";

import { languageCtx } from "../../store/LanguageContext";

const Experience = () => {
  const languageContext = useContext(languageCtx);
  const isEnglish = languageContext.isEnglish;
  const additionalInformation = isEnglish ? (
    <li>
      I am yet to be accepted to any internship programs or part-time jobs.
      However, I am actively looking for them and am open to all suggestions.
    </li>
  ) : (
    <li>
      Dar neturiu jokios darbo patirties IT sferoje, tačiau aktyviai ieškau
      praktikos ir tobulinu įgudžius.
    </li>
  );
  return (
    <div className="about-me-content-wrapper" id="work">
      <h3 className={classes.sectionTitle}>{isEnglish ? "Work / Voluntary experience" : "Darbo patirtis"}</h3>
      <h4 className={classes.sectionCaption}>{isEnglish ? "My experience working or volunteering in IT sphere" : "Mano darbo ir savanorystės patirtis IT sferoje"}</h4>
      <ul>
        <li>
          {isEnglish ? "None." : "Duotu momentu neturiu darbo patirties."}
        </li>
        {additionalInformation}
      </ul>
    </div>
  );
};

export default Experience;
