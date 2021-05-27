import React, { useState, useEffect, useRef } from "react";
import styles from "./Select.module.scss";
import selectArrow from "../../assets/images/icons/selectArrow.svg";
import Dropdown from "../Dropdown/Dropdown";

const Select = ({
  options = [],
  value,
  setValue,
  className,
  defaultArrowDown,
}) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const selectElement = useRef();
  const optionsElement = useRef();

  const outsideSelectClickHandler = (e) => {
    if (
      !selectElement.current.contains(e.target) &&
      !optionsElement.current.contains(e.target)
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

  const optionClickHandler = (index) => {
    setValue(options[index]);
    setIsSelectOpen(false);
  };

  return (
    <div className={styles.selectWrapper}>
      <div
        className={styles.select}
        onClick={() => setIsSelectOpen(!isSelectOpen)}
        ref={selectElement}
      >
        {value}
        <img
          className={`${styles.selectArrow} ${
            isSelectOpen ? styles.selectArrowActive : ""
          } ${defaultArrowDown ? styles.selectArrowDown : ""}`}
          src={selectArrow}
          alt="arrow"
        />
      </div>
      <Dropdown
        className={`${styles.options} ${className}`}
        isActive={isSelectOpen}
        setIsActive={setIsSelectOpen}
        reference={optionsElement}
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
      </Dropdown>
    </div>
  );
};

export default Select;
