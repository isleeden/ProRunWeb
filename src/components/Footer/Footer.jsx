import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../assets/images/icons/headerLogo.svg";
import appStore from "../../assets/images/icons/appStore.svg";
import googlePlay from "../../assets/images/icons/googlePlay.svg";
import { ReactComponent as ALogo } from "../../assets/images/icons/aLogo.svg";
import { ReactComponent as TelegramLogo } from "../../assets/images/icons/telegramLogo.svg";
import { ReactComponent as InstagramLogo } from "../../assets/images/icons/instagramLogo.svg";
import { ReactComponent as FacebookLogo } from "../../assets/images/icons/facebookLogo.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <div className={styles.appLinks}>
            <a className={styles.appLink} href="/">
              <img src={googlePlay} alt="googlePlay" />
            </a>
            <a className={styles.appLink} href="/">
              <img src={appStore} alt="appStore" />
            </a>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.columnList}>
            <p className={styles.columnListTitle}>Мероприятия</p>
            <p className={styles.columnListText}>Текущие мероприятия</p>
            <p className={styles.columnListText}>Будущие мероприятия</p>
            <p className={styles.columnListText}>Прошедшие мероприятия</p>
          </div>
          <div className={styles.columnList}>
            <p className={styles.columnListTitle}>Мои соревнования</p>
            <p className={styles.columnListText}>Активные соревнования</p>
            <p className={styles.columnListText}>Будущие соревнования</p>
          </div>
          <div className={styles.columnList}>
            <p className={styles.columnListTitle}>О компании</p>
            <p className={styles.columnListText}>Контакты</p>
            <p className={styles.columnListText}>Стать партнёром</p>
            <p className={styles.columnListText}>Сайт школы бега ProRun</p>
          </div>
          <div className={styles.columnList}>
            <p className={styles.columnListTitle}>Подписывайтесь</p>
            <div className={styles.mediaList}>
              <a href="/">
                <FacebookLogo className={styles.mediaLogo} />
              </a>
              <a href="/">
                <InstagramLogo className={styles.mediaLogo} />
              </a>
              <a href="/">
                <TelegramLogo className={styles.mediaLogo} />
              </a>
              <a href="/" className={styles.mediaLogo}>
                <ALogo />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <p className={styles.copyright}>© 2017–2020 ООО «ProRun»</p>
            <a href="/" className={styles.bottomLink}>
              Пользовательское соглашение
            </a>
          </div>
          <div>
            <a href="/" className={styles.bottomLink}>
              Русский
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
