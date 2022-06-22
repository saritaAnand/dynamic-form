import React from "react";

const Search = () => {
  return (
    <>
      <label htmlFor="color-choice">Choose Color:</label>
      <input
        list="redColors"
        id="color-choice"
        name="color-choice"
        type="search"
        className="form-control"
        // type="color"
      />
      <datalist id="redColors">
        <option value="red" />
        <option value="blue" />
        <option value="re" />
        <option value="green" />
        <option value="#00ff00" />
        <option value="#DC143C" />
        <option value=" #ff0000" />
        <option value="#00cc00" />
      </datalist>
    </>
  );
};

export default Search;
