import Image from "next/image";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import { FULL_PAGE_OBJ_ARRAY, PROJECTS } from "@/libs/constants";
import ToggleButton from "../ToggleButton";
import { useToggle } from "@/libs/hooks";
import { ThemeType } from "@/libs/types";
import Modal from "../Modal";
import useModal from "@/libs/hooks/useModal";

const cx = classNames.bind(styles);
interface HeaderProps {
  theme: ThemeType;
  onClickTheme: () => void;
  isHome?: boolean;
}

export default function Header({
  theme,
  onClickTheme,
  isHome = true
}: HeaderProps) {
  const [isShowNavList, setIsShowNavList] = useToggle(false);

  const handleShowNavList = () => {
    setIsShowNavList();
  };

  if (!isHome) {
    return (
      <header className={cx("header")}>
        <div className={cx("header-wrapper")}>
          <Link
            className={cx("goHome")}
            href={"/"}>
            <Image
              className={cx("logo")}
              width={100}
              height={30}
              style={{}}
              src={"/icons/logo.svg"}
              alt="홈페이지로 이동"
            />
          </Link>
          <div className={cx("header-right")}>
            <nav className={cx("nav")}>
              <ToggleButton onClick={onClickTheme} />
              <ul className={cx("nav-list", { show: isShowNavList })}>
                {PROJECTS.map(project => (
                  <li className={cx("nav-item")}>
                    <Link href={`/project/${[project.name]}`}>
                      {project.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                onClick={handleShowNavList}
                className={cx("hamburger", { "is-active": isShowNavList })}>
                <span className={cx("line")}></span>
                <span className={cx("line")}></span>
                <span className={cx("line")}></span>
              </button>
            </nav>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className={cx("header")}>
      <div className={cx("header-wrapper")}>
        <Link
          className={cx("goHome")}
          href={"/"}>
          <Image
            className={cx("logo")}
            width={100}
            height={30}
            style={{ objectFit: "fill" }}
            src={"/icons/logo.svg"}
            alt="홈페이지로 이동"
          />
        </Link>
        <nav className={cx("nav")}>
          <ToggleButton onClick={onClickTheme} />
          <ul className={cx("nav-list", { show: isShowNavList })}>
            {FULL_PAGE_OBJ_ARRAY.map(obj => (
              <li
                className={cx("nav-item")}
                key={obj.name}>
                <Link href={"#" + obj.name}>{obj.name}</Link>
              </li>
            ))}
          </ul>
          <button
            onClick={handleShowNavList}
            className={cx("hamburger", { "is-active": isShowNavList })}>
            <span className={cx("line")}></span>
            <span className={cx("line")}></span>
            <span className={cx("line")}></span>
          </button>
        </nav>
      </div>
    </header>
  );
}
