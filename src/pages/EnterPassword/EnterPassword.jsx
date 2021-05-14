import React from "react";
import styles from "./EnterPassword.module.scss";
import Button from "../../components/Button/Button";
import AuthLayout from "../../components/layouts/AuthLayout";

const EnterPassword = () => {
  return (
    <AuthLayout
      title="Введите пароль"
      subtitle="Ваш аккаунт защищен паролем. Чтобы войти, пожалуйста, введите пароль"
    >
      <input className={styles.inputPassword} type="password" />
      <div className={styles.row}>
        <p className={styles.inputError}>Неверный пароль</p>
        <a href="/" className={styles.forgotPassword}>Забыли пароль?</a>
      </div>
      <Button buttonText="Войти" valid={false} />
    </AuthLayout>
  );
};

export default EnterPassword;
