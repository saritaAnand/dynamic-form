import { useState } from "react";

const ValidationLogic = (validationLogic) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [error, setError] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const textchangeHandler = (e) => {
    setEnteredValue(e.target.value);
    setIsTouched(true);
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
    setIsTouched(true);
  };

  const IsValid = isTouched && !error;
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
    IsValid,
  };
};

export default ValidationLogic;
