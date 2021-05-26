import React from "react";
import styles from "./PartnerCard.module.scss";

const PartnerCard = ({ Image }) => {
  return (
    <div className={styles.card}>
      <Image className={styles.image} />
    </div>
  );
};

export default PartnerCard;
