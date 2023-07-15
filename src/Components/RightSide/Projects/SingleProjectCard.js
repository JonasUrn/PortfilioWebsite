import "./SingleProjectCard.css";

const SingleProjectCard = (props) => {

  const visitGitHubHandler = (githubUrl) => {
    window.open(githubUrl, '_blank');
  }

  return (
    <div className="container">
      <div className="project-card" onClick={() => visitGitHubHandler(props.githubUrl)}>
        <div className="project-card-front">
          <img
            src={props.image}
            alt="project"
            className="image-banner"
          />
          <div className="project-details-wrapper">
            <h3>{props.title}</h3>
            <h5>{props.details}</h5>
          </div>
        </div>
        <div className="project-card-back">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectCard;
