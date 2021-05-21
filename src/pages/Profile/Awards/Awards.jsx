import React from "react";
import styles from "./Awards.module.scss";
import Layout from "../../../components/layouts/Layout";
import CompetitionsNav from "../../../components/CompetitionsNav/CompetitionsNav";
import Section from "../../../components/Section/Section";
import Award from "../../../components/Award/Award";
import award1 from "../../../assets/images/award1.png";
import award2 from "../../../assets/images/award2.png";
import award3 from "../../../assets/images/award3.png";

const Awards = () => {
  return (
    <Layout>
      <div className="container">
        <h1 className={styles.title}>Медальница</h1>
        <CompetitionsNav />
        <div className={styles.section}>
          <Section title="Сентябрь" subtitle="Всего медалей: 5">
            <div className={styles.sectionContent}>
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
              <Award
                title="Победа"
                image={award3}
                date="29 сентября, 2020"
              ></Award>
            </div>
          </Section>
          <div className={styles.section}>
            <Section title="Июль 2019" subtitle="Всего медалей: 1">
              <div className={styles.sectionContent}>
                <Award
                  title="Финишёр"
                  image={award1}
                  date="29 сентября, 2020"
                ></Award>
              </div>
            </Section>
          </div>
          <div className={styles.section}>
            <Section title="Май 2019" subtitle="Всего медалей: 1">
              <div className={styles.sectionContent}>
                <Award
                  title="Рекорд трассы"
                  image={award2}
                  date="29 сентября, 2020"
                ></Award>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Awards;
