import React from "react";
import styles from "./NewsCard.module.scss";

const NewsCard = ({ title, category, date, image }) => {
  return (
    <div>
      <div
        className={styles.card}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.row}>
          <div className={styles.category}>{category}</div>
          <div className={styles.date}>{date}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
