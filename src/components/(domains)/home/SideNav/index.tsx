import { FULL_PAGE_OBJ_ARRAY } from "@/libs/constants";
import styles from "./SideNav.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface SideNavProps {
  active: boolean;
}

export default function SideNav({ active }: SideNavProps) {
  return (
    <ul className={cx("side-nav-list")}>
      {FULL_PAGE_OBJ_ARRAY.map(pageObj => (
        <li
          className={cx("side-nav-item", pageObj.name, { active: active })}
          key={pageObj.name}></li>
      ))}
    </ul>
  );
}
