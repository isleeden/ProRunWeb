import React from "react";
import styles from "./TextArticle.module.scss";

const TextArticle = ({ text, title }) => {
  return (
    <div>
      {title ? <p className={styles.title}>{title}</p> : ""}
      {text.map((item, index) => {
        return (
          <p className={styles.text} key={index}>
            {item}
          </p>
        );
      })}
    </div>
  );
};

export default TextArticle;
