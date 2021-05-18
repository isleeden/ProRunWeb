import React from "react";
import styles from "./Section.module.scss";
import arrow from "../../assets/images/icons/selectArrow.svg";

const Section = ({ title, subtitle, link, children }) => {
  return (
    <div className={styles.section}>
      <div className={styles.titleWrapper}>
        <p className={styles.title}>{title}</p>
        <a
          className={`${styles.arrow} ${link ? styles.showArrow : ""}`}
          href={link}
        >
          <img src={arrow} alt=">" />
        </a>
      </div>
      <p>{subtitle}</p>
      <div>{children}</div>
    </div>
  );
};

export default Section;
