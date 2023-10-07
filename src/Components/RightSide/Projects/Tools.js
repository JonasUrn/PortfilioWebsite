import { technologies } from "../../../Assets/data";
import classes from "./Tools.module.css";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: true, // reverse the tilt direction
  max: 20, // max tilt rotation (degrees)
  perspective: 2000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Tools = () => {
  return (
    <>
      <h3 className={classes.toolsTitle}>Technologies I have worked with</h3>
      <div className={classes.tools}>
        {technologies.map((tech) => {
          const tiltStyle = {
            boxShadow: tech.config,
            p: 0,
          };
          console.log(tiltStyle);
          return (
            <Tilt
              options={defaultOptions}
              key={tech.name}
              className={classes.tool}
              style={tiltStyle}
            >
              <img src={tech.icon} />
              <p>{tech.name}</p>
            </Tilt>
          );
        })}
      </div>
    </>
  );
};

export default Tools;
