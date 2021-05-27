import React from "react";
import Layout from "../../../components/layouts/Layout";
import styles from "./CurrentCompetitionDetails.module.scss";
import Button from "../../../components/Button/Button";
import dateIcon from "../../../assets/images/icons/dateIcon.svg";
import { ReactComponent as Run } from "../../../assets/images/icons/run.svg";

const CurrentCompetitionDetails = () => {
  return (
    <Layout>
      <div className="container">
        <h1 className={styles.title}>Примите условия</h1>
        <div className={styles.row}>
          <div className={styles.detailsLeft}>
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
            <div className={styles.buttons}>
              <Button buttonText="Отказаться" light />
              <Button buttonText="Принять условия" valid />
            </div>
          </div>
          <div className={styles.detailsRight}>
            <div className={styles.eventInfo}>
              <div className={styles.row}>
                <div className={styles.eventLeft}>
                  <img className={styles.image} src="" alt="" />
                  <div className={styles.eventInfoText}>
                    <p className={styles.eventInfoTitle}>
                      ProRun Women: Empowerment
                    </p>
                    <p className={styles.date}>
                      <img
                        className={styles.dateIcon}
                        src={dateIcon}
                        alt="date"
                      />
                      с 10 по 30 августа, 2020 г
                    </p>
                  </div>
                </div>
                <div className={styles.distance}>
                  <Run className={styles.distanceIcon} />
                  <p className={styles.distanceText}>5 км</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CurrentCompetitionDetails;
