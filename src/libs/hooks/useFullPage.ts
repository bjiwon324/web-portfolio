import { useEffect, useRef, useState, useCallback } from "react";


type PageArray = any[];

const useFullPage = (pageObjArray: PageArray) => {
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

        // 스크롤 종료 후 isScrollingRef를 false로 설정합니다.
        // smooth 스크롤의 duration에 따라 적절한 시간을 설정해야 합니다.
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
    scrollToSection,
  };
};

export default useFullPage;

// const observer = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         // 페이지가 뷰포트에 들어왔을 때 수행할 동작
//         entry.target.classList.add("active");
//       } else {
//         // 페이지가 뷰포트에서 나갔을 때 수행할 동작
//         entry.target.classList.remove("active");
//       }
//     });
//   },
//   {
//     root: null, // 뷰포트
//     threshold: 0.5 // 페이지가 뷰포트에 50% 이상 보이면 콜백 실행
//   }
// );
