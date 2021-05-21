import React from "react";
import styles from "./HistoryCompetitionCard.module.scss";

const HistoryCompetitionCard = () => {
  return (
    <div className={styles.card}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={styles.body}>
        <div className={styles.title}>{title}</div>
        <div className={styles.distance}>
          <img src={icon} className={styles.distanceIcon} />
          {distance}
        </div>
        <Button
          valid={!iSparticipate}
          buttonText={iSparticipate ? "Отказаться" : "Участвовать"}
        />
      </div>
    </div>
  );
};

export default HistoryCompetitionCard;
