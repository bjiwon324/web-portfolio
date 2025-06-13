import styles from "./Modal.module.scss";
import classNames from "classnames/bind";
import ModalPortal from "./Portal";
import { ReactNode } from "react";

const cx = classNames.bind(styles);

interface ModalProps {
  closeModal: () => void;
  children: ReactNode;
}

export default function Modal({ children, closeModal }: ModalProps) {
  return (
    <ModalPortal>
      <div
        className={cx("mask")}
        onClick={closeModal}></div>
      <div className={cx("inner")}>{children}</div>
    </ModalPortal>
  );
}
