import React from "react";
import Button from "../../components/Button/Button";
import AuthLayout from "../../components/layouts/AuthLayout";
import PasswordInput from "../../components/PasswordInput/PasswordInput"

const EnterPassword = () => {
  return (
    <AuthLayout
      title="Введите пароль"
      subtitle="Ваш аккаунт защищен паролем. Чтобы войти, пожалуйста, введите пароль"
    >
      <PasswordInput errorText="Неверный пароль" />
      <Button buttonText="Войти" valid={false} />
    </AuthLayout>
  );
};

export default EnterPassword;
