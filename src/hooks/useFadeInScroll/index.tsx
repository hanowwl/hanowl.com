import { useCallback } from "react";

import { MotionProps } from "framer-motion";

export const useFadeInScroll = () => {
  const fadeInScroll = useCallback(
    ({ delay }: { delay: number }) =>
      ({
        initial: { opacity: 0, transform: "translate3d(0, 50%, 0)" },
        whileInView: { opacity: 1, transform: "translate3d(0, 0, 0)" },
        transition: { ease: [0, 0, 0.2, 1], duration: 0.7, delay },
        viewport: { once: true },
      }) as MotionProps,
    [],
  );

  return { fadeInScroll };
};
