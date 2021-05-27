import React from "react";
import styles from "./CompetitionsNavItem.module.scss";

const CompetitionsNavItem = ({ title, Icon, active }) => {
  return (
    <a
      href="/"
      className={`${styles.navItem} ${active ? styles.navItemActive : ""}`}
    >
      <Icon className={styles.icon} />
      <p className={styles.title}>{title}</p>
    </a>
  );
};

export default CompetitionsNavItem;
