import ValidationLogic from "../common/validationLogic";
import { MANDATORY, VALID } from "../common/constant";

const GeneralForm = () => {
  const {
    enteredValue: emailValue,
    validationClasses: emailValidationClasses,
    error: emailError,
    setError: setEmailError,
    changeHandler,
    blurHandler: emailBlur,
  } = ValidationLogic(emailValidation);

  const {
    enteredValue,
    validationClasses,
    error,
    numberChangeHandler,
    blurHandler,
    // reset,
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
    if (enteredValue.trim() === "") {
      setEmailError(MANDATORY);
      console.log(emailError);
      return;
    } else if (enteredValue.includes("@")) {
      setEmailError("");
    } else {
      setEmailError(VALID);
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    passwordValidation(enteredValue);
    emailValidation(emailValue);
    // Reset Form
    // reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={emailValidationClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onBlur={emailBlur}
          onChange={changeHandler}
          value={emailValue}
          required
        />
        {emailError && <p className="error-text">{emailError}</p>}
      </div>
      <div className={validationClasses}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={numberChangeHandler}
          onBlur={blurHandler}
          value={enteredValue}
          required
        />
        {error && <p className="error-text">{error}</p>}
      </div>
      <div className="form-actions">
        <button disabled={error || emailError}>Submit</button>
      </div>
    </form>
  );
};

export default GeneralForm;
