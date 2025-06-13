import React, { useState } from "react";
import styles from "./SkillList.module.scss";
import classNames from "classnames/bind";
import SkillItem from "../SkillItem";
import { Skills } from "@/libs/types";
import { SKILLS } from "@/libs/constants/skills";

const cx = classNames.bind(styles);

export default function SkillList() {
  const [skillList, setSkillList] = useState<Skills[]>(SKILLS);

  const handleClickMoreInfo = (selected: Skills) => {
    const selectedIndex = skillList.findIndex(
      skill => skill.id === selected.id
    );

    if (selectedIndex > -1 && selectedIndex !== 0) {
      const newSkillList = [...skillList];
      const [itemToMove] = newSkillList.splice(selectedIndex, 1);
      newSkillList.unshift(itemToMove);
      setSkillList(newSkillList);
    }
  };

  return (
    <ul className={cx("list")}>
      {skillList.map((skill, index) => (
        <li
          className={cx("item")}
          key={skill.id}>
          <SkillItem
            skill={skill}
            onClick={handleClickMoreInfo}
            selected={index === 0}
          />
        </li>
      ))}
    </ul>
  );
}
