import React from "react";
import styles from "./ProfileInfoSecurity.module.scss";

const ProfileInfoSecurity = ({ Icon, action, info }) => {
  return (
    <div className={styles.info}>
      <Icon className={styles.icon} />
      <div>
        <p className={styles.action}>{action}</p>
        <p className={styles.info}>{info}</p>
      </div>
    </div>
  );
};

export default ProfileInfoSecurity;
