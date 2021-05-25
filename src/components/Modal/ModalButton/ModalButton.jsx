import React from "react";
import styles from "./ModalButton.module.scss";

const ModalButton = ({ onClick, image, isActive }) => {
  return (
    <div
      className={`${styles.button} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <img src={image} alt="button" />
    </div>
  );
};

export default ModalButton;
