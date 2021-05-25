import React from "react";
import Layout from "../../../components/layouts/Layout";
import ProfileSelect from "../../../components/ProfileSelect/ProfileSelect";
import styles from "./Settings.module.scss";

const Settings = () => {
  return (
    <Layout>
      <div className="container">
        <p className={styles.title}>Настройки</p>
        <p className={styles.subtitle}>Настройки показа</p>
        <div className={styles.grid}>
          <ProfileSelect
            label="Единицы измерения"
            value="Метрическая система"
          />
          <ProfileSelect label="Температура" value="Градусы по Цельсию" />
          <ProfileSelect label="Вид спорта" value="Бег" />
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
