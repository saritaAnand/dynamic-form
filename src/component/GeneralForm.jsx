import { useState } from "react";

const GeneralInput = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [error, setError] = useState("");

  const changeHandler = (e) => {
    if (e.target.value && !Number.isFinite(parseInt(e.target.value))) {
      setError("Please enter numeric digit having sum equal to 10");
    } else {
      setEnteredValue(e.target.value);
    }
  };

  const passwordValidation = () => {
    if (enteredValue.trim() === "") {
      setError("This field is required !!!");
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
  };

  const blurHandler = (e) => {
    passwordValidation();
  };

  const submitHandler = (e) => {
    e.preventDefault();

    passwordValidation();
  };

  const isValid = !error;

  const passwordValidationClasses = !isValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" />
      </div>
      <div className={passwordValidationClasses}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={changeHandler}
          onBlur={blurHandler}
          value={enteredValue}
        />
        {!isValid && <p className="error-text">{error}</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default GeneralInput;
