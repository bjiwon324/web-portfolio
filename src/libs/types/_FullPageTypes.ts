import { ReactNode } from "react";

type sectionsName =
  | "intro"
  | "about"
  | "skills"
  | "projects"
  | "feedback"
  | "contact";

export interface PageObj {
  name: sectionsName;
  component: ReactNode;
}
