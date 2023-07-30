import "./FooterForm.css";
import "./Input.css";

import { useRef, useState, useContext } from "react";

import { languageCtx } from "../../store/LanguageContext";
import Input from "./Input";
import emailjs from "@emailjs/browser";

const emptyValidation = (value) => {
  return value.trim().length > 0;
};

const emailValidation = (value) => {
  return value.trim().length > 0 && value.includes("@");
};

const FooterForm = () => {
  const [formIsValid, setFormIsValid] = useState(true);
  const [loading, setLoading] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const languageContext = useContext(languageCtx);
  const isEnglish = languageContext.isEnglish;

  const sendEmail = async (subject, body, email, name, isEnglish) => {
    setLoading(true);
    return await emailjs
      .send(
        "service_k0f2nlj",
        "template_r7l9ns3",
        {
          topic: subject,
          message: body,
          from_name: name,
          to_email: "jonasurnezius@gmail.com",
          from_email: email,
        },
        "GgGyJabwB98y8KGL2"
      )
      .then(
        () => {
          setLoading(false);
          window.alert(
            isEnglish
              ? "Thank you! I will reach out to you as soon as possible."
              : "Ačiū! Su Jumis susisieksiu kiek įmanoma greičiau"
          );
          return true;
        },
        (error) => {
          console.log(error);
          setLoading(false);
          window.alert(
            isEnglish
              ? "Something went wrong. Please try again later. If the problem persists, send email to jonasurnezius@gmail.com from your email provider."
              : "Ivyko klaida. Bandykite vėliau. Jei problema kartosis, išsiųskite laišką adresu jonasurnezius@gmail.com naudodami savo el. pašto tiekėją."
          );
          return false;
        }
      );
  };

  const submissionHandler = async (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredTopic = subjectRef.current.value;
    const enteredMessage = messageRef.current.value;

    const formValidityState = emptyValidation(
      enteredName + enteredEmail + enteredTopic + enteredMessage
    );

    setFormIsValid(
      emptyValidation(
        enteredName + enteredEmail + enteredTopic + enteredMessage
      )
    );

    console.log(formIsValid);

    if (!formIsValid) {
      return;
    } else {
      const wasSent = await sendEmail(
        enteredTopic,
        enteredMessage,
        enteredEmail,
        enteredName,
        isEnglish
      );

      if (wasSent) {
        nameRef.current.value = '';
        messageRef.current.value = '';
        subjectRef.current.value = '';
        emailRef.current.value = '';
        console.log('CLEAR');
      } else {
        console.log('MISTAKE');
      }
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
            title={isEnglish ? "Email" : "El-paštas"}
            placeholder={
              isEnglish
                ? "Enter your email address"
                : "Įveskite savo el-pašto adresą"
            }
            key="email"
            onValidate={emailValidation}
            ref={emailRef}
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
        <label className="textarea-label">
          {isEnglish ? "Message" : "Žinutė"}
        </label>
        <textarea
          rows={10}
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
        <button type="submit">
          {isEnglish
            ? loading
              ? "Siunčiama..."
              : "Send"
            : loading
            ? "Sending..."
            : "Siųsti"}
        </button>
      </form>
    </div>
  );
};

export default FooterForm;
