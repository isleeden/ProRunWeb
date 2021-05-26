import React from "react";
import Layout from "../../../components/layouts/Layout";
import styles from "./NewsPromotions.module.scss";
import NewsCard from "../../../components/NewsCard/NewsCard";
import image1 from "../../../assets/images/currentCompetition1.png";
import image3 from "../../../assets/images/futureCompetition1.png";
import image5 from "../../../assets/images/futureCompetition3.png";

const NewsPromotions = () => {
  return (
    <Layout>
      <div className="container">
        <p className={styles.title}>Новости и акции</p>
        <div className={styles.grid}>
          <NewsCard
            title="Скидки до 70% на спорттовары от Nike, специально для пользователей ProRun"
            category="Реклама"
            date="27 ноября 2020 г"
            className={styles.card}
            image={image1}
          />
          <NewsCard
            title="Итоги Самаркандского полумарафона, а также интервью с участниками"
            category="Новости"
            date="27 ноября 2020 г"
            className={styles.card}
            image={image3}
          />
          <NewsCard
            title="10 рекомедаций от Sponser, которые помогут вам восстановиться после пр…"
            category="Реклама"
            date="15 сентябрь 2020 г"
            className={styles.card}
            image={image5}
          />
        </div>
      </div>
    </Layout>
  );
};

export default NewsPromotions;
