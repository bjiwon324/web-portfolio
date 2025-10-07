import React, { useState } from "react";
import styles from "./SkillList.module.scss";
import classNames from "classnames/bind";
import SkillItem from "../SkillItem";
import { Skills } from "@/libs/types";
import { SKILLS } from "@/libs/constants/skills";

const cx = classNames.bind(styles);

export default function SkillList() {
  const [skillList, setSkillList] = useState<Skills[]>(SKILLS);
  const [selected, setSelected] = useState<Skills>(SKILLS[0]);

  const handleClickMoreInfo = (skill: Skills) => {
    setSelected(skill);
  };

  return (
    <ul className={cx("list")}>
      <li>
        <SkillItem
          skill={selected}
          onClick={handleClickMoreInfo}
          selected={true}></SkillItem>
      </li>
      {skillList.map((skill, index) => (
        <li
          className={cx("item")}
          key={skill.id}>
          <SkillItem
            skill={skill}
            onClick={handleClickMoreInfo}
            selected={false}
          />
        </li>
      ))}
    </ul>
  );
}
