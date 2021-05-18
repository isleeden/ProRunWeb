import React from "react";
import Layout from "../../../components/layouts/Layout";
import styles from "./Competitions.module.scss";
import CompetitionsNav from "../../../components/CompetitionsNav/CompetitionsNav";
import Section from "../../../components/Section/Section";
import CurrentCompetition from "../../../components/CurrentCompetition/CurrentCompetition";
import walk from "../../../assets/images/icons/walk.svg";
import run from "../../../assets/images/icons/run.svg";
import bicycle from "../../../assets/images/icons/bicycle.svg";
import image1 from "../../../assets/images/currentCompetition1.png";
import image2 from "../../../assets/images/currentCompetition2.png";
import image3 from "../../../assets/images/futureCompetition1.png"
import image4 from "../../../assets/images/futureCompetition2.png"
import image5 from "../../../assets/images/futureCompetition3.png"

const currentCompetitions = [
  {
    title: "Женский осенний забег",
    distance: "2, 5 и 10 км",
    members: 23345,
    icon: run,
    image: image1,
  },
  {
    title: "Закрытие сезона 2020 – мужской велопробег",
    distance: "10, 21 и 42 км",
    members: 232,
    icon: bicycle,
    image: image2,
    dark: true,
  },
];

const futureCompetitions = [
  {
    title: "Закрытие сезона 2020 веломарафон Самарканд",
    distance: "42 км",
    date: "с 10 по 30 октября, 2020 г",
    icon: bicycle,
    image: image3
  },
  {
    title: "Ходьба в центре Ташкента на 5, 10 и 15 км среди любителей",
    distance: "15 км",
    date: "с 15 октября по 15 ноября, 2020 г",
    icon: walk,
    image: image4
  },
  {
    title: "Ходьба в центре Ташкента среди детей",
    distance: "15 км",
    date: "с 15 октября по 15 ноября, 2020 г",
    icon: walk,
    image: image5
  }
]

const Competitions = () => {
  return (
    <Layout>
      <div className="container">
        <h1 className={styles.title}>Спортивные мероприятия</h1>
        <CompetitionsNav />
        <div className={styles.events}>
          <div className={styles.eventSection}>
            <Section
              title="Текущие мероприятия"
              subtitle="Участвуйте в мероприятиях, которые проходят прямо сейчас"
              link="/"
            >
              <div className={styles.currentSection}>
                {currentCompetitions.map((item) => {
                  return <CurrentCompetition {...item} />;
                })}
                <a href="/" className={styles.moreCurrentCompetitions}></a>
              </div>
            </Section>
          </div>
          <div className={styles.eventSection}>
            <Section
              title="Будущие мероприятия"
              subtitle="Ну пропустите мероприятия, которые начнутся очень скоро"
              link="/"
            ></Section>
          </div>
          <div className={styles.eventSection}>
            <Section
              title="Прошедшие мероприятия"
              subtitle="Результаты и статистика участников прошедших мероприятий"
              link="/"
            ></Section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Competitions;
