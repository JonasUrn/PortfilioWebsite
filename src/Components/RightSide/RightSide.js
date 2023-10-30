import React from "react";

import "./RightSide.css";

import "@fortawesome/react-fontawesome";

import InfoCard from "./InfoCard";
import AboutMeSection from "./AboutMeSection/AboutMeSection";
import Projects from "./Projects/Projects";
import BiggestProject from "./Projects/BiggestProject";
import LanguageSelector from "./Header/LanguageSelector";
import Tools from "./Projects/Tools";
import Learning from "./Projects/Learning";
import WebProjects from "./Projects/WebProjects";

const RightSide = () => {
  return (
    <React.Fragment>
      <div className="right-side">
        <LanguageSelector/>
        <InfoCard />
        <AboutMeSection />
        <Projects />
        <BiggestProject />
        <Tools />
        <WebProjects />
        <Learning />
      </div>
    </React.Fragment>
  );
};

export default RightSide;
