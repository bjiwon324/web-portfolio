"use client";

import classNamesBind from "classnames/bind";
import styles from "./page.module.scss";
import useFullPage from "@/libs/hooks/useFullPage";
import pageObjArray from "@/libs/constants/fullPageObjArray";

const cx = classNamesBind.bind(styles);

export default function FullPageEXample() {
 const {wrapRef,sectionRefs,currentSectionIndex, scrollToSection} = useFullPage(pageObjArray)

  return (
    <>
      <div
        ref={wrapRef}
        className={cx("wrap")}>
        <main className={cx("main")}>
          {pageObjArray.map((pageObj, index) => (
            <section
              key={pageObj.name}
              ref={(el: HTMLElement | null) => {
                sectionRefs.current[index] = el;
              }}
              className={cx("full-section", `section${index}`, pageObj.name, {
                active: index === currentSectionIndex
              })}>
              <h1>{pageObj.name}</h1>
            </section>
          ))}
        </main>
      </div>
    </>
  );
}
