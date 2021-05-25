import React, { useState } from "react";
import Select from "../Select/Select";
import styles from "./DateSelect.module.scss";

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

const DateSelect = () => {
  const [value1, setValue1] = useState(options1[0]);
  const [value2, setValue2] = useState(options2[0]);
  const [year, setYear] = useState(years[years.length - 1]);

  return (
    <div className={styles.selects}>
      <Select value={value1} options={options1} setValue={setValue1} />
      <Select value={value2} options={options2} setValue={setValue2} />
      <Select value={year} options={years} setValue={setYear} />
    </div>
  );
};

export default DateSelect;
