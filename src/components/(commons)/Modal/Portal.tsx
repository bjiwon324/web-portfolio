import { ReactNode } from "react";
import ReactDom from "react-dom";

export default function ModalPortal({ children }: { children: ReactNode }) {
  const el = document.getElementById("root");
  return ReactDom.createPortal(children, el!);
}
