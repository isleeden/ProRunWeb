import React, { useState } from "react";
import styles from "./InputAvatar.module.scss";
import { ReactComponent as AvatarIcon } from "../../assets/images/icons/avatarInputIcon.svg";

const InputAvatar = ({ avatar, className }) => {
  const [file, setFile] = useState(avatar);

  const handleChange = (event) => {
    if (event.target.files.length > 0) {
      const file = URL.createObjectURL(event.target.files[0]);
      setFile(file);
    }
  };

  return (
    <div className={`${styles.avatar} ${className}`}>
      <div className={file ? styles.labelHover : ""}>
        <label
          className={styles.label}
          htmlFor="fileInput"
          style={{
            backgroundImage: `url(${file ? file : "none"})`,
            backgroundSize: `${file ? "cover" : "auto"}`,
          }}
        ></label>
        <AvatarIcon
          className={`${styles.avatarIcon} ${
            file ? styles.avatarIconNotActive : ""
          }`}
        />
      </div>
      <input onChange={handleChange} id="fileInput" type="file" />
    </div>
  );
};

export default InputAvatar;
