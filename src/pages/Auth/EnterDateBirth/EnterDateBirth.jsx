import React, { useState } from "react";
import dateBirthPage from "../../../assets/images/icons/dateBirthPage.svg";
import Button from "../../../components/Button/Button";
import AuthLayout from "../../../components/layouts/AuthLayout";
import Select from "../../../components/Select/Select";
import styles from "./EnterDateBirth.module.scss";

const options1 = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];
const options2 = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
const generateYear = () => {
  const year = new Date().getFullYear();
  return Array.from({ length: year - 1900 }, (value, index) => 1901 + index);
};
const years = generateYear();

const EnterDateBirth = () => {

  const [value1, setValue1] = useState(options1[0]);
  const [value2, setValue2] = useState(options2[0]);
  const [year, setYear] = useState(years[years.length - 1]);

  return (
    <AuthLayout
      title="Дата рождения"
      subtitle="Так мы сможем подобрать подходящие вашему возрасту соревнования"
      icon={dateBirthPage}
      steps="Шаг 4 из 4"
    >
      <div className={styles.selects}>
        <Select
          value={value1}
          options={options1}
          setValue={setValue1}
          width="82px"
        />
        <Select
          value={value2}
          options={options2}
          setValue={setValue2}
          width="142px"
        />
        <Select value={year} options={years} setValue={setYear} width="102px" />
      </div>
      <Button buttonText="Далее" valid={false} />
    </AuthLayout>
  );
};

export default EnterDateBirth;
