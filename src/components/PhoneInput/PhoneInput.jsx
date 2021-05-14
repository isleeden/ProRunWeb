import React from 'react';
import styles from './PhoneInput.module.scss'

const PhoneInput = () => {
  return (
    <div className={styles.phoneForm}>
      <select name="" id="" className={styles.select}>
        <option>+998</option>
      </select>
      <div className={styles.separator}></div>
      <input className={styles.input} type="text" placeholder="71 123 45 67" />
    </div>
  );
}

export default PhoneInput;
