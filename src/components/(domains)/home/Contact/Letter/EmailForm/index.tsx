import Input from "@/components/(commons)/Input";
import styles from "./EmailForm.module.scss";
import classNames from "classnames/bind";
import Textarea from "@/components/(commons)/Textarea";
import Button from "@/components/(commons)/Button";
import { useForm } from "react-hook-form";

const cx = classNames.bind(styles);

export default function EmailForm() {
  const {} = useForm();
  return (
    <form className={cx("form")}>
      <Input
        id="email"
        type="email"
        placeholder="이메일을 입력해주세요"
      />
      <Input
        id="name"
        placeholder="이름을 입력해 주세요"
      />
      <Textarea
        id="text"
        placeholder="이메일 내용을 입력해 주세요"
      />
      <Button
        size="L"
        isPrimary
        type="submit">
        메일 보내기
      </Button>
    </form>
  );
}
