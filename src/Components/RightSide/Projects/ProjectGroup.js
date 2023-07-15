import "./ProjectGroup.css";

import SingleProjectCard from "./SingleProjectCard";

const ProjectGroup = (props) => {
  const projects = props.projects;
  return (
    <div className="project-group">
      <h3 className="project-group-title">{props.title}</h3>
      <div className="project-group-wrapper">
        {projects.map((project) => {
          return (
            <SingleProjectCard
              title={project.projectTitle}
              description={project.projectDescription}
              details={project.projectDetails}
              image={project.imageUrl}
              githubUrl={project.githubLink}
              key={project.githubLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectGroup;
