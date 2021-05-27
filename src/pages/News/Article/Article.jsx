import React from "react";
import styles from "./Article.module.scss";
import Layout from "../../../components/layouts/Layout";
import TextArticle from "../../../components/TextArticle/TextArticle";
import articleImage1 from "../../../assets/images/article1.png";
import articleImage2 from "../../../assets/images/article2.png";
import articleImage3 from "../../../assets/images/article3.png";
import MediaArticle from "../../../components/MediaArticle/MediaArticle";
import productImage1 from "../../../assets/images/product1.png";
import productImage2 from "../../../assets/images/product2.png";
import productImage3 from "../../../assets/images/product3.png";
import productImage4 from "../../../assets/images/product4.png";
import productImage5 from "../../../assets/images/product5.png";
import productImage6 from "../../../assets/images/product6.png";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { ReactComponent as FacebookIcon } from "../../../assets/images/icons/facebookLogo.svg";
import { ReactComponent as TelegramIcon } from "../../../assets/images/icons/telegramLogo.svg";
import { ReactComponent as InstagramIcon } from "../../../assets/images/icons/instagramLogo.svg";
import Section from "../../../components/Section/Section";
import NewsCard from "../../../components/NewsCard/NewsCard";
import image1 from "../../../assets/images/currentCompetition1.png";

const text1 = {
  text: [
    "Первый полумарафон. Новый личный рекорд. Или просто радость движения. Каждый раз, надевая кроссовки, ты готовишься достичь какой-то новой цели. Какой бы она ни была и где бы тебе ни нужно было бежать — по дороге или по бездорожью — мы найдем для тебя подходящую обувь.",
    "Наша статья по подбору беговых кроссовок поможет тебе выбрать идеальную посадку. Итак, для какого типа бега ты подбираешь обувь?",
  ],
};

const text2 = {
  title: "Назначение: ежедневные пробежки",
  text: [
    "Кроссовки прошли многократные тестирования и испытания. Они созданы для повседневного ношения, но в них нет ничего обыденного.",
    "Узнай больше о технологиях Zoom и React, которые отличают модели друг от друга, и выбери кроссовки, которые подойдут именно тебе.",
  ],
};

const text3 = {
  title: "Назначение: ежедневные пробежки",
  text: [
    "Кроссовки прошли многократные тестирования и испытания. Они созданы для повседневного ношения, но в них нет ничего обыденного.",
    "Узнай больше о технологиях Zoom и React, которые отличают модели друг от друга, и выбери кроссовки, которые подойдут именно тебе.",
  ],
};

const text4 = {
  title: "Предназначение: забеги",
  text: [
    "Если ты хочешь развить скорость, тебе нужна технология Zoom. Она используется в наших лучших беговых кроссовках и придает импульс движениям.",
    "Хочешь развить высокую скорость на треке? Наша обувь для легкой атлетики идеально тебе подойдет. Пришло время познакомиться с этой линейкой, не отставай!",
  ],
};

const text5 = {
  title: "Ждём вас в Nike Amir Temur",
  text: [
    `Адрес: ул. Амира Темура, 60
    Телефон: +998 71 234 44 74
    Сайт: nike.uz
    Промокод: ProRun70
    `,
    "На правах рекламы",
  ],
};

const products1 = [
  {
    image: productImage1,
    title: "Nike React Infinity Run Flyknit A.I.R. Cha",
    type: "Беговая обувь",
  },
  {
    image: productImage2,
    title: "Nike React Infinity Run Flyknit",
    type: "Женская беговая обувь",
  },
  {
    image: productImage3,
    title: "Nike React Infinity Run Flyknit",
    type: "Беговая обувь",
  },
];

const products2 = [
  {
    image: productImage4,
    title: "Nike React Infinity Run Flyknit A.I.R. Cha",
    type: "Беговая обувь",
  },
  {
    image: productImage5,
    title: "Nike React Infinity Run Flyknit",
    type: "Женская беговая обувь",
  },
  {
    image: productImage6,
    title: "Nike React Infinity Run Flyknit",
    type: "Беговая обувь",
  },
];

const Article = () => {
  return (
    <Layout>
      <div className="container">
        <div className={styles.containerText}>
          <p className={styles.title}>
            Подбор идеальной пары обуви для вместе с чемпионом Узбекистана по
            бегу
          </p>
          <div className={styles.row}>
            <a href="/" className={styles.category}>
              Рекомедации
            </a>
            <p className={styles.date}>2 декабря 2020 г</p>
          </div>
        </div>
        <MediaArticle title="Фотография от Андрея Куликова на ProRun">
          <img src={articleImage1} alt="" />
        </MediaArticle>
        <div className={styles.containerText}>
          <TextArticle {...text1} />
        </div>
        <MediaArticle title="Фотография от Андрея Куликова на ProRun">
          <img src={articleImage2} alt="" />
        </MediaArticle>
        <div className={styles.containerText}>
          <TextArticle {...text2} />
        </div>
        <div className={styles.grid}>
          {products1.map((item) => {
            return <ProductCard {...item} />;
          })}
        </div>
        <div className={styles.containerText}>
          <TextArticle {...text3} />
        </div>
        <MediaArticle title="Фотография от Андрея Куликова на ProRun">
          <img src={articleImage3} alt="" />
        </MediaArticle>
        <div className={styles.containerText}>
          <TextArticle {...text4} />
        </div>
        <div className={styles.grid}>
          {products2.map((item) => {
            return <ProductCard {...item} />;
          })}
        </div>
        <div className={styles.containerText}>
          <TextArticle {...text5} />
        </div>
        <div className={styles.containerText}>
          <div className={styles.mediaList}>
            <a href="/" className={styles.mediaRef}>
              <FacebookIcon className={styles.mediaIcon} />
            </a>
            <a href="/" className={styles.mediaRef}>
              <InstagramIcon className={styles.mediaIcon} />
            </a>
            <a href="/" className={styles.mediaRef}>
              <TelegramIcon className={styles.mediaIcon} />
            </a>
          </div>
        </div>
        <Section title="Рекомендуем также почитать">
          <div className={styles.grid}>
            <NewsCard
              title="Скидки до 70% на спорттовары от Nike, специально для пользователей ProRun"
              category="Реклама"
              date="27 ноября 2020 г"
              className={styles.card}
              image={image1}
            />
            <NewsCard
              title="Скидки до 70% на спорттовары от Nike, специально для пользователей ProRun"
              category="Реклама"
              date="27 ноября 2020 г"
              className={styles.card}
              image={image1}
            />
            <NewsCard
              title="Скидки до 70% на спорттовары от Nike, специально для пользователей ProRun"
              category="Реклама"
              date="27 ноября 2020 г"
              className={styles.card}
              image={image1}
            />
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default Article;
