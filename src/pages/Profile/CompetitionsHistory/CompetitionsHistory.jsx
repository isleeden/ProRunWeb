import React from "react";
import styles from "./CompetitionsHistory.module.scss";
import Layout from "../../../components/layouts/Layout";
import CompetitionsNav from "../../../components/CompetitionsNav/CompetitionsNav";
import Section from "../../../components/Section/Section";
import ProfileHistoryCard from "../../../components/ProfileHistoryCard/ProfileHistoryCard";

const CompetitionsHistory = () => {
  return (
    <Layout>
      <div className="container">
        <h1 className={styles.title}>История соревнований</h1>
        <CompetitionsNav />
        <div className={styles.section}>
          <Section title="Сентябрь" subtitle="Всего медалей: 5">
            <div className={styles.sectionContent}>
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
              />
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
              />
              <ProfileHistoryCard
                title="ProRun Women: Empowerment"
                distance="5 км"
                date="Сегодня в 17:32"
                time="31:57"
              />
            </div>
          </Section>
        </div>
        <div className={styles.section}>
          <Section title="Июль" subtitle="Всего соревнований: 2">
            <div className={styles.sectionContent}>
              <ProfileHistoryCard
                title="ProRun Women: Empowerment"
                distance="5 км"
                date="Сегодня в 17:32"
                time="31:57"
              />
            </div>
          </Section>
        </div>
        <div className={styles.section}>
          <Section title="Сентябрь 2020" subtitle="Всего соревнований: 1">
            <div className={styles.sectionContent}>
              <ProfileHistoryCard
                title="ProRun Women: Empowerment"
                distance="5 км"
                date="Сегодня в 17:32"
                time="31:57"
              />
            </div>
          </Section>
        </div>
      </div>
    </Layout>
  );
};

export default CompetitionsHistory;
