import React from "react";
import styles from "./ProfileHistoryCard.module.scss";
import walk from "../../assets/images/icons/walkGreen.svg";
import timeIcon from "../../assets/images/icons/time.svg";

const ProfileHistoryCard = ({ image, date, title, time, distance }) => {
  return (
    <div style={styles.card}>
      <img className={styles.map} src={image} alt="" />
      <p className={styles.title}>{title}</p>
      <div className={styles.row}>
        <div className={styles.secondaryRow}>
          <img className={styles.icon} src={walk} alt="" />
          {distance}
        </div>
        <div className={styles.secondaryRow}>
          <img className={styles.icon} src={timeIcon} alt="" />
          <p>{time}</p>
        </div>
        <div className={styles.date}>{date}</div>
      </div>
    </div>
  );
};

export default ProfileHistoryCard;
