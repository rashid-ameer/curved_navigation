"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import Nav from "../nav";
import { AnimatePresence, motion } from "framer-motion";

function MenuButton() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        onClick={() => setActive(!active)}
        className={`${styles.button} ${active ? styles.active : ""}  `}>
        <div className={`${styles.buttonBars}`}></div>
      </div>

      <AnimatePresence>
        {active && (
          <>
            <motion.div
              onClick={() => setActive(false)}
              key={"overlay"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35, transition: { duration: 0.8 } }}
              exit={{ opacity: 0, transition: { duration: 0.8 } }}
              className={styles.overlay}
            />
            <Nav
              key={"nav"}
              close={() => setActive(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
export default MenuButton;
