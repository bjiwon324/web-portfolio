import Image from "next/image"
import styles from "./Header.module.scss"
import classNames from "classnames/bind"
import { ReactNode } from "react"
import Link from "next/link"
import fullPageObjArray from "@/libs/constants/fullPageObjArray"
import ToggleButton from "../ToggleButton"

const cx = classNames.bind(styles)



export default function Header () {
   return (
      <header className={cx("header")}>
         <div className={cx('header-wrapper')}>
            <Link className={cx("goHome")} href={"/"}>
               <Image width={93} height={26} objectFit="fill" src={"/icons/GitHub_Logo 1.svg"} alt="홈페이지로 이동" />
            </Link>
            <nav>
               <ul className={cx('nav-list')}>
                  <ToggleButton onClick={() => { }}/>
                  {fullPageObjArray.map((obj) =>
                     <li className={cx("nav-item")} key={obj.name}>
                        <Link href={"#" + obj.name}>{obj.name}</Link>
                     </li>)}
               </ul>
            </nav>
         </div>
      </header>)
}