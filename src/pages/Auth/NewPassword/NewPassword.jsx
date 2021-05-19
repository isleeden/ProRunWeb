import React from "react";
import Button from "../../../components/Button/Button";
import AuthLayout from "../../../components/layouts/AuthLayout";
import PasswordInput from "../../../components/PasswordInput/PasswordInput"
import passwordPage from "../../../assets/images/icons/passwordPage.svg"

const NewPassword = () => {
  return (
    <AuthLayout
      title="Придумайте новый пароль"
      subtitle="Защитите свой аккаунт от взломов"
      icon={passwordPage}
      steps="Шаг 1 из 4"
    >
      <PasswordInput errorText="Неверный пароль" />
      <Button buttonText="Далее" valid={false} />
    </AuthLayout>
  );
};

export default NewPassword;