import { useState, useEffect, useCallback, useContext } from "react";

import "./AboutMeGeneralStyles.css";
import "./Skills.css";

import { languageCtx } from "../../store/LanguageContext";

import PythonCertificate from "../../../Assets/python.pdf";
import FlutterCertificate from "../../../Assets/flutter.pdf";
import ReactCertificate from '../../../Assets/react.pdf';

import SkillsTimeline from "./SkillsTimeline";

const courses = (isEnglish) => {
  const blockchainCourse = isEnglish
    ? "Various YouTube courses on blockchain development"
    : "Įvairūs kursai YouTube platformoje";
  const solidityCaption = isEnglish
    ? "(Only the very basics)"
    : "(Tik pradmenys)";
  return [
    {
      course: "100 Days of Code: The Complete Python Pro Bootcamp for 2023",
      programmingLanguages: ["Python", "HTML", "CSS"],
      otherSkills: ["Bootstrap", "Flask"],
      logoPath: "../python-logo-removebg-preview.png",
      certificate: PythonCertificate,
      caption: null,
    },
    {
      course: "Flutter & Dart - The Complete Guide",
      programmingLanguages: ["Flutter", "Dart"],
      otherSkills: ["Firebase", "Android & IOS development"],
      logoPath: "../flutter-logo.png",
      certificate: FlutterCertificate,
      caption: null,
    },
    {
      course: blockchainCourse,
      programmingLanguages: ["Solidity", "Python", "Javascript"],
      otherSkills: ["Blockchain technology"],
      logoPath: "../solidity-logo-removebg-preview.png",
      certificate: null,
      caption: solidityCaption,
    },
    {
      course: "React - The Complete Guide 2023 (incl. React Router & Redux)",
      programmingLanguages: ["Javascript", "HTML", "CSS"],
      otherSkills: ["React.JS", "Next.JS", "Redux", "CSS Tailwind"],
      logoPath: "../react-logo-removebg-preview.png",
      certificate: ReactCertificate,
      caption: null,
    },
  ];
};

const captionContent = (isEnglish) => {
  return isEnglish ? (
    <p className="caption">
      *I do not claim to be an expert on any of the mentioned programming
      languages and tools, I am yet to have any job experience, so my skills are
      only evaluated by doing projects.
    </p>
  ) : (
    <p className="caption">
      *Pastaba: neturiu darbo patirties, todėl mano įgūdžiai niekada nebuvo
      deramai įvertinti. Išvardintų programavimo kalbų mokėjimo lygį galiu
      pasitikrinti tik darydamas projektus.
    </p>
  );
};

const Skills = () => {
  const screenWidth = window.innerWidth;
  const isSmallChanged = screenWidth <= 600;
  const [isSmall, setIsSmall] = useState(isSmallChanged);

  const languageContext = useContext(languageCtx);
  const isEnglish = languageContext.isEnglish;

  const resizeHandler = useCallback(() => {
    const screenWidth = window.innerWidth;
    const isSmallChanged = screenWidth <= 600;
    setIsSmall(isSmallChanged);
  }, [isSmall]);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [resizeHandler]);

  function handleDownload(fileName) {
    const link = document.createElement("a");
    link.href = fileName;
    link.download = `${fileName}-certificate-jonas.pdf`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  }

  return (
    <div className="about-me-content-wrapper" id="courses">
      <h3>
        {isEnglish
          ? "Courses finished and programming skills"
          : "Baigti programavimo kursai bei įgūdžiai"}
      </h3>
      <SkillsTimeline skills={courses} isEnglish={isEnglish} />
      {captionContent(isEnglish)}
    </div>
  );
};

export default Skills;
