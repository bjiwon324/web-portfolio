import { PageObj } from "@/libs/types";
import InTroSection from "@/components/(domains)/home/Intro";
import AboutSection from "@/components/(domains)/home/About";
import FeedBackSection from "@/components/(domains)/home/Feedback";
import ContactSection from "@/components/(domains)/home/Contact";
import ProjectSection from "@/components/(domains)/home/Project";
import SkillsSection from "@/components/(domains)/home/Skills";

export const FULL_PAGE_OBJ_ARRAY: PageObj[] = [
  { name: "intro", component: <InTroSection /> },
  { name: "about", component: <AboutSection /> },
  { name: "skills", component: <SkillsSection /> },
  { name: "projects", component: <ProjectSection /> },
  { name: "feedback", component: <FeedBackSection /> },
  { name: "contact", component: <ContactSection /> }
];
