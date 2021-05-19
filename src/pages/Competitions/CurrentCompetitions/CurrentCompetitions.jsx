import React from "react";
import Layout from "../../../components/layouts/Layout";
import styles from "./CurrentCompetitions.module.scss";
import CompetitionsNav from "../../../components/CompetitionsNav/CompetitionsNav";
import CurrentCompetitionCard from "../../../components/CurrentCompetitionCard/CurrentCompetitionCard";
import image1 from "../../../assets/images/currentCompetition1.png";
import image2 from "../../../assets/images/currentCompetition2.png";
import run from "../../../assets/images/icons/run.svg";

const currentCompetitions = [
  {
    image: image1,
    icon: run,
    distance: "2, 5 и 10 км",
    iSparticipate: false,
    title: "Осенний забег для прекрасной половины человечества",
  },
  {
    image: image2,
    icon: run,
    distance: "2, 5 и 10 км",
    iSparticipate: true,
    title: "Закрытие сезона 2020 – мужской велопробег",
  },
  {
    image: image1,
    icon: run,
    distance: "2, 5 и 10 км",
    iSparticipate: false,
    title: "Осенний забег для прекрасной половины человечества",
  },
  {
    image: image2,
    icon: run,
    distance: "2, 5 и 10 км",
    iSparticipate: false,
    title: "Закрытие сезона 2020 – мужской велопробег",
  },
  {
    image: image1,
    icon: run,
    distance: "2, 5 и 10 км",
    iSparticipate: false,
    title: "Осенний забег для прекрасной половины человечества",
  },
  {
    image: image2,
    icon: run,
    distance: "2, 5 и 10 км",
    iSparticipate: false,
    title: "Закрытие сезона 2020 – мужской велопробег",
  },
];

const CurrentCompetitions = () => {
  return (
    <Layout>
      <div className="container">
        <h1 className={styles.title}>Текущие мероприятия</h1>
        <CompetitionsNav></CompetitionsNav>
        <div className={styles.competitionCards}>
          {currentCompetitions.map((item) => {
            return <CurrentCompetitionCard {...item} />
          })}
        </div>
      </div>
    </Layout>
  );
};

export default CurrentCompetitions;
