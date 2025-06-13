"use client";

import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
  ReactNode
} from "react";

const cx = classNames.bind(styles);

type Size = "M" | "L";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  size: Size;
  isPrimary?: boolean;
  isError?: boolean;
}

export default forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, size, isPrimary = false, isError = false, className, ...props },
  ref
) {
  return (
    <button
      {...props}
      ref={ref}
      className={cx(
        "button",
        { error: isError },
        { primary: isPrimary },
        size,
        className
      )}>
      {children}
    </button>
  );
});
