import classNames from "classnames/bind";
import styles from "./Feedback.module.scss";
import CardList from "./CardList";
import { useState } from "react";
import Button from "@/components/(commons)/Button";
import Link from "next/link";

const cx = classNames.bind(styles);

interface FeedbackSectionProps {}

export type ShowingStatus = "project" | "acquaintance";

export default function FeedBackSection() {
  const [showingStatus, setShowingStatus] = useState<ShowingStatus>("project");

  const handleClickShowingStatus = (id: ShowingStatus) => {
    setShowingStatus(id);
  };

  return (
    <>
      <ul className={cx("button-list")}>
        <div className={cx("button-list-left")}>
          <li className={cx("button-list-item")}>
            <button
              id="project"
              onClick={e =>
                handleClickShowingStatus(e.currentTarget.id as ShowingStatus)
              }
              className={cx({ selected: showingStatus === "project" })}>
              프로젝트/스터디 멤버
            </button>
          </li>
          <li className={cx("button-list-item")}>
            <button
              id="acquaintance"
              onClick={e =>
                handleClickShowingStatus(e.currentTarget.id as ShowingStatus)
              }
              className={cx({ selected: showingStatus === "acquaintance" })}>
              지인/동료
            </button>
          </li>
        </div>
        <li>
          <Link href={"addFeedback"}>
            <Button
              className={cx("addFeedback-btn")}
              size="M">
              글쓰기
            </Button>
          </Link>
        </li>
      </ul>
      <CardList showingStatus={showingStatus} />
    </>
  );
}
