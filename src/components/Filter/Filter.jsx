import React, { useState, useEffect, useRef } from "react";
import styles from "./Filter.module.scss";
import FilterItem from "./FilterItem/FilterItem";

const filters = [
  {
    isActive: true,
    text: "Всех участников",
  },
  {
    isActive: false,
    text: "Финишёров",
  },
  {
    isActive: false,
    text: "Сошедших с дистанции (DNF)",
  },
  {
    isActive: false,
    text: "Не начавших (DNS)",
  },
];

const Filter = ({ tooltip }) => {
  const [isOver, setIsOver] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const filterElement = useRef();
  const filtersElement = useRef();

  const outsideSelectClickHandler = (e) => {
    if (
      !filterElement.current.contains(e.target) &&
      !filtersElement.current.contains(e.target)
    ) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", outsideSelectClickHandler);
    return () => {
      document.removeEventListener("mousedown", outsideSelectClickHandler);
    };
  }, []);

  const handeClick = () => {
    setIsActive(!isActive);
  };

  const handleFilterClick = (id) => {
    setIsActive(false);
    filters.map((item, index) => {
      if (index === id) {
        return (item.isActive = true);
      } else {
        return (item.isActive = false);
      }
    });
  };

  return (
    <div className={styles.filterWrapper}>
      <div
        className={styles.filter}
        onMouseOver={() => {
          setIsOver(true);
        }}
        onMouseOut={() => {
          setIsOver(false);
        }}
        onClick={handeClick}
        ref={filterElement}
      ></div>
      <div
        className={`${styles.tooltip} ${
          isOver && !isActive ? styles.show : ""
        }`}
      >
        {tooltip}
      </div>
      <div
        className={`${styles.filters} ${isActive ? styles.show : ""}`}
        ref={filtersElement}
      >
        <p className={styles.filtersTitle}>Показать Таблицу</p>
        {filters.map((item, index) => {
          return (
            <FilterItem
              {...item}
              index={index}
              onFilterClick={handleFilterClick}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
