import React from "react";
import Button from "../../../components/Button/Button";
import AuthLayout from "../../../components/layouts/AuthLayout";
import PasswordInput from "../../../components/PasswordInput/PasswordInput"
import passwordPage from "../../../assets/images/icons/passwordPage.svg"

const ForgotPassword = () => {
  return (
    <AuthLayout
      title="Придумайте пароль"
      subtitle="Защитите свой аккаунт от взломов"
      icon={passwordPage}
    >
      <PasswordInput errorText="Неверный пароль" />
      <Button buttonText="Сохранить" valid={false} />
    </AuthLayout>
  );
};

export default ForgotPassword;
