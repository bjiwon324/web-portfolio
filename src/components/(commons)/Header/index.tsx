import Image from "next/image";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import { FULL_PAGE_OBJ_ARRAY, PROJECTS } from "@/libs/constants";
import ToggleButton from "../ToggleButton";
import { useToggle } from "@/libs/hooks";
import { useThemeStore } from "@/store/themeStore";
const cx = classNames.bind(styles);
interface HeaderProps {
  isHome?: boolean;
  onClick: (index: number) => void;
}

export default function Header({ onClick, isHome = true }: HeaderProps) {
  const [isShowNavList, setIsShowNavList] = useToggle(false);
  const theme = useThemeStore(state => state.theme);
  console.log(theme);
  const logoSrc =
    theme === "dark" ? "/icons/logo-white.svg" : "/icons/logo.svg";

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
              src={logoSrc}
              alt="홈페이지로 이동"
            />
          </Link>
          <div className={cx("header-right")}>
            <nav className={cx("nav")}>
              <ToggleButton />
              <ul className={cx("nav-list", { show: isShowNavList })}>
                {PROJECTS.map(project => (
                  <li
                    key={project.name}
                    className={cx("nav-item")}>
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
            src={logoSrc}
            alt="홈페이지로 이동"
          />
        </Link>
        <nav className={cx("nav")}>
          <ToggleButton />
          <ul className={cx("nav-list", { show: isShowNavList })}>
            {FULL_PAGE_OBJ_ARRAY.map((obj, index) => (
              <li
                className={cx("nav-item")}
                key={obj.name}>
                <button onClick={() => onClick(index)}>{obj.name}</button>
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
