import { useState, useEffect, useContext } from "react";

import "./BiggestProject.css";

import { languageCtx } from "../../store/LanguageContext";

const aboutParagraph = (isEnglish) => {
  return isEnglish ? (
    <p>
      Aside from the projects listed above, since March 2023 me and my friend
      were working on the following project. Our goal was to create a website
      that uses AI to generate NFTs that can later be minted and sent to user's
      wallet via blockchain. My task in this project was to build the entire
      website (frontend and backend) and then connect this website to Smart
      contracts made by my friend to create and mint NFTs. This website is now
      called MintMasterAI and runs on the web as any other website. Although the
      website is completed, my goal for the summer of 2023 is to use Flutter to
      build mobile app for this website. (app under maintenance)
    </p>
  ) : (
    <p>
      Be aukščiau išvardytų projektų, nuo 2023 m. kovo mėn. aš ir mano draugas
      dirbome su šiuo projektu. Mūsų tikslas buvo sukurti svetainę, kuri naudoja
      dirbtinį intelektą generuoti nuotraukas, kurios vėliau gali būti verčiamos
      į NFT's ir išsiųsčiamos į vartotojo kriptovaliutų saugyklą per blockchain
      technologiją. Mano užduotis šiame projekte buvo sukurti visą svetainę
      (frontend ir backend) ir prijunkti šią svetainę prie mano draugo sukurtų
      Smart Contracts, kurie atlieka kriptovaliutų pervedimus bei NFT siuntimus.
      Ši svetainė dabar vadinama MintMasterAI ir veikia internete kaip bet kuri
      kita svetainė. Nors svetainė yra baigtaa, mano tikslas 2023 m. vasarą yra
      naudoti „Flutter“ ir sukurti mobiliąją programėlę šiai svetainei. (svetainė šiuo metu tvarkoma)
    </p>
  );
};

const mintMasterLogo = (
  <div className="bp-logo-wrapper">
    <img
      className="bp-logo"
      src="../mintmasterailogo.png"
      alt="mintmasterai_logo"
    ></img>
  </div>
);

const websiteLink = (isEnglish) => {
  return isEnglish ? <p>
    Link to the website: <a href="https://mintmasterai.com">MintMasterAI</a>
  </p> : <p>
    Nuoroda į svetainę: <a href="https://mintmasterai.com">MintMasterAI</a>
  </p>
};

const BiggestProject = () => {
  const screenWidth = window.innerWidth;
  const isSmallChanged = screenWidth <= 600;
  const [isSmall, setIsSmall] = useState(isSmallChanged);

  const languageContext = useContext(languageCtx);
  const isEnglish = languageContext.isEnglish;

  const resizeHandler = () => {
    const screenWidth = window.innerWidth;
    const isSmallChanged = screenWidth <= 600;
    setIsSmall(isSmallChanged);
    console.log(isSmall);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="biggest-project-wrapper" id="biggest-project">
      <h3 className="biggest-project-title">{isEnglish ? 'My biggest project' : 'Didžiausias projektas'}</h3>
      <div
        className={isSmall ? "biggest-project-card-s" : "biggest-project-card"}
      >
        <div className={isSmall ? "bp-info-s" : "bp-info"}>
          <h4>MintMasterAI</h4>
          {!isSmall && aboutParagraph(isEnglish)}
          {isSmall && mintMasterLogo}
          {!isSmall && websiteLink(isEnglish)}
        </div>
        {!isSmall && mintMasterLogo}
        {isSmall && aboutParagraph(isEnglish)}
        {isSmall && websiteLink(isEnglish)}
      </div>
    </div>
  );
};

export default BiggestProject;
