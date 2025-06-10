import { DetailedHTMLProps, forwardRef, TextareaHTMLAttributes } from "react";
import styles from "./Textarea.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface TextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: string;
  isError?: boolean;
  errorMessage?: string;
}

export default forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, isError, errorMessage, id, ...props },
  ref
) {
  return (
    <div className={cx("textarea-field")}>
      {label && (
        <label
          className={cx("label")}
          htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        {...props}
        ref={ref}
        id={id}
        className={cx("textarea", { error: isError })}
      />
      {isError && <p className={cx("error-message")}>{errorMessage}</p>}
    </div>
  );
});
