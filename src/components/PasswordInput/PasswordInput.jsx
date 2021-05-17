import React, { useState } from "react";
import styles from "./PasswordInput.module.scss";
import eyeIcon from "../../assets/images/icons/passwordEyeIcon.svg";
import closeEyeIcon from "../../assets/images/icons/passwordCloseEyeIcon.svg";

const PasswordInput = ({errorText, value, onChange}) => {
  const [isPasswordShown, setIsPasswordShow] = useState(false);

  const iconClickHandler = () => {
    setIsPasswordShow(!isPasswordShown);
  };

  return (
    <div>
      <div className={styles.inputWrapper}>
        <input
          className={styles.inputPassword}
          placeholder="Введите пароль"
          type={isPasswordShown ? "text" : "password"}
          value={value}
          onChange={onChange}
        />
        <img
          className={styles.inputPasswordIcon}
          src={isPasswordShown ? closeEyeIcon : eyeIcon}
          alt="icon"
          onClick={iconClickHandler}
        />
      </div>
      <div className={styles.row}>
        <p className={styles.inputError}>{errorText}</p>
        <a href="/" className={styles.forgotPassword}>
          Забыли пароль?
        </a>
      </div>
    </div>
  );
};

export default PasswordInput;
