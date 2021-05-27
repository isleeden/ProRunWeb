import React from "react";
import styles from "./MediaArticle.module.scss";

const MediaArticle = ({ children, title }) => {
  return (
    <div>
      <div>{children}</div>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default MediaArticle;
