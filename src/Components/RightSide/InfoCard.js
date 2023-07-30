import React from "react";

import Card from "../UI/Card";
import "./InfoCard.css";
import InfoCardTextContent from "./InfoCardTextContent";
import { fadeIn } from "../../utils/motion";

import { motion } from "framer-motion";

const InfoCard = () => {
  return (
    <Card>
      <div className="picture-wrapper" id="home"></div>
      <InfoCardTextContent />
    </Card>
  );
};

export default InfoCard;
