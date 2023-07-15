import { useContext } from "react";

import "./AboutMeSection.css";

import EducationContent from "./EducationContent";
import Experience from "./Experience";
import General from "./General";
import Skills from "./Skills";
import { languageCtx } from "../../store/LanguageContext";

const AboutMeSection = () => {
  const languageContext = useContext(languageCtx);
  const isEnglish = languageContext.isEnglish;
  const commentContent = isEnglish
    ? "Press on any card to view GitHub repository for desired project"
    : "Paspauskite atitinkamo projekto kortelę norėdami pažiūrėti to projekto GitHub saugyklą.";
  return (
    <section className="about-me-section" id="about-me">
      <h2>{isEnglish ? "About me" : "Apie mane"}</h2>
      <hr></hr>
      <General />
      <EducationContent />
      <Experience />
      <Skills />
      <h2>{isEnglish ? "My Projects" : "Mano projektai"}</h2>
      <hr></hr>
      <p className="comment">{commentContent}</p>
    </section>
  );
};

export default AboutMeSection;
