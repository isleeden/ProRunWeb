import React from "react";
import styles from "./Modal.module.scss";
import ModalButton from "./ModalButton/ModalButton";
import cross from "../../assets/images/icons/cross.svg";
import moreVertical from "../../assets/images/icons/moreVertical.svg";

const Modal = ({ children, isActive, onClose, onMore, moreButton }) => {
  return (
    <div
      className={`${styles.modalWrapper}  ${
        isActive ? styles.modalActive : ""
      }`}
    >
      <div className={styles.modal}>
        <div className={styles.controls}>
          <div className={styles.buttonWrapper}>
            <ModalButton
              image={moreVertical}
              onClick={onClose}
              isActive={true}
            ></ModalButton>
          </div>
          {moreButton ? (
            <div className={styles.buttonWrapper}>
              <ModalButton
                image={cross}
                onClick={onMore}
                isActive={true}
              ></ModalButton>
            </div>
          ) : (
            ""
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
