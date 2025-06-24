import Image from "next/image";
import styles from "./About.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import { useThemeStore } from "@/store/themeStore";

const cx = classNames.bind(styles);

export default function AboutSection() {
  const theme = useThemeStore(state => state.theme);
  const logoSrc =
    theme === "dark" ? "/icons/logo-white.svg" : "/icons/logo.svg";

  return (
    <article className={cx("about")}>
      <div className={cx("inner")}>
        <div className={cx("img-box")}>
          <Image
            src={"/images/me.jpg"}
            alt="접니다"
            fill
          />
        </div>
        <div className={cx("text-box")}>
          <Image
            src={logoSrc}
            alt="logo"
            width={100}
            height={26}
          />
          <p className={cx("description")}>
            문제 해결과 사용자 경험을 개선하는 데서 즐거움을 느끼는 프론트엔드
            개발자이자 디자이너입니다.
          </p>
          <p className={cx("description")}>
            단순히 작동하는 화면이 아니라 보기에 좋고 쓰기 편한 UI를 만들기 위해
            늘 고민합니다.
          </p>
          <p className={cx("description")}>
            <Link
              className={cx("point")}
              href={"/project/binder"}>
              ‘쓰레기통 위치 및 정보 관리 서비스(binder)’
            </Link>{" "}
            프로젝트에서는 지도 기반 UI, 사용자 편의 기능, 효율적인 데이터 흐름
            설계 등 실무에 가까운 경험을 했습니다.
          </p>
          <p className={cx("description")}>
            프론트 엔드를 먼저 공부하며 더 사용자 친화적이고 접근성 높은
            사이트를 만들기 위해 포토샵, 일러스트레이터, 피그마 등을 심도 있게
            공부했습니다.
          </p>
        </div>
      </div>
    </article>
  );
}
