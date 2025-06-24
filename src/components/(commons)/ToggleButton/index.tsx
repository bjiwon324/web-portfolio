"use client";
import styles from "./ToggleButton.module.scss";
import classNames from "classnames/bind";
import { useToggle } from "@/libs/hooks";
import { useThemeStore } from "@/store/themeStore";

const cx = classNames.bind(styles);

interface ToggleButtonType {}

export default function ToggleButton({}: ToggleButtonType) {
  const { resolvedTheme, setTheme } = useThemeStore();

  const toggle = () => {
    const next = resolvedTheme === "light" ? "dark" : "light";
    setTheme(next);
  };

  return (
    <button
      className={cx("button-background", { isLeft: resolvedTheme === "light" })}
      onClick={toggle}>
      <div className={cx("inner")}></div>
    </button>
  );
}
