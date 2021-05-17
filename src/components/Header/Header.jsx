import React from "react";
import logo from "../../assets/images/icons/headerLogo.svg";
import myCompetitionsIcon from "../../assets/images/icons/headerMyCompetitions.svg";
import competitionsIcon from "../../assets/images/icons/headerCompetitions.svg";
import loginIcon from "../../assets/images/icons/headerLogin.svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <a href="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </a>
        <div className={styles.nav}>
          <a href="/" className={`${styles.link} ${styles.linkActive}`}>
            <img src={competitionsIcon} className={styles.linkIcon} alt="icon"/>
            Мероприятия
          </a>
          <a href="/" className={styles.link}>
            <img src={myCompetitionsIcon} className={styles.linkIcon} alt="icon"/>
            Мои соревнования
          </a>
        </div>
        <a className={styles.login} href="/">
          <img className={styles.loginIcon} src={loginIcon} alt="login" />
          Войти
        </a>
      </div>
    </header>
  );
};

export default Header;
