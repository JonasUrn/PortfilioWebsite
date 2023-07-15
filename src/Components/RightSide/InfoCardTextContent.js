import { useContext } from "react";

import "./InfoCardTextContent.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { languageCtx } from "../store/LanguageContext";

library.add(fab, faEnvelope);

const InfoCardTextContent = () => {
  const languageProvider = useContext(languageCtx);
  const isEnglish = languageProvider.isEnglish;

  const titleText = isEnglish
    ? "Hey! My name is Jonas, welcome to my website!"
    : "Sveiki, mano vardas Jonas, sveikinu prisijungus prie mano svetainės!";

  const facebookHandler = (event) => {
    window.open("https://www.facebook.com/jonas.urnezius", "_blank");
  };
  const instagramHandler = (event) => {
    window.open("https://www.instagram.com/jonas_urn/?next=%2F", "_blank");
  };
  const twitterHandler = (event) => {
    window.open("https://twitter.com/CaptainCutlet", "_blank");
  };
  const githubHandler = (event) => {
    window.open("https://github.com/CaptainCutlet", "_blank");
  };
  const mailHandler = (event) => {
    const emailAddress = 'jonasurnezius@gmail.com';
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="brief-info-container">
      <h4>{titleText}</h4>
      <div className="icons-wrapper">
        <FontAwesomeIcon
          icon={["fab", "facebook"]}
          size="lg"
          className="info-icon"
          onClick={facebookHandler}
        />
        <FontAwesomeIcon
          icon={["fab", "instagram"]}
          size="lg"
          className="info-icon"
          onClick={instagramHandler}
        />
        <FontAwesomeIcon
          icon={["fab", "twitter"]}
          size="lg"
          className="info-icon"
          onClick={twitterHandler}
        />
        <FontAwesomeIcon
          icon={["fab", "github"]}
          size="lg"
          className="info-icon"
          onClick={githubHandler}
        />
        <FontAwesomeIcon
          icon="fa-envelope"
          size="lg"
          className="info-icon"
          onClick={mailHandler}
        />
      </div>
    </div>
  );
};

export default InfoCardTextContent;
