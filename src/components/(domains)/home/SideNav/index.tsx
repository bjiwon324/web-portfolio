import { FULL_PAGE_OBJ_ARRAY } from "@/libs/constants";
import styles from "./SideNav.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";

const cx = classNames.bind(styles);

interface SideNavProps {
  activeIndex: number;
}

export default function SideNav({ activeIndex }: SideNavProps) {
  const img = (i: number) =>
    activeIndex === i
      ? "/icons/side-nav-item-active.svg"
      : "/icons/side-nav-item.svg";
  console.log(activeIndex);
  return (
    <ul className={cx("side-nav-list")}>
      {FULL_PAGE_OBJ_ARRAY.map((pageObj, i) => (
        <li key={pageObj.name}>
          <Link
            aria-labelledby={pageObj.name}
            className={cx("side-nav-item", { active: activeIndex === i })}
            href={`#${pageObj.name}`}>
            <Image
              alt="navigation item"
              width={10}
              height={10}
              src={img(i)}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
