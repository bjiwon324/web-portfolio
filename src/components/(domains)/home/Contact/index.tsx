import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import { Dynalight } from "next/font/google";
import { useToggle } from "@/libs/hooks";
import Letter from "./Letter";

const DynalightFont = Dynalight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Dynalight",
  weight: "400"
});

//

const cx = classNames.bind(styles);

export default function ContactSection() {
  const [isOpen, setIsToggle] = useToggle(false);

  return (
    <>
      <div className={cx("background")}>
        <div
          className={cx("background-wrap")}
          onClick={setIsToggle}>
          <div className={cx("background-top", { open: isOpen })}>
            <h2 className={cx("contact-title", DynalightFont.variable)}>
              Contact me
            </h2>
          </div>
          <div className={cx("background-bottom")}></div>
        </div>
        <Letter
          isOpen={isOpen}
          titleFont={DynalightFont.variable}
        />
      </div>
    </>
  );
}
