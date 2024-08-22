import styles from "./style.module.scss";
import { motion, Variants } from "framer-motion";

function Curve() {
  const height = window.innerHeight;
  const initialPath = `M100 0V${height} Q-100 ${height / 2} 100 0`;

  const targetPath = `M100 0V${height} Q100 ${height / 2} 100 0`;

  const pathVariants: Variants = {
    initial: { d: initialPath },
    animate: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className={styles.svgCurve}>
      <motion.path
        variants={pathVariants}
        initial="initial"
        animate="animate"
        exit="exit"></motion.path>
    </svg>
  );
}
export default Curve;
