import { useContext } from "react";

import "./Projects.css";

import ProjectGroup from "./ProjectGroup";
import { languageCtx } from "../../store/LanguageContext";
import allProjectsEnglish from "./EnglishProjects";
import allProjectsLithuanian from "./LithuanianProjects";

const Projects = () => {
  const languageContext = useContext(languageCtx);
  const isEnglish = languageContext.isEnglish;
  const allProjects = isEnglish ? allProjectsEnglish : allProjectsLithuanian;
  return (
    <div className="projects-wrapper" id="projects">
      {allProjects.map((projectGroup) => {
        return (
          <ProjectGroup
            title={projectGroup.title}
            projects={projectGroup.projects}
            key={projectGroup.title}
          />
        );
      })}
    </div>
  );
};

export default Projects;
