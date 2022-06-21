import React, { useState } from "react";
import ValidationLogic from "../common/validationLogic";
import { MANDATORY, VALID } from "../common/constant";
import Input from "../common/Input";
import { Navigate } from "react-router-dom";

const GeneralForm = (props) => {
  const [isSubmitable, setIsSubmitable] = useState(false);
  const {
    enteredValue: emailValue,
    validationClasses: emailValidationClasses,
    error: emailError,
    setError: setEmailError,
    changeHandler,
    blurHandler: emailBlur,
    reset: resetEmail,
  } = ValidationLogic(emailValidation);

  const {
    enteredValue,
    validationClasses,
    error,
    numberChangeHandler,
    blurHandler,
    reset,
    setError,
  } = ValidationLogic(passwordValidation);

  function passwordValidation(enteredValue) {
    if (enteredValue.trim() === "") {
      setError(MANDATORY);
      return;
    } else {
      const res =
        enteredValue && enteredValue.split("").reduce((acc, cv) => +acc + +cv);
      if (res !== 10) {
        setError("Added value is not equal to 10");
        return;
      } else {
        setError("");
      }
    }
  }

  function emailValidation(enteredValue) {
    const emailRegex = /\S+@\S+\.\S+/;
    if (enteredValue.trim() === "") {
      setEmailError(MANDATORY);
      return;
      // } else if (enteredValue.includes("@")) {
    } else if (emailRegex.test(enteredValue)) {
      setEmailError("");
    } else {
      setEmailError(VALID);
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    emailValidation(emailValue);
    passwordValidation(enteredValue);
    if (!error || !emailError) {
      setIsSubmitable(true);
      //   Reset Form
      reset();
      resetEmail();
    }
  };

  return (
    <>
      {isSubmitable && <Navigate to="/select " />}
      <form onSubmit={submitHandler}>
        {Input({
          name: "email",
          label: "Email",
          type: "email",
          value: emailValue,
          validationClasses: emailValidationClasses,
          handleChange: changeHandler,
          handleBlur: emailBlur,
          error: emailError,
        })}

        {Input({
          name: "password",
          label: "Password",
          type: "password",
          value: enteredValue,
          validationClasses,
          handleChange: numberChangeHandler,
          handleBlur: blurHandler,
          error: error,
        })}

        <div className="form-actions">
          <button disabled={error || emailError}>Submit</button>
        </div>
      </form>
    </>
  );
};

export default GeneralForm;
