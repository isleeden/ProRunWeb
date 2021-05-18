import React from "react";
import styles from "./FutureCompetition.module.scss";
import dateIcon from "../../assets/images/icons/dateIcon.svg"

const FutureCompetition = ({ distance, date, icon, title, image }) => {
  return (
    <div className={styles.competition}>
      <div
        className={styles.competitionImage}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={`${styles.distance}`}>
          <img className={styles.distanceImage} src={icon} alt="icon" />
          <p className={styles.distanceText}>{distance}</p>
        </div>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.date}>
        <img className={styles.dateIcon} src={dateIcon} alt="date" />
        {date}
      </div>
    </div>
  );
};

export default FutureCompetition;
