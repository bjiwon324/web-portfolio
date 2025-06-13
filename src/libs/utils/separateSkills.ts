import { SKILLS } from "../constants/skills";
import { Skills } from "../types";

export const separateSkills = (
  targetSkills: string[]
): { matchedSkills: Skills[]; unmatchedSkills: string[] } => {
  const skillLookup = new Map<string, Skills>();
  SKILLS.forEach(skill => {
    skillLookup.set(skill.name.toLowerCase(), skill);
    if (skill.aliases) {
      skill.aliases.forEach(alias => {
        skillLookup.set(alias.toLowerCase(), skill);
      });
    }
  });

  const matchedSkills: Skills[] = [];
  const unmatchedSkillNames: string[] = [];
  const processedTargetSkills = new Set<string>();

  targetSkills.forEach(targetSkillName => {
    const lowerTargetSkillName = targetSkillName.toLowerCase();

    if (processedTargetSkills.has(lowerTargetSkillName)) {
      return;
    }
    const foundSkill = skillLookup.get(lowerTargetSkillName);

    if (foundSkill) {
      matchedSkills.push(foundSkill);
    } else {
      unmatchedSkillNames.push(targetSkillName);
    }

    processedTargetSkills.add(lowerTargetSkillName);
  });

  return {
    matchedSkills,
    unmatchedSkills: unmatchedSkillNames
  };
};
