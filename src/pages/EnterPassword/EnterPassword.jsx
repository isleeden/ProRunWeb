import React, { useState } from "react";
import styles from "./EnterPassword.module.scss";
import Button from "../../components/Button/Button";
import AuthLayout from "../../components/layouts/AuthLayout";
import eyeIcon from "../../assets/images/icons/passwordEyeIcon.svg";
import closeEyeIcon from "../../assets/images/icons/passwordCloseEyeIcon.svg";

const EnterPassword = () => {
  const [isPasswordShown, setIsPasswordShow] = useState(false);

  const iconClickHandler = () => {
    setIsPasswordShow(!isPasswordShown);
  };

  return (
    <AuthLayout
      title="Введите пароль"
      subtitle="Ваш аккаунт защищен паролем. Чтобы войти, пожалуйста, введите пароль"
    >
      <div className={styles.inputWrapper}>
        <input
          className={styles.inputPassword}
          placeholder="Введите пароль"
          type={isPasswordShown ? "password" : "text"}
        />
        <img
          className={styles.inputPasswordIcon}
          src={isPasswordShown ? closeEyeIcon : eyeIcon}
          alt="icon"
          onClick={iconClickHandler}
        />
      </div>
      <div className={styles.row}>
        <p className={styles.inputError}>Неверный пароль</p>
        <a href="/" className={styles.forgotPassword}>
          Забыли пароль?
        </a>
      </div>
      <Button buttonText="Войти" valid={false} />
    </AuthLayout>
  );
};

export default EnterPassword;
