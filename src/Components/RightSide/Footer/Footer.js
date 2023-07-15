import { useContext } from "react";

import "./Footer.css";

import FooterForm from "./FooterForm";
import { languageCtx } from "../../store/LanguageContext";

const Footer = () => {
  const languageContext = useContext(languageCtx);
  const isEnglish = languageContext.isEnglish;

  const subtitleContent = isEnglish ? (
    <h5>
      You can contact me via any social media apps found in the introduction
      card, or by filling out the form below
    </h5>
  ) : (
    <h5>
      Su manimi galite susisiekdami naudodami visus socialinius tinklus
      nurodytus pradžioje arba užpildydami apačioje esančią formą
    </h5>
  );

  return (
    <footer>
      <div className="footer-title" id="footer">
        <h3>{isEnglish ? "Contact me" : "Susisiekite su manimi"}</h3>
        {subtitleContent}
      </div>
      <FooterForm />
    </footer>
  );
};

export default Footer;
