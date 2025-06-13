import SkillList from "./SkillList";
import styles from "./SkillsSection.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function SkillsSection() {
  return (
    <div className={cx("box")}>
      <SkillList />
    </div>
  );
}
