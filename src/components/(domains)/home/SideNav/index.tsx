import { FULL_PAGE_OBJ_ARRAY } from "@/libs/constants";
import styles from "./SideNav.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";

const cx = classNames.bind(styles);

interface SideNavProps {
  activeIndex: number;
  onClick: (index: number) => void;
}

export default function SideNav({ activeIndex, onClick }: SideNavProps) {
  console.log(activeIndex);
  const img = (i: number) =>
    activeIndex === i
      ? "/icons/side-nav-item-active.svg"
      : "/icons/side-nav-item.svg";
  return (
    <ul className={cx("side-nav-list")}>
      {FULL_PAGE_OBJ_ARRAY.map((pageObj, i) => (
        <li key={pageObj.name}>
          <button
            aria-labelledby={pageObj.name}
            className={cx("side-nav-item", { active: activeIndex === i })}
            onClick={() => onClick(i)}>
            <Image
              alt="navigation item"
              width={10}
              height={10}
              src={img(i)}
            />
          </button>
        </li>
      ))}
    </ul>
  );
}
