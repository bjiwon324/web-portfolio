import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  isError?: boolean;
  errorMessage?: string;
}

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, isError, errorMessage, id, ...props },
  ref
) {
  return (
    <div className={cx("input-field")}>
      {label && (
        <label
          className={cx("label")}
          htmlFor={id}>
          {label}
        </label>
      )}
      <input
        {...props}
        ref={ref}
        className={cx("input", { error: isError })}
      />
      {isError && <p className={cx("error-message")}>{errorMessage}</p>}
    </div>
  );
});
