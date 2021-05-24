import React from "react";
import styles from "./Signature.module.scss";

const Signature = ({ image, name, title, disable }) => {
  return (
    <div className={`${styles.signature} ${disable ? styles.disable : ""}`}>
      <img className={styles.signatureImg} src={image} alt="signature" />
      <p className={styles.name}>{name}</p>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default Signature;
