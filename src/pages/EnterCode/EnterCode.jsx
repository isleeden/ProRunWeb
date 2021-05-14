import React from "react";
import styles from "./EnterCode.module.scss";
import Button from "../../components/Button/Button";
import AuthLayout from "../../components/layouts/AuthLayout";

const EnterCode = () => {
  return (
    <AuthLayout
      title="Подтвердите телефон"
      subtitle="Мы отправили смс-код на номер"
    >
      <div className={styles.row}>
        <p className={styles.telephone}>+998 97 111 22 33</p>
        <a href="/" className={styles.changePhone}>
          Изменить номер
        </a>
      </div>
      <p className={styles.try}>
        Отправить ещё раз через<span className={styles.timer}>00:59</span>
      </p>
      <Button buttonText="Подтвердить" valid={false} />
    </AuthLayout>
  );
};

export default EnterCode;
