import classNames from "classnames/bind";
import styles from "./Card.module.scss";
import { ShowingStatus } from "../..";
import { timeAgo } from "@/libs/utils";

const cx = classNames.bind(styles);

interface CardProps {
  name: string;
  feedback: string | null;
  emoji: string | null;
  createdAt?: string;
}

export default function Card({ name, feedback, emoji, createdAt }: CardProps) {
  return (
    <article className={cx("card")}>
      {emoji && <p className={cx("card-emoji-box")}>{emoji}</p>}
      <div className={cx("card-text-box")}>
        <h6 className={cx("card-text-box-writer")}>{name}</h6>
        <p className={cx("card-text-box-feedback")}>{feedback}</p>
      </div>
      {createdAt && <p className={cx("card-date")}>{timeAgo(createdAt)}</p>}
      {/*  n 분전 할까 말까 */}
    </article>
  );
}
