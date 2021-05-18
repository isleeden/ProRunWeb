import React from "react";
import styles from "./CompetitionsNavItem.module.scss";

const CompetitionsNavItem = ({ title, icon, active }) => {
  return (
    <a href="/" className={`${styles.navItem} ${active ? styles.navItemActive : ""}`}>
      <img className={styles.icon} src={icon} alt="icon" />
      <p className={styles.title}>{title}</p>
    </a>
  );
};

export default CompetitionsNavItem;
