"use client";

import classNames from "classnames/bind";
import styles from "./CardList.module.scss";
import Card from "./Card";
import React from "react";
import { supabase } from "@/libs/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { ShowingStatus } from "..";

const cx = classNames.bind(styles);

interface CardListProps {
  showingStatus: ShowingStatus;
}

export default function CardList({ showingStatus }: CardListProps) {
  const {
    data: projectFeedbackData,
    isLoading: isProjectFeedbackDataLoading,
    error: projectFeedbackDataError
  } = useQuery({
    queryKey: ["feedbackAtProject"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("feedback-project")
        .select("*");
      if (error) throw new Error(error.message);
      console.log("ddd", data);
      return data;
    },
    enabled: showingStatus === "project"
  });

  const {
    data: feedbackData,
    isLoading: isFeedbackDataLoading,
    error: feedbackDataError
  } = useQuery({
    queryKey: ["feedback"],
    queryFn: async () => {
      const { data, error } = await supabase.from("feedback").select("*");
      if (error) throw new Error(error.message);

      return data;
    },
    enabled: showingStatus === "acquaintance"
  });

  const error = feedbackDataError || projectFeedbackDataError;
  const isLoading = isFeedbackDataLoading || isProjectFeedbackDataLoading;

  const ListData =
    showingStatus === "project" ? projectFeedbackData : feedbackData;

  const handleScroll = (event: React.UIEvent<HTMLUListElement>) => {
    event.stopPropagation();
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (error)
    return <div className={cx("blank-text")}>에러: {error.message}</div>;

  return (
    <ul
      className={cx("card-list")}
      onScroll={handleScroll}
      onWheel={e => e.preventDefault}>
      {ListData && ListData?.length !== 0 ? (
        ListData.map((feedback, index) => (
          <li
            key={index}
            className={cx("card-box")}>
            <Card
              Emoji={feedback.emoji}
              name={feedback.writer}
              feedback={feedback.feedback}
              createdAt={feedback.created_at}
            />
          </li>
        ))
      ) : (
        <p className={cx("blank-text")}>아직 피드백이 없습니다.</p>
      )}
    </ul>
  );
}
