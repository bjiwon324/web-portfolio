"use client";

import Header from "@/components/(commons)/Header";
import styles from "./ProjectPage.module.scss";
import classNames from "classnames/bind";
import { PROJECTS } from "@/libs/constants";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Project, Skills } from "@/libs/types";
import Image from "next/image";
import Link from "next/link";
import { separateSkills } from "@/libs/utils";

const cx = classNames.bind(styles);

export default function ProjectPage() {
  const [projectInfo, setProjectInfo] = useState<Project | null>(null);
  const params = useParams();
  useEffect(() => {
    const foundProject = PROJECTS.find(project => project.name === params.id);

    if (!foundProject) {
      notFound();
    }

    setProjectInfo(foundProject);
  }, [params.id]);

  if (!projectInfo) {
    // 로딩 스피너 등을 여기에 표시할 수 있습니다.
    return <div>Loading...</div>; // 또는 null;
  }
  const { matchedSkills, unmatchedSkills } = separateSkills(projectInfo.skills);

  return (
    <>
      <Header isHome={false} />
      <main className={cx("main")}>
        <div className={cx("background-img")}>
          <Image
            src={projectInfo.logo}
            alt={`${projectInfo.name} 로고`}
            fill
          />
        </div>
        <section className={cx("main-info", "section")}>
          <h1 className={cx("title")}>{projectInfo.name}</h1>
          <article className={cx("link-line")}>
            <Link
              className={cx("link", "link-address")}
              href={projectInfo.address}>
              <Image
                src={projectInfo.logo}
                alt={`${projectInfo.name} 바로가기`}
                width={40}
                height={40}
              />
              <span className={cx("link-text")}>사이트 바로가기</span>
            </Link>
            <Link
              className={cx("link", "link-github")}
              href={projectInfo.gitRepo}>
              <Image
                src={"/icons/github-mark.svg"}
                alt={`${projectInfo.name} github 바로가기`}
                width={40}
                height={40}
              />
              <span className={cx("link-text")}>깃헙 바로가기</span>
            </Link>
          </article>

          <article className={cx("skills")}>
            <h2 className={cx("mid-title")}>Skills</h2>
            <ul className={cx("skill-list", "list")}>
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
          </article>
          <article className={cx("description")}>
            <h2 className={cx("mid-title")}>Descriptions</h2>
            <p>기간 : {projectInfo.period}</p>
            <ul className={cx("description-list", "list")}>
              {projectInfo.pointDescriptions.map((description, index) => (
                <li
                  key={index}
                  className={cx("description-item")}>
                  {description}
                </li>
              ))}
            </ul>
            <h2 className={cx("mid-title")}>Member</h2>
            {Array.isArray(projectInfo.team) && (
              <ul className={cx("member-list", "list")}>
                {projectInfo.team.map((member, index) => (
                  <li key={index}>{member}</li>
                ))}
              </ul>
            )}
            {projectInfo.team === "private" && <p>개인 작업</p>}
          </article>
        </section>
        {projectInfo.myJobs && (
          <section className={cx("my-job-section")}>
            <div className={cx("section")}>
              <h2 className={cx("mid-title")}>My Role & Contribution</h2>
              {projectInfo.myJobs.map((role, index) => (
                <article
                  key={index}
                  className={cx("role")}>
                  <p className={cx("role-text")}>{role.description}</p>
                  {role.img && (
                    <div className={cx("role-img-box")}>
                      <Image
                        src={role.img}
                        alt="기여한 부분 설명 이미지"
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}
        {projectInfo.troubleShootings && (
          <section className={cx("trouble-shooting-section", "section")}>
            <h2 className={cx("mid-title")}>Trouble Shootings</h2>
            {projectInfo.troubleShootings.map((trouble, index) => (
              <article
                className={cx("trouble-shooting-list", "list")}
                key={index}>
                <h3 className={cx("trouble-shooting-title")}>
                  {trouble.title}
                </h3>
                <h4 className={cx("little-title")}>문제 상황</h4>
                <p
                  className={cx(
                    "trouble-shooting-text",
                    "trouble-shooting-situation"
                  )}>
                  {trouble.problemSituation}
                </p>
                <h4 className={cx("little-title")}>헤결 과정</h4>

                {trouble.process.map((pro, idx) => (
                  <div
                    className={cx("trouble-shooting-process-list", "list")}
                    key={idx}>
                    <h4 className={cx("trouble-shooting-process-title")}>
                      {pro.littleTitle}
                    </h4>
                    <p className={cx("trouble-shooting-process-text")}>
                      {pro.text}
                    </p>
                    {pro.more && (
                      <p
                        className={cx(
                          "trouble-shooting-process-text",
                          "trouble-shooting-process-text-more"
                        )}>
                        {pro.more}
                      </p>
                    )}
                  </div>
                ))}
                <h4 className={cx("little-title")}>결과</h4>
                <ul className={cx("trouble-shooting-result-list", "list")}>
                  {trouble.result.map((res, idx) => (
                    <li
                      key={idx}
                      className={cx(
                        "trouble-shooting-text",
                        "trouble-shooting-result-item"
                      )}>
                      {res}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        )}
      </main>
    </>
  );
}
