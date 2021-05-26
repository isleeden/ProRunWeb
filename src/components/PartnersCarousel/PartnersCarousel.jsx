import React from "react";
import styles from "./PartnersCarousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper.scss";
import PartnerCard from "../PartnerCard/PartnerCard";
import ArrowButton from "../ArrowButton/ArrowButton";
SwiperCore.use([Navigation]);

const PartnersCarousel = ({ partners }) => {
  return (
    <div>
      <div>
        <ArrowButton className={styles.controlLeft} />
        <ArrowButton className={styles.controlRight} />
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          prevEl: `.${styles.controlLeft}`,
          nextEl: `.${styles.controlRight}`,
        }}
      >
        {partners.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <PartnerCard Image={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PartnersCarousel;
