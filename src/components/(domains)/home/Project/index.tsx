import Link from "next/link";
import styles from "./ProjectSection.module.scss";
import classNames from "classnames/bind";
import ProjectSlide from "./ProjectSlide";

const cx = classNames.bind(styles);

export default function ProjectSection() {
  return (
    <article className={cx("project-slide-wrapper")}>
      <ProjectSlide />
    </article>
  );
}
