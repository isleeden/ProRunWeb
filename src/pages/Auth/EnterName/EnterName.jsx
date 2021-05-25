import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import AuthLayout from "../../../components/layouts/AuthLayout";
import namePage from "../../../assets/images/icons/namePage.svg";
import styles from "./EnterName.module.scss";
import Avatar from "../../../components/InputAvatar/InputAvatar";

const EnterName = () => {
  return (
    <div>
      <AuthLayout
        title="Ваше полное имя и фото"
        subtitle="Так ваши друзья смогут найти вас и вы сможете соревноваться вместе"
        icon={namePage}
        steps="Шаг 2 из 4"
      >
        <div className={styles.form}>
          <div className={styles.inputWrapper}>
            <Avatar className={styles.inputAvatar} />
          </div>
          <div className={styles.nameWrapper}>
            <input
              className={styles.firstName}
              type="text"
              placeholder="Введите имя"
            />
            <input
              className={styles.lastName}
              type="text"
              placeholder="Введите фамилию"
            />
          </div>
        </div>
        <Button buttonText="Далее" valid={false} />
      </AuthLayout>
    </div>
  );
};

export default EnterName;
