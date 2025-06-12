"use client";

import Header from "@/components/(commons)/Header";
import styles from "./ProjectPage.module.scss";
import classNames from "classnames/bind";
import { useDarkMode } from "@/libs/hooks";
import { BINDER } from "@/libs/constants";
import { useParams, useRouter, useSearchParams } from "next/navigation";

const cx = classNames.bind(styles);

export default function ProjectPage() {
  const { theme, setTheme } = useDarkMode();

  const params = useParams();

  console.log("fff", params);

  const handleClickTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  console.log(BINDER.name);

  return (
    <>
      <Header
        onClickTheme={handleClickTheme}
        theme={theme}
        isHome={false}
      />
      <h1 className={cx("title")}></h1>
    </>
  );
}
