import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// A tiny hook wrapper that returns motion props when element comes into view.
// Uses react-intersection-observer to avoid coupling to framer-motion in all components.
export function useScrollAnimation(options?: { root?: Element | null; rootMargin?: string; threshold?: number | number[] }) {
  const { ref, inView } = useInView({
    root: options?.root ?? null,
    rootMargin: options?.rootMargin ?? "-10% 0px",
    threshold: options?.threshold ?? 0.15,
  });

  useEffect(() => {
    // placeholder for side-effects if needed later
  }, [inView]);

  return {
    ref,
    inView,
    motionProps: {
      initial: { opacity: 0, y: 32 },
      animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 },
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
}

export default useScrollAnimation;
