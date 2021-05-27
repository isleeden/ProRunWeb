import React from "react";
import dateBirthPage from "../../../assets/images/icons/dateBirthPage.svg";
import Button from "../../../components/Button/Button";
import AuthLayout from "../../../components/layouts/AuthLayout";
import styles from "./EnterDateBirth.module.scss";
import DateSelect from "../../../components/DateSelect/DateSelect";

const EnterDateBirth = () => {
  return (
    <AuthLayout
      title="Дата рождения"
      subtitle="Так мы сможем подобрать подходящие вашему возрасту соревнования"
      icon={dateBirthPage}
      steps="Шаг 4 из 4"
    >
      <div className={styles.dateSelectWrapper}>
        <DateSelect />
      </div>
      <Button buttonText="Далее" valid={false} />
    </AuthLayout>
  );
};

export default EnterDateBirth;
