import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

export const useScrollAnimation = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.15"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.35, 1], [0, 0.4, 1]);
  const y = useTransform(scrollYProgress, [0, 0.35, 1], [220, 120, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.35, 1], [0.82, 0.9, 1]);

  return { ref, opacity, y, scale };
};
