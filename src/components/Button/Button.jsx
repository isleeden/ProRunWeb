import React from 'react';
import styles from "./Button.module.scss";

const Button = ({valid, buttonText, onClick}) => {
  return (
    <div onClick={onClick} className={`${styles.button} ${valid ? styles.buttonActive : ''}`}>
      {buttonText}
    </div>
  );
}

export default Button;
