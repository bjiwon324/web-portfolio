import styles from "./About.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function AboutSection() {
  return (
    <div className={cx("about")}>
      <h1 className={cx("title")}>About</h1>
      <p className={cx("description")}>
        This is a sample about page. You can add more information here.
      </p>
    </div>
  );
}
