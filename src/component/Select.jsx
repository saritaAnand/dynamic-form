import React, { useState } from "react";
import Search from "../common/Search";
import MultiSelect from "../common/MultiSelect";

const Select = () => {
  const [isSearchable, setIsSearchable] = useState(false);
  return (
    <>
      {/* <Search /> */}
      <MultiSelect />
    </>
  );
};

export default Select;
