import Image from "next/image";
import styles from "./About.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";

const cx = classNames.bind(styles);

export default function AboutSection() {
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
            src={"/icons/logo.svg"}
            alt="logo"
            width={100}
            height={26}
          />
          <p className={cx("description")}>
            문제 해결과 사용자 경험을 개선하는 데서 즐거움을 느끼는 프론트엔드
            개발자입니다.
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
            </Link>
            프로젝트에서는 지도 기반 UI, 사용자 편의 기능, 효율적인 데이터 흐름
            설계 등 실무에 가까운 경험을 했습니다.
          </p>
          <p className={cx("description")}>
            앞으로도 사용자 중심의 인터페이스를 고민하며, 디자인 감각과 기술을
            겸비한 프론트엔드 개발자이자 디자이너로 성장해 나가고자 합니다.
          </p>
        </div>
      </div>
    </article>
  );
}
