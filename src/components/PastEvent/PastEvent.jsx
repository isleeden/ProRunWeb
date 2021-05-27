import React, { useState } from "react";
import styles from "./PastEvent.module.scss";
import dateIcon from "../../assets/images/icons/dateIcon.svg";
import Select from "../../components/DistanceSelect/DistanceSelect";

const PastEvent = ({ title, children, date, image, options, icon }) => {
  const [distanceValue, setDistanceValue] = useState(options[0]);

  return (
    <div className={styles.pastEvent}>
      <div className={styles.header}>
        <div className={styles.row}>
          <img className={styles.image} src={image} alt="" />
          <div className={styles.headerText}>
            <p className={styles.title}>{title}</p>
            <p className={styles.date}>
              <img className={styles.dateIcon} src={dateIcon} alt="date" />
              Завершено: {date}
            </p>
          </div>
        </div>
        <div className={styles.select}>
          <Select
            value={distanceValue}
            setValue={setDistanceValue}
            options={options}
            icon={icon}
          />
        </div>
      </div>
      {children}
    </div>
  );
};

export default PastEvent;
