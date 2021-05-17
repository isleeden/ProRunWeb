import React, { useState, useEffect, useRef } from "react";
import styles from "./PhoneInput.module.scss";
import selectArrow from "../../assets/images/icons/selectArrow.svg";
import InputMask from "react-input-mask";

const options = [
  { country: "Узбекистан", number: "998" },
  { country: "Афганистан", number: "93" },
  { country: "Албания", number: "335" },
  { country: "Андорра", number: "224" },
  { country: "Узбекистан", number: "998" },
  { country: "Афганистан", number: "93" },
  { country: "Албания", number: "335" },
  { country: "Андорра", number: "224" },
  { country: "Узбекистан", number: "998" },
  { country: "Афганистан", number: "93" },
  { country: "Албания", number: "335" },
  { country: "Андорра", number: "224" },
];

const PhoneInput = () => {
  const [currentCountry, setCurrentCountry] = useState(options[0].number);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const focusHandler = () => {
    setIsFocused(true);
  };

  const blurHandler = () => {
    setIsFocused(false);
  };

  const optionsElement = useRef();
  const selectElement = useRef();

  const outsideSelectClickHandler = (e) => {
    if (
      !optionsElement.current.contains(e.target) &&
      !selectElement.current.contains(e.target)
    ) {
      setIsSelectOpen(false);
    }
  };

  const optionClickHandler = (number) => {
    setCurrentCountry(number);
    setIsSelectOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", outsideSelectClickHandler);
    return () => {
      document.removeEventListener("mousedown", outsideSelectClickHandler);
    };
  }, []);

  return (
    <div
      className={`${styles.phoneForm} ${
        isFocused ? styles.phoneFormFocused : ""
      }`}
    >
      <div
        className={styles.select}
        ref={selectElement}
        onClick={() => setIsSelectOpen(!isSelectOpen)}
      >
        <div className={styles.currentCountry}>+{currentCountry}</div>
        <img
          className={`${styles.selectArrow} ${
            isSelectOpen ? styles.selectArrowActive : ""
          }`}
          src={selectArrow}
          alt="arrow"
        />
      </div>
      <div className={styles.separator}></div>
      <InputMask
        className={styles.input}
        type="text"
        mask="99 999 99 99"
        placeholder="71 123 45 67"
        onFocus={focusHandler}
        onBlur={blurHandler}
      />
      <div
        className={`${styles.options} ${
          isSelectOpen ? styles.optionsActive : ""
        }`}
        ref={optionsElement}
      >
        {options.map(({ country, number }, index) => {
          return (
            <div
              className={styles.option}
              key={index}
              onClick={() => optionClickHandler(number)}
            >
              <p>{country}</p>
              <p>+{number}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhoneInput;
