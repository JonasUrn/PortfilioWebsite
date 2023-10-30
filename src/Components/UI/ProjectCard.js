import classes from "./ProjectCard.module.css";
import { Tilt } from "react-tilt";

const ProjectCard = ({ image, title, description, color, key, link }) => {
  const tiltStyle = {
    boxShadow: color,
  };

  const Navigate = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <Tilt key={key} className={classes.projectCard} style={tiltStyle}>
      <div onClick={Navigate} className={classes.clickable}></div>
      <img src={image} />
      <h5> {title} </h5>
      <hr />
      <p>{description}</p>
    </Tilt>
  );
};

export default ProjectCard;
