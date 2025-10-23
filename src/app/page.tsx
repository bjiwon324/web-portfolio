"use client";

import classNamesBind from "classnames/bind";
import styles from "./page.module.scss";
import { useFullPage, useTouchScroll } from "@/libs/hooks";
import { FULL_PAGE_OBJ_ARRAY } from "@/libs/constants/fullPageObjArray";
import Header from "@/components/(commons)/Header";
import SideNav from "@/components/(domains)/home/SideNav";
import { useEffect } from "react";

const cx = classNamesBind.bind(styles);

export default function Home() {
  const { wrapRef, sectionRefs, currentSectionIndex, scrollToSection } =
    useFullPage(FULL_PAGE_OBJ_ARRAY);

  const { attachTouchHandlers } = useTouchScroll(
    () => scrollToSection(currentSectionIndex + 1),
    () => scrollToSection(currentSectionIndex - 1)
  );

  useEffect(() => {
    if (window.innerWidth > 768) return;

    const wrap = wrapRef.current;
    const detach = attachTouchHandlers(wrap);

    return () => {
      if (detach) detach();
    };
  }, [attachTouchHandlers, wrapRef, currentSectionIndex, scrollToSection]);

  return (
    <>
      <div
        ref={wrapRef}
        className={cx("wrap")}>
        <Header onClick={scrollToSection} />
        <SideNav
          activeIndex={currentSectionIndex}
          onClick={scrollToSection}
        />
        <main className={cx("main")}>
          {FULL_PAGE_OBJ_ARRAY.map((pageObj, index) => (
            <section
              id={pageObj.name}
              key={pageObj.name}
              ref={(el: HTMLElement | null) => {
                sectionRefs.current[index] = el;
              }}
              aria-label={pageObj.name}
              className={cx("full-section", `section${index}`, pageObj.name, {
                active: index === currentSectionIndex
              })}>
              {pageObj.component}
            </section>
          ))}
        </main>
      </div>
    </>
  );
}
