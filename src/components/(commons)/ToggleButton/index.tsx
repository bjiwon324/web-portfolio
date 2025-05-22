import { useState } from "react"
import styles from "./ToggleButton.module.scss"
import classNames from "classnames/bind"
import useToggle from "@/libs/hooks/toggle"

const cx = classNames.bind(styles)

export default function ToggleButton() {
const [isLeft, toggleIsLeft] = useToggle(false)
  

  return  <button className={cx("button-background",{isLeft})} onClick={toggleIsLeft}><div className={cx("inner")}></div></button>
}
