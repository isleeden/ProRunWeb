import React from "react";
import styles from "./ChooseDistance.module.scss";
import { ReactComponent as Run } from "../../assets/images/icons/run.svg";

const ChooseDistance = () => {
  return (
    <div className={styles.choose}>
      <div className={styles.chooseItem}>
        <Run className={styles.distanceIcon} />5 км
      </div>
      <div className={`${styles.chooseItem} ${styles.active}`}>
        <Run className={styles.distanceIcon} />
        10 км
      </div>
      <div className={styles.chooseItem}>
        <Run className={styles.distanceIcon} />
        15 км
      </div>
    </div>
  );
};

export default ChooseDistance;
