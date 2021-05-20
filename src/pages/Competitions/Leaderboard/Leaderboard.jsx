import React from "react";
import Layout from "../../../components/layouts/Layout";
import ChooseDistance from "../../../components/ChooseDistance/ChooseDistance";
import styles from "./Leaderboard.module.scss";
import MembersList from "../../../components/MembersList/MembersList";
import MembersListItem from "../../../components/MembersList/MemebersListItem/MembersListItem";
import Filter from "../../../components/Filter/Filter";

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
  {
    place: 4,
    name: "Володимир Хмиль",
    country: "",
    number: "3243",
    time: "00:30:32",
    avatar: "",
  },
  {
    place: 5,
    name: "Руслан Алимов",
    country: "",
    number: "3243",
    time: "00:30:32",
    avatar: "",
  },
  {
    place: 6,
    name: "Баграт Колаян",
    country: "",
    number: "3243",
    time: "00:30:32",
    avatar: "",
  },
  {
    place: 7,
    name: "Евгения Сидоренко",
    country: "",
    number: "3243",
    time: "00:30:32",
    avatar: "",
  },
  {
    place: 8,
    name: "Samantha Brooks",
    country: "",
    number: "3243",
    time: "00:31:04",
    avatar: "",
  },
  {
    place: 9,
    name: "Айжан Самедова",
    country: "",
    number: "3243",
    time: "00:31:48",
    avatar: "",
  },
  {
    place: 10,
    name: "Володимир Хмиль",
    country: "",
    number: "3243",
    time: "00:30:32",
    avatar: "",
  },
];

const Leaderboard = () => {
  return (
    <Layout>
      <div className="container">
        <div className={styles.title}>Таблица Лидеров</div>
        <div className={styles.row}>
          <div className={styles.leaderboardLeft}>
            <ChooseDistance />
            <div className={styles.subtitle}>
              Все участники
              <a href="/" className={styles.subtitleRef}>
                334
              </a>
            </div>
            <MembersList members={members} />
          </div>
          <div className={styles.leaderboardRight}>
            <div className={styles.row}>
              <input
                className={styles.searchInput}
                type="search"
                placeholder="Поиск по имени или BIB"
              />
              <Filter tooltip="Фильтр таблицы" />
            </div>
            <div className={styles.subtitle}>Мои Результаты</div>
            <div className={styles.result}>
              <MembersListItem
                place="130"
                name="Анастасия Афанасьева (Вы)"
                number="0530"
              />
              <div className={styles.distance}>
                <div className={styles.row}>
                  <div>
                    <p className={styles.distanceTitle}>Дистанция</p>
                    <p className={styles.distanceValue}>
                      <span>5,00</span> из 5,00 км
                    </p>
                  </div>
                  <div>
                    <p className={styles.distanceTitle}>Время</p>
                    <p className={styles.distanceTime}>01:04:30</p>
                  </div>
                </div>
                <div className={styles.distanceLine}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Leaderboard;
