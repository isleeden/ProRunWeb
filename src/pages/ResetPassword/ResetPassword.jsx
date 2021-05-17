import React from "react";
import ReactCodeInput from "react-code-input";
import Button from "../../components/Button/Button";
import AuthLayout from "../../components/layouts/AuthLayout";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import styles from "./ResetPassword.module.scss";

const ResetPassword = () => {
  return (
    <AuthLayout
      title="Введите пароль"
      subtitle="Для сброса пароля, пожалуйста, введите 
      смс-код, который мы отправили на ваш 
      номер"
    >
      <ReactCodeInput className={styles.input} type="text" fields={6} />
      <p className={styles.try}>
        Отправить ещё раз через<span className={styles.timer}>00:59</span>
      </p>
      <Button buttonText="Сброс" valid={false} />
    </AuthLayout>
  );
};

export default ResetPassword;
