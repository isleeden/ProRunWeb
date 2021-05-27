import React from "react";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ image, type, title }) => {
  return (
    <div>
      <img className={styles.cardImage} src={image} alt="product" />
      <p className={styles.title}>{title}</p>
      <p className={styles.type}>{type}</p>
    </div>
  );
};

export default ProductCard;
