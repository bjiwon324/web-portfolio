"use client";
import styles from "./ProjectSection.module.scss";
import classNames from "classnames/bind";
import ProjectSlide from "./ProjectSlide";
import { useState } from "react";
import { PROJECTS } from "@/libs/constants";
import ProjectItem from "./ProjectItem";
import { useToggle } from "@/libs/hooks";
import Image from "next/image";

const cx = classNames.bind(styles);

export default function ProjectSection() {
  const [isSlide, setIsSlide] = useToggle(true);

  const toggleBtnImage = isSlide
    ? "/icons/menu-grid-icon.svg"
    : "/icons/carousel-icon.svg";
  return (
    <>
      <article className={cx("btn-line")}>
        <button
          className={cx("button")}
          onClick={setIsSlide}>
          <Image
            src={toggleBtnImage}
            alt="슬라이드/리스트 토글버튼"
            width={34}
            height={34}
          />
        </button>
      </article>
      {isSlide ? (
        <article className={cx("project-slide-wrapper")}>
          <ProjectSlide />
        </article>
      ) : (
        <article>
          <ul className={cx("list")}>
            {PROJECTS.map(project => (
              <ProjectItem
                isList
                project={project}
              />
            ))}
          </ul>
        </article>
      )}
    </>
  );
}
