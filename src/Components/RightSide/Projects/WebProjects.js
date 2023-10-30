import textClasses from "../../../General.module.css";
import classes from "./Tools.module.css";
import ProjectCard from "../../UI/ProjectCard";
import { webProjects } from "../../../Assets/data";
import { languageCtx } from "../../store/LanguageContext";

import { useContext } from "react";

const WebProjects = () => {
  const ctx = useContext(languageCtx);
  const isEnglish = ctx.isEnglish;
  return (
    <div className={classes.toolsSection} id="webProjects">
      <h3 className={textClasses.sectionTitle}>
        {isEnglish ? "Web Projects" : "Internetinės svetainės"}
      </h3>
      <h4 className={textClasses.sectionCaption}>
        {isEnglish
          ? "Currently operating websites created by me"
          : "Mano sukurtos šiuo metu internete veikiančios svetainės"}
      </h4>
      <div className={classes.tools}>
        {webProjects.map((project) => {
          return (
            <ProjectCard
              image={project.image}
              title={project.title}
              key={project.key}
              description={project.description}
              color={project.color}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WebProjects;
