import classNames from "classnames/bind";
import styles from "./Card.module.scss";

const cx = classNames.bind(styles);

interface CardProps {
  name: string;
  feedback: string;
  Emoji?: string;
}

export default function Card({ name, feedback, Emoji }: CardProps) {
  return (
    <article className={cx("card")}>
      <p className={cx("card-emoji-box")}>{Emoji}</p>
      <div className={cx("card-text-box")}>
        <h6 className={cx("card-text-box-writer")}>{name}</h6>
        <p className={cx("card-text-box-feedback")}>{feedback}</p>
      </div>
      <p className={cx("card-date")}>2025.05.28.16:43</p>
      {/*  n 분전 할까 말까 */}
    </article>
  );
}
