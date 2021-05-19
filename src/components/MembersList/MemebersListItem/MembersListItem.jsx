import React from "react";
import styles from "./MembersListItem.module.scss";

const MembersListItem = ({
  name,
  number,
  place,
  time,
  avatar,
  country,
  even,
}) => {
  let placeStyle = { backgroundColor: "#239A59" };

  switch (place) {
    case 1:
      placeStyle = {
        backgroundColor: "#FFBB00",
      };
      break;
    case 2:
      placeStyle = {
        backgroundColor: "#8F9299",
      };
      break;
    case 3:
      placeStyle = {
        backgroundColor: "#C19166",
      };
      break;

    default:
  }

  return (
    <div className={`${styles.listItem} ${even ? styles.even : ""}`}>
      <div className={styles.row}>
        <p className={styles.place} style={placeStyle}>
          {place}
        </p>
        <div className={styles.avatarWrapper}>
          <img className={styles.avatar} src={avatar} alt="" />
        </div>
        <div>
          <p className={styles.name}>{name}</p>
          <div className={styles.countryNumber}>
            <img className={styles.country} src={country} alt="" />
            <p className={styles.number}>{number}</p>
          </div>
        </div>
      </div>
      <p className={styles.time}>{time}</p>
    </div>
  );
};

export default MembersListItem;
