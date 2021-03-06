import React from "react";
import Input from "../common/input";
import MultiSelectSearch from "../common/MultiSelectSearch";

const Home = () => {
  const intialDropdown = [
    { title: "React", id: "react", isChecked: false },
    { title: "Angular", id: "angular", isChecked: false },
    { title: "Vue", id: "vue", isChecked: false },
    { title: "Ember", id: "ember", isChecked: false },
    { title: "Python", id: "python", isChecked: false },
    { title: "Node", id: "node", isChecked: false },
    { title: "Java", id: "java", isChecked: false },
    { title: "JavaScript", id: "javascript", isChecked: false },
    { title: "Php", id: "php", isChecked: false },
    { title: "Ruby", id: "ruby", isChecked: false },
    { title: "Golang", id: "go", isChecked: false },
    { title: "MATLAB", id: "matlab", isChecked: false },
    { title: "Perl", id: "perl", isChecked: false },
    { title: "Kotlin", id: "kotlin", isChecked: false },
    { title: "R", id: "r", isChecked: false },
    { title: "C", id: "c", isChecked: false },
  ];
  // const intialDropdown = [
  //   "red",
  //   "orange",
  //   "yellow",
  //   "green",
  //   "blue",
  //   "indigo",
  //   "violet",
  //   "purple",
  //   "pink",
  //   "silver",
  //   "gold",
  //   "beige",
  //   "brown",
  //   "grey ",
  //   "black",
  //   "white",
  // ];

  // convert String Array into Object Array
  const formatArr = (intialDropdown) => {
    if (typeof intialDropdown[0] === "string") {
      let o = [];
      intialDropdown.forEach((item) => {
        o.push({ title: item, id: item, isChecked: false });
      });
      return o;
    } else return intialDropdown;
  };

  const {
    allCheckBoxHandler,
    checkBoxHandler,
    searchHandler,
    keyword,
    allChecked,
    arr,
    validationClasses,
  } = MultiSelectSearch(formatArr(intialDropdown));
  return (
    <>
      <form>
        {Input({
          name: "email",
          type: "search",
          value: keyword,
          handleChange: searchHandler,
          placeholder: "Search or Multiple Select",
        })}

        <br />
        <legend>Choose your favorite languages</legend>
        <br />

        <input
          type="checkbox"
          id="all"
          checked={allChecked}
          onChange={allCheckBoxHandler}
        />
        <label htmlFor="all">None (Checked) -- All(Un Checked)</label>
        <hr />
        {arr &&
          arr.map((item) => {
            return (
              <div key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.id}
                  checked={item.isChecked}
                  onChange={checkBoxHandler}
                />
                <label style={validationClasses} htmlFor={item.id}>
                  {item.title}
                </label>
                <br />
              </div>
            );
          })}
      </form>
    </>
  );
};

export default Home;
