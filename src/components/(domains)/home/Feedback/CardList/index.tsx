"use client";

import classNames from "classnames/bind";
import styles from "./CardList.module.scss";
import Card from "./Card";
import React, { UIEventHandler, useEffect } from "react";

const cx = classNames.bind(styles);

const testArray = Array.from({ length: 29 });

export default function CardList() {
  const handleScroll = (event: React.UIEvent<HTMLUListElement>) => {
    event.stopPropagation();
  };
  console.log(testArray);
  return (
    <ul
      className={cx("card-list")}
      onScroll={handleScroll}
      onWheel={e => e.preventDefault}>
      {testArray.map((__, index) => (
        <li
          key={index}
          className={cx("card-box")}>
          <Card
            Emoji="👍"
            name="이름입니다"
            feedback="피드백 입니다피드백 입니다피드백 입니다피드백 입니다피드백 입니다피드백 입니다피드백 입니다피드백 입니다"
          />
        </li>
      ))}
    </ul>
  );
}
