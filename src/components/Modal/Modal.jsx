import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ children, isActive, onClose }) => {
  return (
    <div
      className={`${styles.modalWrapper}  ${
        isActive ? styles.modalActive : ""
      }`}
    >
      <div className={styles.modal}>
        <div className={styles.close} onClick={onClose}></div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
