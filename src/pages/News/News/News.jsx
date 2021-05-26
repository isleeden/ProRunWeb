import React from "react";
import Layout from "../../../components/layouts/Layout";
import styles from "./News.module.scss";
import CompetitionsNav from "../../../components/CompetitionsNav/CompetitionsNav";
import Section from "../../../components/Section/Section";
import CurrentCompetition from "../../../components/CurrentCompetition/CurrentCompetition";
import FutureCompetition from "../../../components/FutureCompetition/FutureCompetition";
import MembersList from "../../../components/MembersList/MembersList";
import walk from "../../../assets/images/icons/walk.svg";
import run from "../../../assets/images/icons/run.svg";
import bicycle from "../../../assets/images/icons/bicycle.svg";
import image1 from "../../../assets/images/currentCompetition1.png";
import image2 from "../../../assets/images/currentCompetition2.png";
import image3 from "../../../assets/images/futureCompetition1.png";
import image4 from "../../../assets/images/futureCompetition2.png";
import image5 from "../../../assets/images/futureCompetition3.png";
import PastEvent from "../../../components/PastEvent/PastEvent";
import NewsCard from "../../../components/NewsCard/NewsCard";
import { ReactComponent as partner1 } from "../../../assets/images/partner1.svg";
import { ReactComponent as partner2 } from "../../../assets/images/partner2.svg";
import { ReactComponent as partner3 } from "../../../assets/images/partner3.svg";
import PartnersCarousel from "../../../components/PartnersCarousel/PartnersCarousel";

const members = [
  {
    place: 1,
    name: "Евгения Сидоренко",
    country: "",
    number: "3243",
    time: "00:30:32",
    avatar: "",
  },
  {
    place: 2,
    name: "Samantha Brooks",
    country: "",
    number: "3243",
    time: "00:31:04",
    avatar: "",
  },
  {
    place: 3,
    name: "Айжан Самедова",
    country: "",
    number: "3243",
    time: "00:31:48",
    avatar: "",
  },
];

const members2 = [
  {
    place: 1,
    name: "Володимир Хмиль",
    country: "",
    number: "3243",
    time: "00:30:32",
    avatar: "",
  },
  {
    place: 2,
    name: "Руслан Алимов",
    country: "",
    number: "3243",
    time: "00:30:32",
    avatar: "",
  },
  {
    place: 3,
    name: "Баграт Колаян",
    country: "",
    number: "3243",
    time: "00:30:32",
    avatar: "",
  },
];

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
    image: image3,
  },
  {
    title: "Ходьба в центре Ташкента на 5, 10 и 15 км среди любителей",
    distance: "15 км",
    date: "с 15 октября по 15 ноября, 2020 г",
    icon: walk,
    image: image4,
  },
  {
    title: "Ходьба в центре Ташкента среди детей",
    distance: "15 км",
    date: "с 15 октября по 15 ноября, 2020 г",
    icon: walk,
    image: image5,
  },
];

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
              <div className={styles.sectionContent}>
                {currentCompetitions.map((item, index) => {
                  return <CurrentCompetition {...item} key={index} />;
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
            >
              <div className={styles.sectionContent}>
                {futureCompetitions.map((item, index) => {
                  return <FutureCompetition {...item} key={index} />;
                })}
              </div>
            </Section>
          </div>
          <div className={styles.eventSection}>
            <Section
              title="Прошедшие мероприятия"
              subtitle="Результаты и статистика участников прошедших мероприятий"
              link="/"
            >
              <div className={styles.sectionContent}>
                <div className={styles.eventPastWrapper}>
                  <PastEvent
                    title="ProRun Women: Empowerment"
                    date="30 августа, 2020 г"
                    options={["5км", "10км", "15км"]}
                    icon={run}
                  >
                    <MembersList members={members} />
                  </PastEvent>
                </div>
                <div className={styles.eventPastWrapper}>
                  <PastEvent
                    title="Благотварительный забег Samarkand Online Marathon 2020"
                    date="29 сентября, 2020 г"
                    options={["5км", "10км", "15км"]}
                    icon={run}
                  >
                    <MembersList members={members} />
                  </PastEvent>
                </div>
              </div>
            </Section>
          </div>
          <div className={styles.eventSection}>
            <Section
              title="Новости и акции"
              subtitle="Полезные статьи, новости, анонсы и обзоры всех мероприятий"
              link="/"
            >
              <div className={styles.sectionGrid}>
                <NewsCard
                  title="Скидки до 70% на спорттовары от Nike, специально для пользователей ProRun"
                  category="Реклама"
                  date="27 ноября 2020 г"
                  image={image1}
                />
                <NewsCard
                  title="Итоги Самаркандского полумарафона, а также интервью с участниками"
                  category="Новости"
                  date="27 ноября 2020 г"
                  image={image3}
                />
                <NewsCard
                  title="10 рекомедаций от Sponser, которые помогут вам восстановиться после пр…"
                  category="Реклама"
                  date="15 сентябрь 2020 г"
                  image={image5}
                />
              </div>
            </Section>
          </div>
          <div className={styles.eventSection}>
            <Section title="Наши партнёры">
              <div className={styles.sectionSlider}>
                <PartnersCarousel
                  partners={[
                    partner1,
                    partner2,
                    partner3,
                    partner1,
                    partner2,
                    partner3,
                  ]}
                />
              </div>
            </Section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Competitions;
