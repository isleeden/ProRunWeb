import React from "react";
import styles from "./MyCompetitionCard.module.scss";
import dateIcon from "../../assets/images/icons/dateIcon.svg";

const MyCompetitionCard = ({
  image,
  isFuture,
  Icon,
  distance,
  title,
  date,
}) => {
  return (
    <div>
      <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
        <p className={styles.distance}>
          <Icon className={styles.distanceIcon} />
          <p>{distance}</p>
        </p>
        <div className={styles.button}>{isFuture ? "Подробнее" : "Старт"}</div>
      </div>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.date}>
          <img className={styles.dateIcon} src={dateIcon} alt="date" />
          {date}
        </div>
      </div>
    </div>
  );
};

export default MyCompetitionCard;
