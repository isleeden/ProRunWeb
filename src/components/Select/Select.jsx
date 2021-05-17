import React, { useState, useEffect, useRef } from "react";
import styles from "./Select.module.scss";
import selectArrow from "../../assets/images/icons/selectArrow.svg";

const Select = ({ options = [], value, setValue, width }) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const optionsElement = useRef();
  const selectElement = useRef();

  const optionClickHandler = (index) => {
    setValue(options[index]);
    setIsSelectOpen(false);
  };

  const outsideSelectClickHandler = (e) => {
    if (
      !optionsElement.current.contains(e.target) &&
      !selectElement.current.contains(e.target)
    ) {
      setIsSelectOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", outsideSelectClickHandler);
    return () => {
      document.removeEventListener("mousedown", outsideSelectClickHandler);
    };
  }, []);


  return (
    <div className={styles.selectWrapper} style={{width: width}}>
      <div
        className={styles.select}
        onClick={() => setIsSelectOpen(!isSelectOpen)}
        ref={selectElement}
      >
        {value}
        <img
          className={`${styles.selectArrow} ${
            isSelectOpen ? styles.selectArrowActive : ""
          }`}
          src={selectArrow}
          alt="arrow"
        />
      </div>
      <div
        className={`${styles.options} ${
          isSelectOpen ? styles.optionsActive : ""
        }`}
        ref={optionsElement}
      >
        {options.map((item, index) => {
          return (
            <div
              className={styles.option}
              key={index}
              onClick={() => optionClickHandler(index)}
            >
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Select;
