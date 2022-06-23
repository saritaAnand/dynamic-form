import { useState, useEffect } from "react";

const MultiSelectSearch = (data) => {
  const [arr, setArr] = useState(data);

  const [allChecked, setAllChecked] = useState(true);

  const [isMulti, setIsMulti] = useState(false);

  const [isSearch, setIsSearch] = useState(false);

  const [keyword, setKeyword] = useState("");

  const [initialObj, setInitialObj] = useState();

  let validationClasses;

  // convert Array into Object Array
  useEffect(() => {
    let o = [];
    arr.forEach((item) => {
      o.push({ title: item, id: item, isChecked: false });
    });
    setArr(o);
    setInitialObj(o);
  }, []);

  const searchHandler = (e) => {
    setIsSearch(true);
    setKeyword(e.target.value);
  };

  useEffect(() => {
    if (!isSearch) {
      return;
    } else {
      const res = arr.filter(
        (cv) => cv.title.toLowerCase().includes(keyword.toLowerCase()) //@@@@@@@@@@@@@@@@
      );
      setArr(res);
      if (keyword.length === 0) {
        setArr(initialObj);
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
        o.push(r.title); //@@@@@@@@@
      });
    setKeyword(o);
  };

  const checkBoxHandler = (e) => {
    setIsSearch(false);
    setIsMulti((preState) => !preState);
    const newArr = arr.map((cv) => {
      if (cv.id === e.target.value) {
        // @@@@@@@@@@
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
