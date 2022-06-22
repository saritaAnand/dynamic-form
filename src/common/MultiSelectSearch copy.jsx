import React, { useState, useEffect, useRef } from "react";

const MultiSelect = () => {
  const [arr, setArr] = useState([
    { title: "React", id: "react", isChecked: true },
    { title: "Angular", id: "angular", isChecked: false },
    { title: "Vue", id: "vue", isChecked: false },
    { title: "Ember", id: "ember", isChecked: true },
  ]);

  const [allChecked, setAllChecked] = useState(false);
  //   const [isMulti, setIsMulti] = useState(true);
  const [obj, setObj] = useState([]);
  const [keyword, setKeyword] = useState("");
  const isMulti = true;

  const searchHandler = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    const res = arr.filter((cv) => cv.id.includes(keyword));
    setArr(res);
  }, [keyword]);

  const visibleValue = () => {
    let o = [];
    const res = arr
      .filter((it) => it.isChecked)
      .forEach((r) => {
        o.push({ title: r.title });
      });
    setObj(o);
  };

  const checkBoxHandler = (e) => {
    const newArr = arr.map((cv) => {
      if (cv.id === e.target.value) {
        return { ...cv, isChecked: e.target.checked };
      } else return cv;
    });
    setArr(newArr);
    visibleValue();
  };

  const allCheckBoxHandler = (e) => {
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

export default MultiSelect;
