import Image from "next/image";
import styles from "./SkillItem.module.scss";
import classNames from "classnames/bind";
import { Skills } from "@/libs/types";

const cx = classNames.bind(styles);

interface SkillItemProps {
  skill: Skills;
  onClick: (skill: Skills) => void;
  selected: boolean;
}

export default function SkillItem({
  skill,
  onClick,
  selected
}: SkillItemProps) {
  const handleItemClick = () => {
    onClick(skill);
  };

  return (
    <button
      className={cx("box", { selected: selected })}
      onClick={handleItemClick}>
      {skill.logo && (
        <div className={cx("img-box")}>
          <Image
            src={skill.logo}
            alt={skill.name}
            fill
          />
        </div>
      )}
      <h5 className={cx("name")}>{skill.name}</h5>

      <p className={cx("description")}>{skill.description}</p>
    </button>
  );
}
