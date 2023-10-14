import "./SkillsTimeline.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { textVariant } from "../../../utils/motion";

const SkillsTimelineElement = ({ skill, isEnglish }) => {
  console.log(skill.logoPath);
  function handleDownload(fileName) {
    const link = document.createElement("a");
    link.href = fileName;
    link.download = `${fileName}-certificate-jonas.pdf`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  }
  return (
      <VerticalTimelineElement
        contentStyle={{ background: "#1d1836", color: "#fff" }}
        contentArrowStyle={{
          borderRight: "7px solid £232631",
          margin: "auto -0.75rem",
        }}
        iconStyle={{
          background: "#383E56",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        icon={
          <div className="icon-div">
            <img src={skill.logoPath} alt={skill.course} className="icon" />
          </div>
        }
      >
        <div className="timeline-element-wrapper">
          <h3>{skill.course}</h3>
          <p className="skill-caption">
            {skill.caption !== null && skill.caption}
          </p>
          <h4>{isEnglish ? "Programming languages" : "Programavimo kalbos"}</h4>
          <ul className="skills-list-x">
            {skill.programmingLanguages.map((pl) => {
              return <li>{pl}</li>;
            })}
          </ul>
          <h4>{isEnglish ? "Other useful tools" : "Kiti naudingi įgūdžiai"}</h4>
          <ul className="skills-list-x">
            {skill.otherSkills.map((os) => {
              return <li>{os}</li>;
            })}
          </ul>
          {skill.certificate !== null && skill.certificate !== undefined && (
            <button
              className="download-button"
              onClick={() => handleDownload(skill.certificate)}
            >
              {isEnglish ? "Download certificate" : "Siųsti sertifikatą"}
            </button>
          )}
        </div>
      </VerticalTimelineElement>
  );
};

const SkillsTimeline = ({ skills, isEnglish }) => {
  console.log(skills);
  return (
    <motion.div variant={textVariant()} className="timeline-wrapper">
      <VerticalTimeline>
        {skills(isEnglish).map((skill) => {
          return <SkillsTimelineElement skill={skill} isEnglish={isEnglish} />;
        })}
      </VerticalTimeline>
    </motion.div>
  );
};

export default SkillsTimeline;
