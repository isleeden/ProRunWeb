import React from "react";
import styles from "./Profile.module.scss";
import Layout from "../../../components/layouts/Layout";
import gift from "../../../assets/images/icons/gift.svg";
import cup from "../../../assets/images/icons/cup.svg";
import shield from "../../../assets/images/icons/shield.svg";
import Section from "../../../components/ProfileSection/ProfileSection";
import ProfileSection from "../../../components/ProfileSection/ProfileSection";
import ProfileHistoryCard from "../../../components/ProfileHistoryCard/ProfileHistoryCard";
import Award from "../../../components/Award/Award";
import award1 from "../../../assets/images/award1.png";
import award2 from "../../../assets/images/award2.png";
import award3 from "../../../assets/images/award3.png";

const Profile = () => {
  return (
    <Layout>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.info}>
            <div className={styles.avatar}>
              {/* <img src="" alt="" className={styles.avatar} /> */}
            </div>
            <div className={styles.about}>
              <p className={styles.name}>Анастасия Афанасьева</p>
              <div className={styles.location}>
                <img className={styles.locationImg} src="" alt="" />
                <p className={styles.locationText}>Ташкент, Узбекистан</p>
              </div>
              <div className={styles.aboutList}>
                <p className={styles.aboutListItem}>
                  <img src={gift} className={styles.aboutListItemIcon} />
                  <p className={styles.aboutListItemText}>
                    Возраст:
                    <span className={styles.aboutListItemValue}>21 год</span>
                  </p>
                </p>
                <p className={styles.aboutListItem}>
                  <img src={cup} className={styles.aboutListItemIcon} />
                  <p className={styles.aboutListItemText}>
                    Соревнований:
                    <span className={styles.aboutListItemValue}>12</span>
                  </p>
                </p>
                <p className={styles.aboutListItem}>
                  <img src={shield} className={styles.aboutListItemIcon} />
                  <p className={styles.aboutListItemText}>
                    Клуб:
                    <a className={styles.aboutListItemRef}>ProRun</a>
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.profileHeaderLeft}>
            <a href="/" className={styles.button}>
              Редактировать профиль
            </a>
            <a href="/" className={styles.settings}></a>
          </div>
        </div>
        <div className={styles.historySection}>
          <ProfileSection
            title="История соревнований"
            number="12"
            subtitle1="5 участий"
            subtitle2="в этом месяце (сентябрь)"
          >
            <div className={styles.historySectionContent}>
              <ProfileHistoryCard
                title="ProRun Women: Empowerment"
                distance="5 км"
                date="Сегодня в 17:32"
                time="31:57"
              />
              <ProfileHistoryCard
                title="ProRun Women: Empowerment"
                distance="5 км"
                date="Сегодня в 17:32"
                time="31:57"
              />{" "}
              <ProfileHistoryCard
                title="ProRun Women: Empowerment"
                distance="5 км"
                date="Сегодня в 17:32"
                time="31:57"
              />
            </div>
          </ProfileSection>
        </div>
        <div className={styles.awardsSection}>
          <ProfileSection
            title="Медальница"
            number="6"
            subtitle1="4 награды"
            subtitle2="в этом месяце (сентябрь)"
          >
            <div className={styles.historySectionContent}>
              <Award
                title="Финишёр"
                image={award1}
                date="29 сентября, 2020"
              ></Award>
              <Award
                title="Рекорд трассы"
                image={award2}
                date="29 сентября, 2020"
              ></Award>
              <Award
                title="Победа"
                image={award3}
                date="29 сентября, 2020"
              ></Award>
            </div>
          </ProfileSection>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
