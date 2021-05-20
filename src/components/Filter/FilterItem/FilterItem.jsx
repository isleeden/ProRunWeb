import React from "react";
import styles from "./FilterItem.module.scss";

const FilterItem = ({ isActive, text, onFilterClick, index }) => {
  const handleClick = () => {
    onFilterClick(index);
  };

  return (
    <div className={styles.item} onClick={handleClick}>
      <div className={styles.radio}>
        <div
          className={`${styles.radioCircle} ${
            isActive ? styles.radioCircleActive : ""
          }`}
        ></div>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default FilterItem;
