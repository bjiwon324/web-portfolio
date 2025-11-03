"use client";
import { Project } from "@/libs/types";
import styles from "./ProjectItem.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";
import { separateSkills } from "@/libs/utils";

const cx = classNames.bind(styles);

interface ProjectItemProps {
  project: Project;
  isActive?: boolean;
  isList?: boolean;
}

export default function ProjectItem({
  project,
  isActive,
  isList
}: ProjectItemProps) {
  const { matchedSkills, unmatchedSkills } = separateSkills(project.skills);

  if (!isActive && !isList) {
    return (
      <div className={cx("wrapper")}>
        <Image
          fill
          src={project.logo}
          alt={project.name + " 로고"}
          style={{ objectFit: "contain" }}
        />
      </div>
    );
  }
  return (
    <Link
      href={`project/${project.name}`}
      className={cx({ "active-wrapper": isActive }, { "list-item": isList })}>
      <div className={cx("title-line")}>
        <Image
          src={project.textLogo || project.logo}
          width={150}
          height={40}
          style={{ objectFit: "contain" }}
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
          {matchedSkills.map(skill => (
            <li
              key={skill.name}
              className={cx("skill-item", "matched")}>
              {skill.logo && (
                <Image
                  src={skill.logo}
                  alt={`${skill.name} 로고`}
                  width={30}
                  height={30}
                  title={skill.name}
                  style={{ objectFit: "contain" }}
                />
              )}
            </li>
          ))}
          {unmatchedSkills.map(skillName => (
            <li
              key={skillName}
              className={cx("skill-item", "unmatched")}>
              <span>{skillName}</span>
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
        <h5 className={cx("small-title")}>맡은 역할</h5>
        {project.myJobs &&
          project.myJobs.map(
            (job, idx) =>
              job.description !== null && (
                <li
                  className={cx("description")}
                  key={idx}>
                  {job.description}
                </li>
              )
          )}
      </ul>

      <span className={cx("more")}>
        자세히 보러 가기
        <Image
          src={"/icons/arrow-right.svg"}
          width={24}
          height={24}
          alt="자세히 보러가기"
        />
      </span>
    </Link>
  );
}
