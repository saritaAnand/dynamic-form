import { useState } from "react";

const ValidationLogic = (validationLogic) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [error, setError] = useState("");

  const textchangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const numberChangeHandler = (e) => {
    if (e.target.value && !Number.isFinite(parseInt(e.target.value))) {
      setError("Please enter numeric digit having sum equal to 10");
    } else {
      setEnteredValue(e.target.value);
    }
  };

  const blurHandler = () => {
    validationLogic(enteredValue);
  };

  const validationClasses = error ? "form-control invalid" : "form-control";

  const reset = () => {
    setEnteredValue("");
    setError(false);
  };

  return {
    enteredValue,
    validationClasses,
    error,
    setError,
    changeHandler: textchangeHandler,
    numberChangeHandler,
    blurHandler,
    reset,
  };
};

export default ValidationLogic;
