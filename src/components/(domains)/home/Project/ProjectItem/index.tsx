"use client";
import { Project } from "@/libs/types";
import styles from "./ProjectItem.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";

const cx = classNames.bind(styles);

interface ProjectItemProps {
  project: Project;
  isActive: boolean;
}

export default function ProjectItem({ project, isActive }: ProjectItemProps) {
  if (!isActive) {
    return (
      <div className={cx("wrapper")}>
        <Image
          width={150}
          height={150}
          src={project.logo}
          alt={project.name + " 로고"}
        />
      </div>
    );
  }
  return (
    <div className={cx("active-wrapper")}>
      <div className={cx("title-line")}>
        <Image
          src={project.textLogo || project.logo}
          width={150}
          height={40}
          alt="프로젝트 로고"></Image>
        <span className={cx("role")}>{project.role}</span>
        <Image
          className={cx("logo-img")}
          src={project.logo}
          width={50}
          height={50}
          alt="프로젝트 로고"></Image>
      </div>
      <div className={cx("skill-wrapper")}>
        <h4 className={cx("skill-title")}>skills</h4>
        <ul className={cx("skill-list")}>
          {project.skills.map(skill => (
            <li
              key={skill}
              className={cx("skill-item")}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <ul>
        {project.pointDescriptions.map((description, index) => (
          <li
            key={index}
            className={cx("description")}>
            {description}
          </li>
        ))}
      </ul>
      <Link
        className={cx("more")}
        href={`project/${project.name}`}>
        자세히 보러 가기
        <Image
          src={"/icons/arrow-right.svg"}
          width={24}
          height={24}
          alt="자세히 보러가기"
        />
      </Link>
    </div>
  );
}
