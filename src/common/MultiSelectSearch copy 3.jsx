import React, { useState, useEffect } from "react";

const intialDropdown = [
  { title: "React", id: "react", isChecked: false },
  { title: "Angular", id: "angular", isChecked: false },
  { title: "Vue", id: "vue", isChecked: false },
  { title: "Ember", id: "ember", isChecked: false },
  { title: "Python", id: "python", isChecked: false },
  { title: "Node", id: "node", isChecked: false },
  { title: "Java", id: "java", isChecked: false },
  { title: "JavaScript", id: "javaScript", isChecked: false },
  { title: "Php", id: "php", isChecked: false },
  { title: "Ruby", id: "ruby", isChecked: false },
  { title: "Golang", id: "go", isChecked: false },
  { title: "MATLAB", id: "matlab", isChecked: false },
  { title: "Perl", id: "perl", isChecked: false },
  { title: "Kotlin", id: "kotlin", isChecked: false },
  { title: "R", id: "r", isChecked: false },
  { title: "C", id: "c", isChecked: false },
];
// const searchReducer = (state, action) => {
//   if (action.type === "SEARCH") {
//     return [...state,action.value];
//   }
//   if (action.type === "CLEAR") {
//     return state ;
//   }
//   return state;
// };

const MultiSelectSearch = () => {
  const [arr, setArr] = useState(intialDropdown);

  const [allChecked, setAllChecked] = useState(true);

  const [isMulti, setIsMulti] = useState(false);

  const [isSearch, setIsSearch] = useState(false);

  const [keyword, setKeyword] = useState("");

  // const [searchState, dispatchSearch] = useReducer(searchReducer, [
  //   { title: "React", id: "react", isChecked: true },
  //   { title: "Angular", id: "angular", isChecked: false },
  //   { title: "Vue", id: "vue", isChecked: false },
  //   { title: "Ember", id: "ember", isChecked: true },
  // ]);

  const searchHandler = (e) => {
    setIsSearch(true);
    setKeyword(e.target.value);
  };

  useEffect(() => {
    if (!isSearch) {
      return;
    } else {
      const res = arr.filter((cv) => cv.id.includes(keyword));
      console.log(res);
      setArr(res);
      if (keyword.length === 0) {
        setArr(intialDropdown);
      }
    }
    console.log(keyword);
    // dispatchSearch({ type: "SEARCH", value: res });
  }, [keyword]);

  useEffect(() => {
    visibleValue();
  }, [isMulti]);

  const visibleValue = () => {
    let o = [];
    arr
      .filter((it) => it.isChecked)
      .forEach((r) => {
        o.push(r.title);
      });
    setKeyword(o);
  };

  const checkBoxHandler = (e) => {
    setIsSearch(false);
    setIsMulti((preState) => !preState);
    const newArr = arr.map((cv) => {
      if (cv.id === e.target.value) {
        return { ...cv, isChecked: e.target.checked };
      } else return cv;
    });
    setArr(newArr);
    visibleValue();
  };

  const allCheckBoxHandler = (e) => {
    setIsSearch(false);
    setAllChecked(e.target.checked);
    setIsMulti((preState) => !preState);
    const newArr = arr.map((cv) => {
      return { ...cv, isChecked: allChecked };
    });
    setArr(newArr);
    visibleValue();
  };

  return (
    <>
      <form>
        <input
          type="search"
          value={keyword}
          onChange={searchHandler}
          className="form-control"
          placeholder="Search or Multiple Select"
        />
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
              <div>
                <input
                  type="checkbox"
                  key={item.id}
                  id={item.id}
                  value={item.id}
                  checked={item.isChecked}
                  onChange={checkBoxHandler}
                />
                <label htmlFor="kraken">{item.title}</label>
                <br />
              </div>
            );
          })}
      </form>
    </>
  );
};

export default MultiSelectSearch;
