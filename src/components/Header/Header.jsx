import React from "react";
import logo from "../../assets/images/icons/headerLogo.svg";
import { ReactComponent as CupIcon } from "../../assets/images/icons/ProRunIcons_Cup.svg";
import { ReactComponent as ActivityIcon } from "../../assets/images/icons/ProRunIcons_Activity.svg";
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
            <CupIcon className={styles.linkIcon} />
            Мероприятия
          </a>
          <a href="/" className={styles.link}>
            <ActivityIcon className={styles.linkIcon} />
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
