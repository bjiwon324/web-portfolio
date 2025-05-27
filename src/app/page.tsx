"use client";

import classNamesBind from "classnames/bind";
import styles from "./page.module.scss";
import {useFullPage} from "@/libs/hooks";
import {fullPageObjArray} from "@/libs/constants/fullPageObjArray";
import Header from "@/components/(commons)/Header";

const cx = classNamesBind.bind(styles);

export default function Home() {
 const {wrapRef,sectionRefs,currentSectionIndex, scrollToSection} = useFullPage(fullPageObjArray)

  return (
    <>
      <div
        ref={wrapRef}
        className={cx("wrap")}>
                      <Header/>
        <main className={cx("main")}>
          {fullPageObjArray.map((pageObj, index) => (
            <section
              id={pageObj.name}
              key={pageObj.name}
              ref={(el: HTMLElement | null) => {
                sectionRefs.current[index] = el;
              }}
              className={cx("full-section", `section${index}`, pageObj.name, {
                active: index === currentSectionIndex
              })}>
              {pageObj.componenet}
            </section>
          ))}
        </main>
      </div>
    </>
  );
}
