import { animate, Variants } from "framer-motion";

export const sidebar__variants: Variants = {
  initial: {
    x: "calc(100% + 100px)",
  },
  animate: {
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const links_variants: Variants = {
  initial: {
    x: 100,
  },

  animate: (i) => ({
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.05 * i,
      ease: [0.76, 0, 0.24, 1],
    },
  }),

  exit: (i) => ({
    x: 100,
    transition: {
      duration: 0.7,
      delay: 0.06 * i,
      ease: [0.76, 0, 0.24, 1],
    },
  }),
};
