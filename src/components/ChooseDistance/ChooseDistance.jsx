import React from "react";
import styles from "./ChooseDistance.module.scss"
import run from "../../assets/images/icons/run.svg";

const ChooseDistance = () => {
  return (
    <div className={styles.choose}>
      <div className={styles.chooseItem}>
        <img src={run} alt="" />5 км
      </div>
      <div
        className={`${styles.chooseItem} ${styles.chooseItemActive}`}
      >
        <img src={run} alt="" />
        10 км
      </div>
      <div className={styles.chooseItem}>
        <img src={run} alt="" />
        15 км
      </div>
    </div>
  );
};

export default ChooseDistance;
