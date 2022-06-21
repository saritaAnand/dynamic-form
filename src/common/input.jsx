import React from "react";

const Input = (props) => {
  const {
    name,
    label,
    type,
    value,
    validationClasses,
    error,
    handleBlur,
    handleChange,
    ...rest
  } = props;
  return (
    <div className={validationClasses}>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        type={type}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        // required
        {...rest}
      />
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default Input;
