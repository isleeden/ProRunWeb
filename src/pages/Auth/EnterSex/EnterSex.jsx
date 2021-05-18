import React, { useState, useRef, useEffect } from "react";
import Button from "../../components/Button/Button";
import AuthLayout from "../../components/layouts/AuthLayout";
import styles from "./EnterSex.module.scss";
import sexPage from "../../assets/images/icons/sexPage.svg";
import selectArrow from "../../assets/images/icons/selectArrow.svg";

const options = ["Мужской", "Женский"];

const EnterSex = () => {
  const [currentSex, setCurrentSex] = useState(null);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const optionsElement = useRef();
  const selectElement = useRef();

  const optionClickHandler = (index) => {
    setCurrentSex(options[index]);
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
    <AuthLayout
      title="Укажите ваш пол"
      subtitle="Так мы сможем давать вам более точные рекомендации по соревнованиям"
      icon={sexPage}
      steps="Шаг 3 из 4"
    >
      <div className={styles.selectWrapper}>
        <div
          className={`${styles.select} ${currentSex ? styles.selected : ""} ${
            isSelectOpen ? styles.focused : ""
          }`}
          onClick={() => setIsSelectOpen(!isSelectOpen)}
          ref={selectElement}
        >
          {currentSex ? currentSex : "Укажите ваш пол"}
          <img
            className={`${styles.selectArrow} ${
              isSelectOpen ? styles.selectArrowActive : ""
            }`}
            src={selectArrow}
            alt="arrow"
          />
        </div>
        <div
          ref={optionsElement}
          className={`${styles.options} ${
            isSelectOpen ? styles.optionsActive : ""
          }`}
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
      <Button buttonText="Далее" valid={false} />
    </AuthLayout>
  );
};

export default EnterSex;
