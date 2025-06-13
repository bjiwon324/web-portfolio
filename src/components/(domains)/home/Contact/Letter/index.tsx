import Header from "@/components/(commons)/Header";
import EmailForm from "../EmailForm";
import styles from "./Letter.module.scss";
import classNames from "classnames/bind";
import { lazy, useEffect, useState } from "react";

const cx = classNames.bind(styles);

interface LetterProps {
  isOpen: boolean;
  titleFont: string;
}

//전체적으로 애니메이션 딜레이 + z-index 딜레이 함수 추가
interface MoreInfoProps {
  isSubmitted: boolean;
}
function MoreInfo({ isSubmitted }: MoreInfoProps) {
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
            {isSubmitted
              ? "010-3905-1779"
              : "이메일을 보내주시면 번호가 보입니다."}
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [letterZindex, setLetterZindex] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isOpen) {
      timer = setTimeout(() => {
        setLetterZindex(true);
      }, 500);
    } else {
      setLetterZindex(false);
    }

    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleSubmitted = () => {
    setIsSubmitted(true);
  };

  return (
    <article className={cx("letter", { open: isOpen }, { lazy: letterZindex })}>
      {/* <Header /> */}

      <h2 className={cx("letter-title", titleFont)}>Contact me</h2>
      <div className={cx("letter-inner")}>
        <EmailForm handleSubmitted={handleSubmitted} />
        <MoreInfo isSubmitted={isSubmitted} />
      </div>
    </article>
  );
}
