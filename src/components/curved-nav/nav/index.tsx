import Link from "next/link";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { links_variants, sidebar__variants } from "./anim";
import Curve from "../curve";
import { MotionLink } from "./motion-link";
import { useState } from "react";

const NAVLINKS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const SOCIAL_LINKS = [
  {
    title: "Awwwards",
    href: "https://awwwards.com",
  },
  {
    title: "Twitter",
    href: "https://twitter.com",
  },
  {
    title: "Instagram",
    href: "https://instagram.com",
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com",
  },
];

type NavProps = {
  close: () => void;
};

function Nav({ close }: NavProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <motion.div
      variants={sidebar__variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={styles.nav}>
      <div className={styles.body}>
        {/* header */}
        <h2 className={styles.nav__heading}>Navigation</h2>

        <div className={styles.stripe} />

        {/* body */}
        <ul className={styles.nav__links_list}>
          {NAVLINKS.map((link, index) => (
            <motion.li
              variants={links_variants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={index}
              key={link.href}
              className={`${styles.nav__link_item} ${
                selectedIndex === index ? styles.active : ""
              }`}>
              <MotionLink
                onClick={() => {
                  setSelectedIndex(index);
                  close();
                }}
                href={link.href}>
                {link.title}
              </MotionLink>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* footer */}
      <div className="">
        <h2 className={styles.social__heading}>Social</h2>
        <ul className={styles.social_links}>
          {SOCIAL_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <Curve />
    </motion.div>
  );
}
export default Nav;
