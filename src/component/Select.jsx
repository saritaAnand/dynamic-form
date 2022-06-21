import React from "react";

const Select = () => {
  return (
    <>
      <label for="color-choice">Choose Color:</label>
      <input
        list="redColors"
        id="color-choice"
        name="color-choice"
        // className="form-control"
        type="color"
      />

      <select multiple>
        <datalist id="redColors">
          <option value="#800000" />
          <option value="#8000ff" />
          <option value="#8B0000" />
          <option value="#A52A2A" />
          <option value="#00ff00" />
          <option value="#DC143C" />
          <option value=" #ff0000" />
          <option value="#00cc00" />
        </datalist>
      </select>
    </>
  );
};

export default Select;
