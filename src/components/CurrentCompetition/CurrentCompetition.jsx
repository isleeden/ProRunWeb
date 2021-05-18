import React from "react";
import Button from "../Button/Button";
import styles from "./CurrentCompetition.module.scss";

const CurrentCompetition = ({
  title,
  members,
  distance,
  icon,
  image,
  dark,
}) => {
  return (
    <div
      className={styles.competition}
      style={{ backgroundImage: `url(${image})` }}
    >
      <p className={styles.title}>{title}</p>
      <div className={`${styles.distance} ${dark ? styles.dark : ""}`}>
        <img className={styles.distanceImage} src={icon} alt="icon" />
        <p className={styles.distanceText}>{distance}</p>
      </div>
      <div className={styles.footer}>
        <div>
          <p className={`${styles.membersText} ${dark ? styles.dark : ""}`}>
            +{members}
          </p>
        </div>
        <div className={styles.wrapperButton}>
          <Button buttonText="Участвовать" valid={true} />
        </div>
      </div>
    </div>
  );
};

export default CurrentCompetition;
