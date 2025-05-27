import { useState } from "react"
import styles from "./ToggleButton.module.scss"
import classNames from "classnames/bind"
import {useToggle} from "@/libs/hooks"

const cx = classNames.bind(styles)

interface ToggleButtonType {
  onClick: () => void;
}

export default function ToggleButton({onClick} : ToggleButtonType) {
  const [isLeft, toggleIsLeft] = useToggle(false)
  const handleClickToggle =() => {
    onClick();
    toggleIsLeft();
    
  }

  

  return  <button className={cx("button-background",{isLeft})} onClick={handleClickToggle}><div className={cx("inner")}></div></button>
}
