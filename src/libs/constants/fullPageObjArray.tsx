import { PageObj } from "@/libs/types";
import InTroSection from "@/components/(domains)/home/Intro";
import About from "@/components/(domains)/home/about";

export const FULL_PAGE_OBJ_ARRAY: PageObj[] = [
  { name: "intro" ,componenet:<InTroSection/>},
  { name: "about" ,componenet:<About/>},
  { name: "skills", componenet: <About/>},
  { name: "projects" ,componenet:<About/>},
  { name: "feedback" ,componenet:<About/>},
  { name: "contact" ,componenet:<About/>}
];

