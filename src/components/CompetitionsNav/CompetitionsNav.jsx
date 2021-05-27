import React from "react";
import CompetitionsNavItem from "./CompetitionsNavItem/CompetitionsNavItem";
import styles from "./CompetitionsNav.module.scss";
import { ReactComponent as flag } from "../../assets/images/icons/flag.svg";
import { ReactComponent as run } from "../../assets/images/icons/run.svg";
import { ReactComponent as bicycle } from "../../assets/images/icons/bicycle.svg";
import { ReactComponent as walk } from "../../assets/images/icons/walk.svg";

const Competitions = () => {
  return (
    <div className={styles.nav}>
      <CompetitionsNavItem title="Все" Icon={flag} active={true} />
      <CompetitionsNavItem title="Бег" Icon={run} />
      <CompetitionsNavItem title="Велоспорт" Icon={bicycle} />
      <CompetitionsNavItem title="Ходьба" Icon={walk} />
    </div>
  );
};

export default Competitions;
