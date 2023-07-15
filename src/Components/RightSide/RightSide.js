import React from "react";

import "./RightSide.css";

import "@fortawesome/react-fontawesome";

import InfoCard from "./InfoCard";
import AboutMeSection from "./AboutMeSection/AboutMeSection";
import Projects from "./Projects/Projects";
import BiggestProject from "./Projects/BiggestProject";
import LanguageSelector from "./Header/LanguageSelector";

const RightSide = () => {
  return (
    <React.Fragment>
      <div className="right-side">
        <LanguageSelector/>
        <InfoCard />
        <AboutMeSection />
        <Projects />
        <BiggestProject />
      </div>
    </React.Fragment>
  );
};

export default RightSide;
