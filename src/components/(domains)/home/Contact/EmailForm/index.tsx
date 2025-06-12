"use client";

import Input from "@/components/(commons)/Input";
import Textarea from "@/components/(commons)/Textarea";
import Button from "@/components/(commons)/Button";
import styles from "./EmailForm.module.scss";
import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { EmailFormValues } from "@/libs/types";
import { sendEmail } from "@/libs/apis";

const cx = classNames.bind(styles);

interface EmailFormProps {
  handleSubmitted: () => void;
}

export default function EmailForm({ handleSubmitted }: EmailFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<EmailFormValues>();

  const { mutate, isPending } = useMutation({
    mutationFn: sendEmail,
    onSuccess: () => {
      handleSubmitted();
      reset();
      alert("연락주셔서 감사합니다!☺️ 빠른 시일 내에 답변드리겠습니다.");
    },
    onError: () => {
      alert("메일 전송에 실패했습니다.");
    }
  });

  const onSubmit = (data: EmailFormValues) => {
    mutate(data);
  };

  return (
    <>
      <form
        className={`${cx("form")} gform`}
        onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          errorMessage={errors.email?.message}
          isError={!!errors.email}
          {...register("email", { required: "이메일은은 필수입니다" })}
        />

        <Input
          id="name"
          placeholder="이름을 입력해 주세요"
          errorMessage={errors.name?.message}
          isError={!!errors.name}
          {...register("name", { required: "이름은 필수입니다" })}
        />

        <Textarea
          id="message"
          placeholder="이메일 내용을 입력해 주세요"
          errorMessage={errors.message?.message}
          isError={!!errors.message}
          {...register("message", { required: "메세지는 필수입니다" })}
        />
        <Button
          size="L"
          isPrimary
          type="submit">
          메일 보내기
        </Button>
      </form>
      <script
        data-cfasync="false"
        type="text/javascript"
        src="form-submission-handler.js"></script>
    </>
  );
}
