import { useState, useEffect } from "react";

// const searchReducer = (state, action) => {
//   if (action.type === "SEARCH") {
//     return [...state,action.value];
//   }
//   if (action.type === "CLEAR") {
//     return state ;
//   }
//   return state;
// };

const MultiSelectSearch = (data) => {
  const [arr, setArr] = useState(data);

  const [allChecked, setAllChecked] = useState(true);

  const [isMulti, setIsMulti] = useState(false);

  const [isSearch, setIsSearch] = useState(false);

  const [keyword, setKeyword] = useState("");

  let validationClasses;

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
      const res = arr.filter((cv) =>
        cv.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setArr(res);
      if (keyword.length === 0) {
        setArr(data);
      }
    }
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

  return {
    allCheckBoxHandler,
    checkBoxHandler,
    searchHandler,
    keyword,
    allChecked,
    arr,
    validationClasses,
  };
};

export default MultiSelectSearch;
