import React from "react";
import styles from "./AuthLayout.module.scss";
import logo from "../../assets/images/icons/logo.svg";

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.container}`}>
        <div className={styles.main}>
          <a href="/">
            <img className={styles.logo} src={logo} alt="logo" />
          </a>
          <div className={styles.form}>
            <p className={styles.formTitle}>{title}</p>
            <p className={styles.formSubTitle}>{subtitle}</p>
            {children}
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerLeft}>
            <p className={styles.copyright}>© 2017–2020 ООО «ProRun»</p>
            <a href="/" className={styles.footerLink}>
              Пользовательское соглашение
            </a>
          </div>
          <div>
            <a href="/" className={styles.footerLink}>
              Русский
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
