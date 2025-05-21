type sectionsName =
  | "intro"
  | "about"
  | "skills"
  | "projects"
  | "feedback"
  | "contact";

export interface IPageObj {
  name: sectionsName;
}
