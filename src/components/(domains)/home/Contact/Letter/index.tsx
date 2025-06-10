import Header from "@/components/(commons)/Header";
import EmailForm from "./EmailForm";
import styles from "./Letter.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface LetterProps {
  isOpen: boolean;
  titleFont: string;
}

//전체적으로 애니메이션 딜레이 + z-index 딜레이 함수 추가

function MoreInfo() {
  return (
    <div className={cx("more-info")}>
      <ul className={cx("more-info-list")}>
        <li className={cx("more-info-item")}>
          <p>
            <span className={cx("more-info-item-title")}>이메일</span>
            bjiwon0324@gmail.com
          </p>
        </li>
        <li className={cx("more-info-item")}>
          <p>
            <span className={cx("more-info-item-title")}>전화번호</span>
            010-3905-1779
            {/* 이메일 전송시 번호 보이게 - 안보일때는 '이메일을 보내주시면 번호가 보입니다.' 안내 문구 */}
          </p>
        </li>
      </ul>
      <p className={cx("copyright")}>
        &copy; 2025 Park Ji won. All rights reserved.
      </p>
    </div>
  );
}

export default function Letter({ isOpen, titleFont }: LetterProps) {
  return (
    <article className={cx("letter", { open: isOpen })}>
      <Header />
      <h2 className={cx("letter-title", titleFont)}>Contact me</h2>
      <div className={cx("letter-inner")}>
        <EmailForm />
        <MoreInfo />
      </div>
    </article>
  );
}
