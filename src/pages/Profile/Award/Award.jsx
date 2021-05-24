import React from "react";
import Layout from "../../../components/layouts/Layout";
import styles from "./Award.module.scss";
import award from "../../../assets/images/award1.png";
import MembersListItem from "../../../components/MembersList/MemebersListItem/MembersListItem";
import signature1 from "../../../assets/images/signature1.png";
import signature2 from "../../../assets/images/signature2.png";
import signature3 from "../../../assets/images/signature3.png";
import Signature from "../../../components/Signature/Signature";
import AwardModal from "../../../components/AwardModal/AwardModal";

const member = {
  place: 1,
  name: "Евгения Сидоренко",
  country: "",
  number: "3243",
  time: "",
  avatar: "",
};
const distance = "Забег на 5 км";
const event = "ProRun Women: Empowerment!";
const title = "Финишёр";
const date = "29 сентября, 2020";
const signatures = [
  {
    image: signature1,
    name: "Константин Константиновский",
    title: "Руководитель федерации лёгкой атлетики Узбекистана",
  },
  {
    image: signature2,
    name: "Андрей Куликов",
    title: "Заслуженный мастер спорта и чемпион Республики Узбекистан по бегу",
  },
  {
    image: signature3,
    name: "Саидмурат Саллахуджаев",
    title: "Министр физической культуры и спорта Республики Узбекистан",
  },
];

const Award = () => {
  return (
    <Layout>
      <AwardModal
        name="Евгения Сидоренко"
        time={"00 : 31 : 54"}
        image={award}
        distance={distance}
        event={event}
        title={title}
        date={date}
        signatures={signatures}
      ></AwardModal>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <div className={styles.imageWrapper}>
              <img src={award} alt="award" />
            </div>
            <div>
              <p className={styles.distance}>{distance}</p>
              <p className={styles.title}>{title}</p>
              <MembersListItem transparent {...member} />
              <p className={styles.congratulation}>
                Поздравляем, вы успешно завершили свой забег в {event}
              </p>
              <p className={styles.date}>{date}</p>
            </div>
          </div>
          <div className={styles.controls}></div>
        </div>
        <div className={styles.signatures}>
          {signatures.map((item, index) => {
            return <Signature {...item} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Award;
