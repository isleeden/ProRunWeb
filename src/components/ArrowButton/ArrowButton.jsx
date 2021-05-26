import React from "react";
import styles from "./ArrowButton.module.scss";

const ArrowButton = ({ className }) => {
  return <div className={`${styles.button} ${className}`}></div>;
};

export default ArrowButton;
