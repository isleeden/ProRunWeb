import React from "react";
import Layout from "../../../components/layouts/Layout";
import ChooseDistance from "../../../components/ChooseDistance/ChooseDistance";
import styles from "./CurrentCompetitionJoin.module.scss";
import dateIcon from "../../../assets/images/icons/dateIcon.svg";
import Button from "../../../components/Button/Button";

const CurrentCompetitionJoin = () => {
  return (
    <Layout>
      <div className="container">
        <h1 className={styles.title}>Выберите дистанцию</h1>
        <div className={styles.body}>
          <div className={styles.map}></div>
          <div className={styles.event}>
            <div className={styles.header}>
              <div className={styles.row}>
                <img className={styles.image} src="" alt="" />
                <div className={styles.headerText}>
                  <p className={styles.eventTitle}>ProRun Women: Empowerment</p>
                  <p className={styles.date}>
                    <img
                      className={styles.dateIcon}
                      src={dateIcon}
                      alt="date"
                    />
                    Завершено: с 10 по 30 августа, 2020 г
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.chooseDistance}>
              <p className={styles.chooseDistanceTitle}>Дистанция</p>
              <div className={styles.distanceWrapper}>
                <ChooseDistance />
              </div>
              <Button buttonText="Продолжить" valid="true" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CurrentCompetitionJoin;
