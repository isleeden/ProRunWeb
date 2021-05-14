import React from "react";
import styles from "./EnterPhone.module.scss";
import Button from "../../components/Button/Button";
import PhoneInput from "../../components/PhoneInput/PhoneInput";
import AuthLayout from "../../components/layouts/AuthLayout";

const EnterPhone = () => {
  return (
    <AuthLayout
      title="Введите номер телефона"
      subtitle="Используйте свой номер телефона, чтобы войти или зарегистрироваться"
    >
      <div className={styles.input}>
        <PhoneInput />
        <div>
          <p className={styles.inputError}>Неправильный формат телефона</p>
        </div>      
      </div>
      <Button buttonText="Получить код" valid={true} />
    </AuthLayout>
  );
};

export default EnterPhone;
