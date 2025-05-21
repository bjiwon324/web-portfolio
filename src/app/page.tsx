"use client";
//중요!!

import classNamesBind from "classnames/bind";
import styles from "./page.module.scss";
import pageObjArray from "@/libs/constants/fullPageObjArray";
import { useEffect, useRef, useState } from "react";

const cx = classNamesBind.bind(styles);

export default function FullPageEXample() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const isScrollingRef = useRef(false);

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const wrapElement = wrapRef.current;

    if (!wrapElement) {
      return;
    }

    const handleWheel = (event: WheelEvent) => {
      if (isScrollingRef.current) {
        event.preventDefault();
        return;
      }
      const direction = event.deltaY > 0 ? "down" : "up";

      let nextIndex = currentSectionIndex;
      if (direction === "down") {
        nextIndex = Math.min(currentSectionIndex + 1, pageObjArray.length - 1);
      } else {
        nextIndex = Math.max(currentSectionIndex - 1, 0);
      }

      if (nextIndex !== currentSectionIndex) {
        event.preventDefault();
        isScrollingRef.current = true;
        const targetSection = sectionRefs.current[nextIndex];

        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });

          setTimeout(() => {
            isScrollingRef.current = false;
          }, 1000);
        }
        setCurrentSectionIndex(nextIndex);
      }
    };

    wrapElement.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      wrapElement.removeEventListener("wheel", handleWheel);
    };
  }, [currentSectionIndex, pageObjArray.length]);

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
