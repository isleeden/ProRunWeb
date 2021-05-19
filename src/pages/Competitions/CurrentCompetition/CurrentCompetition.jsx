import React from "react";
import Layout from "../../../components/layouts/Layout";
import Button from "../../../components/Button/Button";
import styles from "./CurrentCompetition.module.scss";
import shareIcon from "../../../assets/images/icons/shareIcon.svg";
import InfoBlock from "../../../components/InfoBlock/InfoBlock";
import infoBlockIcon1 from "../../../assets/images/icons/infoBlockIcon1.svg";
import infoBlockIcon2 from "../../../assets/images/icons/infoBlockIcon2.svg";
import infoBlockIcon3 from "../../../assets/images/icons/infoBlockIcon3.svg";
import infoBlockIcon4 from "../../../assets/images/icons/infoBlockIcon4.svg";
import infoBlockIcon5 from "../../../assets/images/icons/infoBlockIcon5.svg";
import athletica from "../../../assets/images/athletica.svg";
import garmin from "../../../assets/images/garmin.svg";
import meizu from "../../../assets/images/meizu.svg";
import prorun from "../../../assets/images/prorun.svg";
import ChooseDistance from "../../../components/ChooseDistance/ChooseDistance";
import MembersList from "../../../components/MembersList/MembersList";

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

const CurrentCompetition = () => {
  return (
    <Layout>
      <div className="container">
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>ProRun Women: Empowerment</h1>
            <p className={styles.subtitle}>ProRun Women: Empowerment</p>
          </div>
          <div className={styles.buttons}>
            <div className={styles.buttonWrapper}>
              <Button buttonText="Учавствовать" valid={true} />
            </div>
            <div className={styles.shareButtonWrapper}>
              <img src={shareIcon} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.map}></div>
        <div className={styles.infoBlocks}>
          <InfoBlock
            title="Период"
            value="с 10 по 30 августа, 2020 г"
            icon={infoBlockIcon1}
          />
          <InfoBlock
            title="Дистанции"
            value="5, 10 или 15 км"
            icon={infoBlockIcon2}
          />
          <InfoBlock
            title="Участники"
            value="334 (6 прямо сейчас)"
            icon={infoBlockIcon3}
          />
          <InfoBlock
            title="Свободных мест"
            value="Не осталось"
            icon={infoBlockIcon4}
          />
          <InfoBlock
            title="Период"
            value="2, 6 или 8 часов"
            icon={infoBlockIcon5}
          />
        </div>
        <div className={styles.row}>
          <p className={styles.infoTitle}>О мероприятии</p>
          <div className={styles.infoLeft}>
            <p className={styles.infoText}>
              Ежегодный полный красоты и гармонии женский забег. Событие носит
              уникальный характер и призвано привлечь девушек и женщин города и
              региона к активному образу жизни.
            </p>
            <a className={styles.infoRef} href="">
              Подробности и условия
            </a>
          </div>
        </div>
        <div className={styles.row}>
          <p className={styles.infoTitle}>Партнёры мероприятия</p>
          <div className={styles.partnerCards}>
            <div className={styles.partnerCard}>
              <img className={styles.partnerImg} src={meizu} alt="" />
            </div>
            <div className={styles.partnerCard}>
              <img className={styles.partnerImg} src={athletica} alt="" />
            </div>
            <div className={styles.partnerCard}>
              <img className={styles.partnerImg} src={prorun} alt="" />
            </div>
            <div className={styles.partnerCard}>
              <img className={styles.partnerImg} src={garmin} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <p className={styles.infoTitle}>Таблица лидеров</p>
          <div className={styles.leaderboard}>
            <div className={styles.leaderboardHeader}>
              <div>
                <p className={styles.leaderboardTitle}>Лучшие результаты</p>
                <p className={styles.leaderboardSubtitle}>Забег на 10 км</p>
              </div>
              <ChooseDistance />
            </div>
            <MembersList members={members} />
          </div>
        </div>
        <div className={styles.row}>
          <p className={styles.infoTitle}>Подробности и условия</p>
          <div className={styles.infoLeft}>
            <div className={styles.details}>
              <p className={styles.detailsTitle}>Участие</p>
              <p className={styles.detailsBody}>
                Принять участие в состязании могут зарегистрированные
                пользователи ProRun. Полное имя, аватар и активность участников
                соревнования отображаются в рейтинге – эти данные будут доступы
                другим участникам.
              </p>
            </div>
            <div className={styles.details}>
              <p className={styles.detailsTitle}>Отслеживания прогресса</p>
              <p className={styles.detailsBody}>
                Ваша активность в этом соревновании отслеживаются через пробежки
                синхронизированные с ProRun. Засчитываются все пробежки, которые
                отслеживались только с помощью приложения ProRun или партнёрских
                устройств ProRun в период действия состязания.
              </p>
            </div>
            <div className={styles.details}>
              <p className={styles.detailsTitle}>Цель соревнования</p>
              <p className={styles.detailsBody}>
                Завершить забег на выбранную вами дистанцию (5 км), уложившись в
                лимит 4 часа.
              </p>
            </div>
            <div className={styles.details}>
              <p className={styles.detailsTitle}>Начало и окончание</p>
              <p className={styles.detailsBody}>
                Даты начала и окончания соревнования устанавливаются ProRun в
                странице соревнования. Чтобы были засчитаны ваши все результаты,
                выполненные в период действия соревнования, необходимо
                синхронизировать их с ProRun не позднее чем 24 часа после
                окончания вызова.
              </p>
            </div>
            <div className={styles.details}>
              <p className={styles.detailsTitle}>
                Как участвовать в соревновании и отказаться от участия в нём
              </p>
              <p className={styles.detailsBody}>
                Коснитесь кнопки «Участвовать», чтобы принять участие в
                соревновании. Отказаться от участия можно в любое время, выбрав
                соответствующую опцию, во всплывающем меню. Если вы откажетесь
                от участия, данные об активности будут удалены из истории
                участия.
              </p>
            </div>
            <div className={styles.details}>
              <p className={styles.detailsTitle}>Завершение соревнования</p>
              <p className={styles.detailsBody}>
                Соревнование считается завершённым, если достигнута цель
                соревнования
              </p>
            </div>
            <div className={styles.details}>
              <p className={styles.detailsTitle}>Достижения и награды</p>
              <p className={styles.detailsBody}>
                Если вам удалось достичь цели и завершить вызов, вы можете
                получить виртуальную награду об участии или победе в этом
                соревновании.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CurrentCompetition;
