"use client";

import styles from "./ProjectSlide.module.scss";
import classNames from "classnames/bind";
import { PROJECTS } from "@/libs/constants";
import ProjectItem from "../ProjectItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { Navigation, Scrollbar, Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cx = classNames.bind(styles);

export default function ProjectSlide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className={cx("swiper-container", "projects-list")}>
      <Swiper
        modules={[Navigation, Scrollbar, Mousewheel, Autoplay]}
        loop={true}
        navigation={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500
        }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 3, spaceBetween: -250 },
          1024: { slidesPerView: 2.5, spaceBetween: -250 }
        }}
        onSlideChange={swiper => setActiveIndex(swiper.realIndex)}>
        {PROJECTS.map((project, index) => (
          <SwiperSlide
            key={project.name}
            className={cx("list-item")}>
            <ProjectItem
              project={project}
              isActive={index === activeIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
