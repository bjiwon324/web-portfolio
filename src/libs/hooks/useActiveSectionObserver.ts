import { useEffect, useState } from "react";

export function useActiveSectionObserver(
  sectionRefs: (HTMLElement | null)[],
  options?: IntersectionObserverInit
) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.5,
        ...options
      }
    );

    sectionRefs.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);

  return activeIndex;
}
