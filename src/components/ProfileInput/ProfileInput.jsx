import React from "react";
import styles from "./ProfileInput.module.scss";

const ProfileInput = ({ label, id, value, onChange }) => {
  return (
    <div className={styles.profileInput}>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} value={value} onChange={onChange} />
    </div>
  );
};

export default ProfileInput;
