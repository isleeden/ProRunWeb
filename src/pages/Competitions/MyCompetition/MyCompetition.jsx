import React from "react";
import Layout from "../../../components/layouts/Layout";
import styles from "./MyCompetition.module.scss";
import CompetitionsNav from "../../../components/CompetitionsNav/CompetitionsNav";
import Filter from "../../../components/Filter/Filter";
import Section from "../../../components/Section/Section";
import MyCompetitionCard from "../../../components/MyCompetitionCard/MyCompetitionCard";
import { ReactComponent as run } from "../../../assets/images/icons/run.svg";
import { ReactComponent as bicycle } from "../../../assets/images/icons/bicycle.svg";
import { ReactComponent as walk } from "../../../assets/images/icons/walk.svg";
import image1 from "../../../assets/images/currentCompetition1.png";
import image2 from "../../../assets/images/currentCompetition2.png";
import image3 from "../../../assets/images/futureCompetition1.png";

const currentCompetitions = [
  {
    title: "ProRun Women: Empowerment",
    distance: "5 км",
    Icon: run,
    image: image1,
    date: "с 15 октября по 15 ноября, 2020 г",
  },
  {
    title: "Ходьба в центре Ташкента на 5, 10 и 15 км среди любителей",
    distance: "15 км",
    Icon: walk,
    image: image2,
    date: "с 1 октября по 31 октября, 2020 г",
  },
];

const futureCompetitions = [
  {
    title: "Благотварительный забег Samarkand Online Marathon 2020",
    distance: "42 км",
    date: "с 10 по 30 октября, 2020 г",
    Icon: bicycle,
    image: image3,
  },
  {
    title: "Закрытие сезона 2020 – мужской велопробег",
    distance: "35 км",
    date: "с 1 сентября по 30 сентября, 2020 г",
    Icon: bicycle,
    image: image2,
  },
  {
    title: "Женский осенний забег",
    distance: "2, 5 и 10 км",
    date: "с 15 октября по 15 ноября, 2020 г",
    Icon: walk,
    image: image1,
  },
  {
    title: "Ходьба в центре Ташкента на 5, 10 и 15 км среди любителей",
    distance: "15 км",
    Icon: walk,
    image: image2,
    date: "с 1 октября по 31 октября, 2020 г",
  },
];

const MyCompetition = () => {
  return (
    <Layout>
      <div className="container">
        <div className={styles.title}>Мои соревнования</div>
        <div className={styles.nav}>
          <CompetitionsNav />
          <Filter tooltip="Показать список" />
        </div>
        <Section
          title="Активные соревнования"
          subtitle="На старт, внимание, марш!"
        >
          <div className={styles.sectionContent}>
            {currentCompetitions.map((item) => {
              return <MyCompetitionCard {...item} />;
            })}
          </div>
        </Section>
        <div className={styles.separator}></div>
        <Section
          title="Будущие соревнования"
          subtitle="Осталось совсем немного"
        >
          <div className={styles.sectionContent}>
            {futureCompetitions.map((item) => {
              return <MyCompetitionCard {...item} isFuture={true} />;
            })}
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default MyCompetition;
