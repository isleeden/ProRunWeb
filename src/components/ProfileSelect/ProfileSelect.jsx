import React from "react";
import Select from "../Select/Select";
import styles from "./ProfileSelect.module.scss";

const ProfileSelect = ({ options, label, value, setValue }) => {
  return (
    <div className={styles.profileSelect}>
      <label>{label}</label>
      <Select
        className={styles.options}
        options={options}
        value={value}
        setValue={setValue}
        defaultArrowDown={true}
      />
    </div>
  );
};

export default ProfileSelect;
