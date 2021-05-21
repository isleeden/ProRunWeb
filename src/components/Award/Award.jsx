import React from "react";
import styles from "./Award.module.scss";

const Award = ({ image, title, date }) => {
  return (
    <div className={styles.award}>
      <img className={styles.img} src={image} alt="award" />
      <p className={styles.title}>{title}</p>
      <p className={styles.date}> {date}</p>
    </div>
  );
};

export default Award;
