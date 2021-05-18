import React from "react";
import CompetitionsNavItem from "./CompetitionsNavItem/CompetitionsNavItem";
import styles from "./CompetitionsNav.module.scss"
import flag from "../../assets/images/icons/flag.svg"
import run from "../../assets/images/icons/run.svg"
import bicycle from "../../assets/images/icons/bicycle.svg"
import walk from "../../assets/images/icons/walk.svg"


const Competitions = () => {
  return (
    <div className={styles.nav}>
      <CompetitionsNavItem title="Все" icon={flag} active={true} />
      <CompetitionsNavItem title="Бег" icon={run}/>
      <CompetitionsNavItem title="Велоспорт" icon={bicycle}/>
      <CompetitionsNavItem title="Ходьба" icon={walk}/>
    </div>
  );
};

export default Competitions;
