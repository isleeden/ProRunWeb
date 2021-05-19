import React from "react";
import styles from "./CurrentCompetitionCard.module.scss";
import Button from "../Button/Button"

const CurrentCompetitionCard = ({
  icon,
  distance,
  image,
  title,
  iSparticipate,
}) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={styles.body}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.distance}>
          <img src={icon} className={styles.distanceIcon} />
          {distance}
        </div>
        <Button valid={!iSparticipate} buttonText={iSparticipate ? "Отказаться" : "Участвовать"} />
      </div>
    </div>
  );
};

export default CurrentCompetitionCard;
