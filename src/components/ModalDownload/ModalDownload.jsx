import React from "react";
import Modal from "../Modal/Modal";
import styles from "./ModalDownload.module.scss";
import proRunImg from "../../assets/images/prorun_app.png";
import appStore from "../../assets/images/icons/appStore.svg";
import googlePlay from "../../assets/images/icons/googlePlay.svg";

const ModalDownload = () => {
  return (
    <Modal isActive={true}>
      <div className={styles.modal}>
        <img className={styles.img} src={proRunImg} alt="" />
        <p className={styles.title}>
          Пожалуйста, скачайте мобильное приложение ProRun!
        </p>
        <p className={styles.subtitle}>
          Для старта и сохранения ваших результатов, скачайте приложение на
          смартфон или планшет
        </p>
        <div>
          <a className={styles.appLink} href="/">
            <img src={googlePlay} alt="googlePlay" />
          </a>
          <a className={styles.appLink} href="/">
            <img src={appStore} alt="appStore" />
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDownload;
