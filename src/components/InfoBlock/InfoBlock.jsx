import React from "react";
import styles from "./InfoBlock.module.scss";

const InfoBlock = ({ icon, title, value }) => {
  return (
    <div className={styles.block}>
      <div className={styles.iconWrapper}>
        <img src={icon} alt="" />
      </div>
      <div className={styles.textBlock}>
        <p className={styles.text}>{title}</p>
        <p className={styles.text}>{value}</p>
      </div>
    </div>
  );
};

export default InfoBlock;
