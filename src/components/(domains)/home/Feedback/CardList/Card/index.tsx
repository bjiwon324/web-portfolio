import classNames from "classnames/bind";
import styles from "./Card.module.scss";
import { ShowingStatus } from "../..";
import { timeAgo } from "@/libs/utils";
import useModal from "@/libs/hooks/useModal";
import Modal from "@/components/(commons)/Modal";

const cx = classNames.bind(styles);

interface CardProps {
  name: string;
  feedback: string | null;
  emoji: string | null;
  createdAt?: string;
}

interface CardInnerProps extends CardProps {
  isModal?: boolean;
}

export default function Card({ name, feedback, emoji, createdAt }: CardProps) {
  const { isOpen, openModal, closeModal, toggleModal } = useModal();
  return (
    <>
      <button
        className={cx("card")}
        onClick={openModal}>
        <CardInner
          emoji={emoji}
          name={name}
          feedback={feedback}
          createdAt={createdAt}
        />
      </button>
      {isOpen && (
        <Modal closeModal={closeModal}>
          {
            <CardInner
              isModal={isOpen}
              emoji={emoji}
              name={name}
              feedback={feedback}
              createdAt={createdAt}
            />
          }
        </Modal>
      )}
    </>
  );
}

function CardInner({
  emoji,
  name,
  feedback,
  createdAt,
  isModal
}: CardInnerProps) {
  return (
    <>
      {emoji && <p className={cx("card-emoji-box", { isModal })}>{emoji}</p>}
      <div className={cx("card-text-box")}>
        <h6 className={cx("card-text-box-writer")}>{name}</h6>
        <p className={cx("card-text-box-feedback", { isModal })}>{feedback}</p>
      </div>
      {createdAt && <p className={cx("card-date")}>{timeAgo(createdAt)}</p>}
    </>
  );
}
