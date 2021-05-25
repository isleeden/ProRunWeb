import React from "react";
import styles from "./ProfileInput.module.scss";

const ProfileInput = ({ label, id, value, onChange, disable }) => {
  return (
    <div className={`${styles.profileInput} ${disable ? styles.disable : ""}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        disabled={disable ? "disabled" : ""}
      />
    </div>
  );
};

export default ProfileInput;
