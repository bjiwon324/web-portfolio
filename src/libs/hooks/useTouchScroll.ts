import { useRef } from "react";

export function useTouchScroll(onSwipeUp: () => void, onSwipeDown: () => void) {
  const touchStartY = useRef<number | null>(null);
  const isScrolling = useRef(false);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (touchStartY.current === null || isScrolling.current) return;

    const deltaY = touchStartY.current - e.touches[0].clientY;
    const threshold = 220;
    if (Math.abs(deltaY) < threshold) return;

    isScrolling.current = true;

    if (deltaY > 0) {
      onSwipeUp();
    } else {
      onSwipeDown();
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 800);

    touchStartY.current = null;
  };

  const attachTouchHandlers = (element: HTMLElement | null) => {
    if (!element) return;

    element.addEventListener("touchstart", handleTouchStart, { passive: true });
    element.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchmove", handleTouchMove);
    };
  };

  return { attachTouchHandlers };
}
