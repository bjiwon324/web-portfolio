"use client";
import { useForm } from "react-hook-form";
import styles from "./AddFeedbackForm.module.scss";
import classNames from "classnames/bind";
import Input from "@/components/(commons)/Input";
import Textarea from "@/components/(commons)/Textarea";
import EmojiPicker, {
  EmojiStyle,
  EmojiClickData,
  Theme as EmojiTheme
} from "emoji-picker-react";
import { useState } from "react";
import dynamic from "next/dynamic";
import { FeedbackFormValues, ThemeType } from "@/libs/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFeedback } from "@/libs/apis/addFeedback";
import Button from "@/components/(commons)/Button";
import { useRouter } from "next/navigation";
import { useThemeStore } from "@/store/themeStore";

const Picker = dynamic(
  () => {
    return import("emoji-picker-react");
  },
  { ssr: false }
);

const cx = classNames.bind(styles);

export default function AddFeedbackFor() {
  const router = useRouter();
  const theme = useThemeStore(state => state.theme);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors }
  } = useForm<FeedbackFormValues>();
  const [showPicker, setShowPicker] = useState(false);

  const emojiPickerTheme: EmojiTheme =
    theme === "system" ? EmojiTheme.AUTO : (theme as EmojiTheme);

  const emoji = watch("emoji");

  const { mutate, isPending, error } = useMutation({
    mutationFn: (data: FeedbackFormValues) => addFeedback(data),
    onSuccess: () => {
      alert("의견 남겨주셔서 감사합니다.☺️");
      router.push("/#feedback");
    }
  });

  const onSubmit = (data: FeedbackFormValues) => {
    mutate(data);
  };

  const handleEmojiClick = (emojiObject: EmojiClickData) => {
    setValue("emoji", emojiObject.emoji);
    setShowPicker(false);
  };

  return (
    <form
      className={cx("form")}
      onSubmit={handleSubmit(onSubmit)}>
      <Button
        className={cx("form-btn")}
        type="submit"
        size="M">
        글쓰기
      </Button>
      <Input
        id="writer"
        label="이름"
        // isError={errors.writer}
        errorMessage={errors.writer?.message}
        {...register("writer", { required: "이름은 필수입니다" })}
        isError={!!errors.writer}
      />

      <div className={cx("emoji-input-wrapper")}>
        <Input
          type="text"
          readOnly
          {...register("emoji")}
          label="이모지"
          value={emoji || ""}
          onClick={() => setShowPicker(prev => !prev)}
          placeholder="이모지를 선택해주세요 (선택)"
        />
        {showPicker && (
          <div
            className={cx("emoji-box")}
            style={{ position: "absolute", zIndex: 4 }}>
            <EmojiPicker
              theme={emojiPickerTheme}
              emojiStyle={EmojiStyle.NATIVE}
              onEmojiClick={handleEmojiClick}
            />
          </div>
        )}
      </div>
      <Textarea
        id="feedback"
        label="피드백"
        placeholder="피드백을 입력해 주세요"
        errorMessage={errors.feedback?.message}
        isError={!!errors.feedback}
        {...register("feedback", { required: "피드백은 필수입니다" })}
      />
      {/* <Button
          size="L"
          type="submit">
          글쓰기
        </Button> */}
    </form>
  );
}
