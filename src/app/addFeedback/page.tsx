"use client";

import Header from "@/components/(commons)/Header";
import styles from "./AddFeedbackPage.module.scss";
import classNames from "classnames/bind";
import AddFeedbackForm from "@/components/(domains)/addFeedback/AddFeedbackForm";
import localFont from "next/font/local";

const cx = classNames.bind(styles);
// const andongFont = localFont({ src: "../../../fonts/andong-subset.woff2" });

export default function AddFeedbackPage() {
  return (
    <>
      <Header isHome={false} />

      <main className={cx("main")}>
        <article>
          <h1 className={cx("title")}>지인/동료</h1>
          <p className={cx("text")}>
            이 사이트에 대한 피드백이나
            <br /> 평소 저에 대한 이야기를 남겨주세요.
          </p>
        </article>
        <AddFeedbackForm
        // classNames={andongFont.className}
        />
      </main>
    </>
  );
}
