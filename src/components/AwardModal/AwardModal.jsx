import React from "react";
import styles from "./AwardModal.module.scss";
import Modal from "../Modal/Modal";
import timeIcon from "../../assets/images/icons/time.svg";
import Signature from "../../components/Signature/Signature";
import signature1 from "../../assets/images/signature1.png";
import signature2 from "../../assets/images/signature2.png";
import signature3 from "../../assets/images/signature3.png";

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

const AwardModal = ({
  image,
  distance,
  title,
  date,
  name,
  time,
  event,
  signatures,
  avatar,
}) => {
  return (
    <Modal isActive moreButton>
      <div className={styles.award}>
        <img className={styles.img} src={image} alt="" />
        <p className={styles.distance}>{distance}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.date}>{date}</p>
        <img className={styles.avatar} src={avatar} alt="avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.congratulation}>
          Поздравляем, вы успешно завершили свой забег в {event}
        </p>
        <p className={styles.time}>
          <img src={timeIcon} alt="time" className={styles.timeIcon} />
          {time}
        </p>
        <div className={styles.signature}>
          <div className={styles.signatureWrapper}>
            <Signature {...signatures[0]} disable />
          </div>
          <div className={styles.signatureWrapper}>
            <Signature {...signatures[1]} />
          </div>
          <div className={styles.signatureWrapper}>
            <Signature {...signatures[2]} disable />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AwardModal;
