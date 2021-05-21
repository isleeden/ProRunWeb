import React from "react";
import styles from "./ProfileSection.module.scss";
import arrow from "../../assets/images/icons/selectArrow.svg";

const ProfileSection = ({
  title,
  subtitle1,
  subtitle2,
  link,
  children,
  number,
}) => {
  return (
    <div className={styles.section}>
      <div className={styles.titleWrapper}>
        <p className={styles.title}>{title}</p>
        <a className={styles.number} href="/">
          {number}
        </a>
        <a className={`${styles.arrow}`} href={link}>
          <img src={arrow} alt=">" />
        </a>
      </div>
      <p className={styles.subtitle}>
        {subtitle1}
        <span>{subtitle2}</span>
      </p>
      <div>{children}</div>
    </div>
  );
};

export default ProfileSection;
