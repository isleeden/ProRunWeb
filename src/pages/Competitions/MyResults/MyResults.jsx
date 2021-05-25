import React from "react";
import styles from "./MyResults.module.scss";
import Award from "../../../components/Award/Award";
import Layout from "../../../components/layouts/Layout";
import { ReactComponent as Run } from "../../../assets/images/icons/ProRunIcons_Run.svg";
import Statistic from "../../../components/Statistic/Statistic";
import award1 from "../../../assets/images/award1.png";
import award2 from "../../../assets/images/award2.png";
import award3 from "../../../assets/images/award3.png";

const statisticData = {
  statistic: [
    { title: "Время", value: "31:57" },
    { title: "Дистанция", value: "5 км" },
    { title: "Средн. темп", value: `6'24" /км` },
    { title: "Макс. темп", value: `5'32" /км` },
    { title: "Набор высоты", value: `13 м` },
    { title: "Макс высоты", value: `428 м` },
    { title: "Пульс", value: "--" },
    { title: "Калории", value: "341" },
  ],
  segments: [],
};

const awardsData = [
  { title: "Финишёр", image: { award1 }, date: "29 сентября, 2020" },
  { title: "Рекорд трассы", image: { award2 }, date: "29 сентября, 2020" },
  {
    title: "Победа",
    image: { award3 },
    date: "29 сентября, 2020",
  },
];

const MyResults = () => {
  return (
    <Layout>
      <div className="container">
        <p className={styles.title}>Мои результаты </p>
        <div className={styles.header}>
          <img className={styles.avatar}></img>
          <div>
            <p className={styles.headerTitle}>ProRun Women: Empowerment</p>
            <div className={styles.headerValues}>
              <p className={styles.distance}>
                <Run className={styles.distanceIcon} />5 км
              </p>
              <p className={styles.time}>Сегодня в 17:32</p>
            </div>
          </div>
        </div>
        <div className={styles.mapSection}>
          <p className={styles.sectionTitle}>Карта соревнования</p>
          <p className={styles.mapSubtitle}>
            Сертифицированная карта этого соревнования
          </p>
          <div className={styles.map}>
            <img src="" alt="map" />
            <div className={styles.mapControls}>
              <div className={`${styles.mapItem} ${styles.active}`}></div>
              <div className={styles.mapItem}></div>
            </div>
          </div>
        </div>
        <div className={styles.statisticSection}>
          <div className={styles.statistic}>
            <p className={styles.sectionTitle}>Статистика</p>
            <div className={styles.statisticGrid}>
              {statisticData.statistic.map((item, index) => {
                return <Statistic {...item} key={index} />;
              })}
            </div>
          </div>
          <div className={styles.segments}>
            <p className={styles.sectionTitle}>Отрезки</p>
          </div>
        </div>
        <div className={styles.awardsSection}>
          <p className={styles.sectionTitle}>Трофеи</p>
          <div className={styles.awardsGrid}>
            {awardsData.map((item, index) => {
              return <Award {...item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyResults;
