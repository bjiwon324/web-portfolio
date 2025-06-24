import { useEffect, useRef, useState, useCallback } from "react";

type PageArray = any[];

export const useFullPage = (pageObjArray: PageArray) => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const isScrollingRef = useRef(false);

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const scrollToSection = useCallback(
    (index: number) => {
      const targetSection = sectionRefs.current[index];
      if (targetSection) {
        isScrollingRef.current = true;
        targetSection.scrollIntoView({ behavior: "smooth" });
        // 정확한 스크롤 종료 시점을 알기 어렵기 때문에 임의의 시간(예: 1000ms)을 설정하거나,
        // transitionend 이벤트를 활용하는 등의 방법이 있습니다. 여기서는 임의 시간을 사용합니다.
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 1000); // 스크롤 애니메이션 시간에 맞춰 조정하세요.
        setCurrentSectionIndex(index);
      }
    },
    [] // sectionRefs는 useRef로 생성되므로 변경되지 않습니다.
  );

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
        scrollToSection(nextIndex); // 수정된 scrollToSection 함수 호출
      }
    };

    wrapElement.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      wrapElement.removeEventListener("wheel", handleWheel);
    };
  }, [currentSectionIndex, pageObjArray.length, scrollToSection]);

  return {
    wrapRef,
    sectionRefs,
    currentSectionIndex,
    scrollToSection
  };
};
