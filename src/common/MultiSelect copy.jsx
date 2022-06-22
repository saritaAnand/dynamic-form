import React from "react";

const MultiSelect = () => {
  return (
    <>
      <label for="pet-select">Choose a pet:</label>

      <select name="pets" id="pet-select" multiple>
        {/* <option value="">--Please choose an option--</option> */}
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
    </>
  );
};

export default MultiSelect;
