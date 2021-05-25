import React from "react";
import styles from "./Edit.module.scss";
import Layout from "../../../components/layouts/Layout";
import InputAvatar from "../../../components/InputAvatar/InputAvatar";
import ProfileInput from "../../../components/ProfileInput/ProfileInput";
import ProfileSelect from "../../../components/ProfileSelect/ProfileSelect";
import DateSelect from "../../../components/DateSelect/DateSelect";
import ProfileInfoSecurity from "../../../components/ProfileInfoSecurity/ProfileInfoSecurity";
import { ReactComponent as PhoneIcon } from "../../../assets/images/icons/ProRunIcons_Phone.svg";
import { ReactComponent as KeyIcon } from "../../../assets/images/icons/ProRunIcons_Key.svg";
import { ReactComponent as MailIcon } from "../../../assets/images/icons/ProRunIcons_Mail.svg";

const Edit = () => {
  return (
    <Layout>
      <div className="container">
        <p className={styles.title}>Редактирование профиля</p>
        <div className={styles.avatar}>
          <InputAvatar className={styles.inputAvatar} />
          <div>
            <p className={styles.avatarDesc}>
              Это фото используется в таблицах лидеров, в списках участников и
              победителей соревнований
            </p>
            <p className={styles.changeAvatar}>Изменить Фото</p>
          </div>
        </div>
        <div className={styles.general}>
          <p className={styles.sectionTitle}>Основная информация</p>
          <div className={styles.sectionGrid}>
            <ProfileInput id="name" label="Имя" value="Анастасия" />
            <ProfileInput id="name" label="Фамилия" value="Афанасьева" />
            <ProfileSelect
              options={["Мужской", "Женский"]}
              value="Женский"
              label="Пол"
            />
            <div className={styles.input}>
              <label>Дата рождения</label>
              <DateSelect />
            </div>
            <ProfileInput id="name" label="Рост" value="166 см" />
            <ProfileInput id="name" label="Вес" value="50 кг" />
          </div>
        </div>
        <div className={styles.other}>
          <p className={styles.sectionTitle}>Другая информация</p>
          <div className={styles.sectionGrid}>
            <ProfileInput id="" label="Страна" value="" disable />
            <ProfileSelect
              options={["Ташкент", "Самарканд"]}
              value="Ташкент"
              label="Город"
            />
            <ProfileSelect
              options={["ProRun", "RunPro"]}
              value="ProRun"
              label="Спортивный клуб"
            />
          </div>
        </div>
        <div className={styles.security}>
          <p className={styles.sectionTitle}>Безопасность и вход</p>
          <div className={styles.sectionGrid}>
            <ProfileInfoSecurity
              Icon={PhoneIcon}
              action="+998 97 123 45 67"
              info="Номер телефона"
            />
            <ProfileInfoSecurity
              Icon={KeyIcon}
              action="Изменить пароль"
              info="Обновлен 2 месяца назад"
            />
            <ProfileInfoSecurity
              Icon={MailIcon}
              action="Добавить электронную почту"
              info="Электронная почта"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Edit;
