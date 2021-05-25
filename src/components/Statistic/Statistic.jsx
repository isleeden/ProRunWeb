import React from "react";
import styles from "./Statistic.module.scss";

const Statistic = ({ title, value }) => {
  return (
    <div className={styles.statistic}>
      <p className={styles.value}>{value}</p>
      <p className={styles.key}>{title}</p>
    </div>
  );
};

export default Statistic;
