import "./FooterForm.css";
import "./Input.css";

import { useRef, useState, useContext } from "react";

import { languageCtx } from "../../store/LanguageContext";
import Input from "./Input";

const emptyValidation = (value) => {
  return value.trim().length > 0;
};

const sendEmail = (subject, body) => {
  window.open(`mailto:jonasurnezius@gmail.com?subject=${subject}&body=${body}`);
};

const FooterForm = () => {
  const [formIsValid, setFormIsValid] = useState(true);

  const nameRef = useRef();
  const surnameRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const languageContext = useContext(languageCtx);
  const isEnglish = languageContext.isEnglish;

  const submissionHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredSurname = surnameRef.current.value;
    const enteredTopic = subjectRef.current.value;
    const enteredMessage = messageRef.current.value;

    const formValidityState = emptyValidation(
      enteredName + enteredSurname + enteredTopic + enteredMessage
    );

    setFormIsValid(
      emptyValidation(
        enteredName + enteredSurname + enteredTopic + enteredMessage
      )
    );

    console.log(formIsValid);

    if (!formIsValid) {
      return;
    } else {
      const topic = `${enteredName} ${enteredSurname} - ${enteredTopic}`;
      sendEmail(topic, enteredMessage);
    }
  };

  return (
    <div className="footer-form-wrapper">
      <form onSubmit={submissionHandler}>
        <div className="name-row">
          <Input
            onValidate={emptyValidation}
            title={isEnglish ? "Name" : "Vardas"}
            placeholder={isEnglish ? "Enter your name" : "Įveskite savo vardą"}
            key="name"
            ref={nameRef}
          />
          <Input
            title={isEnglish ? "Surname" : "Pavardė"}
            placeholder={
              isEnglish ? "Enter your surname" : "Įveskite savo pavardę"
            }
            key="surname"
            onValidate={emptyValidation}
            ref={surnameRef}
          />
        </div>
        <Input
          title={isEnglish ? "Topic" : "Tema"}
          placeholder={
            isEnglish ? "Enter the topic for writing" : "Iveskite rašymo temą"
          }
          key="topic"
          onValidate={emptyValidation}
          ref={subjectRef}
        />
        <Input
          title={isEnglish ? "Message" : "Žinutė"}
          placeholder={isEnglish ? "Enter message content" : "Įveskite žinutę"}
          key="message"
          onValidate={emptyValidation}
          ref={messageRef}
        />
        {!formIsValid && (
          <p className="error">
            {isEnglish
              ? "Invalid form details!"
              : "Neteisingai įvesti duomenys"}
          </p>
        )}
        <button type="submit">{isEnglish ? "Send" : "Siųsti"}</button>
      </form>
    </div>
  );
};

export default FooterForm;
