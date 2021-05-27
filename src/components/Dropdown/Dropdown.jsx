import React from "react";
import styles from "./Dropdown.module.scss";

const Dropdown = ({ children, className, isActive, reference }) => {
  return (
    <div
      ref={reference}
      className={`${styles.options} ${
        isActive ? styles.active : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Dropdown;
