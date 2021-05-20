import React from 'react';
import styles from "./Button.module.scss";

const Button = ({valid, buttonText, onClick, light = false}) => {
  return (
    <div onClick={onClick} className={`${styles.button} ${valid ? styles.buttonActive : ''} ${light ? styles.buttonLight : ''}`}>
      {buttonText}
    </div>
  );
}

export default Button;
