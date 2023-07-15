import React from "react";

import Card from "../UI/Card";
import "./InfoCard.css";
import InfoCardTextContent from "./InfoCardTextContent";

const InfoCard = () => {
  return (
    <Card>
      <div className="picture-wrapper" id="home"></div>
      <InfoCardTextContent />
    </Card>
  );
};

export default InfoCard;
