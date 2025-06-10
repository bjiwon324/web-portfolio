import Link from "next/link";
import styles from "./ProjectSlide.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";

const cx = classNames.bind(styles);

export default function ProjectSlide() {
  return (
    <ul className={cx("projects-list")}>
      <li className={cx("list-item", "main")}>
        <div className={cx("title-line")}>
          <Image
            src={"/icons/binder-logo-text.svg"}
            width={116}
            height={30}
            alt="프로젝트 로고"></Image>
          <span className={cx("role")}>프론트엔드</span>
          <Image
            className={cx("logo-img")}
            src={"/icons/binder-logo.svg"}
            width={50}
            height={50}
            alt="프로젝트 로고"></Image>
        </div>
        <div className={cx("skill-wrapper")}>
          <h4 className={cx("skill-title")}>skills</h4>
          <ul className={cx("skill-list")}>
            <li className={cx("skill-item")}>Next.Js</li>
            <li className={cx("skill-item")}>Next.Js</li>
            <li className={cx("skill-item")}>Next.Js</li>
            <li className={cx("skill-item")}>Next.Js</li>
            <li className={cx("skill-item")}>Next.Js</li>
            <li className={cx("skill-item")}>Next.Js</li>
            <li className={cx("skill-item")}>Next.Js</li>
          </ul>
        </div>
        <p className={cx("description")}>
          주변 공공 쓰레기통을 찾아주는 사이트입니다. 초기 기획부터 서비스
          홍보까지 팀원들과 함께 작업했습니다.
        </p>
        <Link href={"/"}>
          자세히 보러 가기
          <Image
            src={"/icons/icon-arrow-right.svg"}
            alt="자세히 보러가기"
          />
        </Link>
      </li>
    </ul>
  );
}
