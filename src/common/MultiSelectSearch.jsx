import React, { useState, useEffect, useReducer } from "react";

const intialDropdown = [
  { title: "React", id: "react", isChecked: false },
  { title: "Angular", id: "angular", isChecked: false },
  { title: "Vue", id: "vue", isChecked: false },
  { title: "Ember", id: "ember", isChecked: false },
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

  const [allChecked, setAllChecked] = useState(false);

  const [isMulti, setIsMulti] = useState(false);

  const [keyword, setKeyword] = useState("");

  // const [searchState, dispatchSearch] = useReducer(searchReducer, [
  //   { title: "React", id: "react", isChecked: true },
  //   { title: "Angular", id: "angular", isChecked: false },
  //   { title: "Vue", id: "vue", isChecked: false },
  //   { title: "Ember", id: "ember", isChecked: true },
  // ]);

  const searchHandler = (e) => {
    setIsMulti(false);
    setKeyword(e.target.value);
  };

  // useEffect(() => {
  //   if (isMulti) {
  //     return;
  //   } else {
  //     const res = arr.filter((cv) => cv.id.includes(keyword));
  //     console.log(res);
  //     setArr(res);
  //     if (keyword.length === 0) {
  //       setArr(intialDropdown);
  //     }
  //   }
  //   console.log(keyword);
  //   // dispatchSearch({ type: "SEARCH", value: res });
  // }, [keyword]);

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
    setIsMulti((state) => !state);
    const newArr = arr.map((cv) => {
      if (cv.id === e.target.value) {
        return { ...cv, isChecked: e.target.checked };
      } else return cv;
    });
    setArr(newArr);
    visibleValue();
  };

  const allCheckBoxHandler = (e) => {
    setIsMulti((state) => !state);
    setAllChecked(e.target.checked);
  };

  useEffect(() => {
    const newArr = arr.map((cv) => {
      return { ...cv, isChecked: allChecked };
    });
    setArr(newArr);
    visibleValue();
  }, [allChecked]);

  return (
    <>
      <form>
        {/* {obj.map((r) => (
          <input type="text" onChange={visibleValue} value={r.title} />
        ))} */}
        <input type="search" value={keyword} onChange={searchHandler} />
        <br />
        <legend>Choose your favorite language</legend>
        <input
          type="checkbox"
          id="all"
          checked={allChecked}
          onChange={allCheckBoxHandler}
        />
        <label htmlFor="all">All</label>
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
