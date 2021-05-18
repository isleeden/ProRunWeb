import React, { useState } from "react";
import Button from "../../components/Button/Button";
import AuthLayout from "../../components/layouts/AuthLayout";
import namePage from "../../assets/images/icons/namePage.svg";
import styles from "./EnterName.module.scss";
import avatar from "../../assets/images/icons/avatarInput.svg";
import avatarWhite from "../../assets/images/icons/avatarInputWhite.svg";

const EnterName = () => {
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    if (event.target.files.length > 0) {
      const file = URL.createObjectURL(event.target.files[0]);
      setFile(file);
    }
  };

  return (
    <div>
      <AuthLayout
        title="Ваше полное имя и фото"
        subtitle="Так ваши друзья смогут найти вас и вы сможете соревноваться вместе"
        icon={namePage}
        steps="Шаг 2 из 4"
      >
        <div className={styles.form}>
          <div className={styles.inputWrapper}>
            <div className={file ? styles.labelHover : ""}>
              <label
                className={styles.label}
                htmlFor="fileInput"
                style={{
                  backgroundImage: `url(${file ? file : avatar})`,
                  backgroundSize: `${file ? "cover" : "auto"}`,
                }}
              ></label>
              <img src={avatarWhite} alt="avatar"/>
            </div>
            <input onChange={handleChange} id="fileInput" type="file" />
          </div>
          <div className={styles.nameWrapper}>
            <input
              className={styles.firstName}
              type="text"
              placeholder="Введите имя"
            />
            <input
              className={styles.lastName}
              type="text"
              placeholder="Введите фамилию"
            />
          </div>
        </div>
        <Button buttonText="Далее" valid={false} />
      </AuthLayout>
    </div>
  );
};

export default EnterName;
