import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal
 * Lightweight IntersectionObserver hook that flips `isVisible` to true
 * the first time an element enters the viewport, used to drive the
 * fade+rise "reveal" treatment across sections. No animation library.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
}
