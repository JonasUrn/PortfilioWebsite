import { useState, forwardRef } from "react";

import "./Input.css";

const Input = forwardRef((props, ref) => {
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const inputIsNotValid = isTouched && !isValid;

  const InputHandler = (event) => {
    let currentValue = event.target.value;
    setIsValid(props.onValidate(currentValue));
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  return (
    <div className="input-group">
      <label>{props.title}</label>
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={InputHandler}
        onBlur={inputBlurHandler}
        className={inputIsNotValid ? "invalid" : ""}
        ref={ref}
      />
      {inputIsNotValid && (
        <p className="invalid-paragraph">Invalid information</p>
      )}
    </div>
  );
});

export default Input;
