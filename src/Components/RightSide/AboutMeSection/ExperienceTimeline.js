import "./ExperienceTimeline.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { textVariant } from "../../../utils/motion";

const ExperienceTimelineElement = ({ skill, isEnglish }) => {
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
            <img src={skill.logoPath} alt={skill.title} className="icon" />
          </div>
        }
      >
        <div className="timeline-element-wrapper">
          <h3>{skill.title}</h3>
          <h4>{isEnglish ? "Skills" : "Kompetencijos"}</h4>
          <ul className="skills-list-x">
            {skill.skills.map((pl) => {
              return <li>{pl}</li>;
            })}
          </ul>
        </div>
      </VerticalTimelineElement>
  );
};

const ExperienceTimeline = ({ skills, isEnglish }) => {
  console.log(skills);
  return (
    <motion.div variant={textVariant()} className="timeline-wrapper">
      <VerticalTimeline>
        {skills(isEnglish).map((skill) => {
          return <ExperienceTimelineElement skill={skill} isEnglish={isEnglish} />;
        })}
      </VerticalTimeline>
    </motion.div>
  );
};

export default ExperienceTimeline;
