"use client";
import styles from "./navigation.module.css";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useTranslation } from "../hooks/useTranslation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { IoIosMenu, IoMdClose } from "react-icons/io";

const Navigation = () => {
  const { t, locale } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileNavOpen]);

  const menuVariants = {
    closed: {
      x: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
        opacity: {
          duration: 0.3,
        },
      },
    },
    open: {
      x: "0%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
        opacity: {
          duration: 0.3,
        },
      },
    },
  };

  const menuLinksVariants = {
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.4 + i * 0.1,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  };

  const menuBottomVariants = {
    closed: {
      opacity: 0,
      y: "200%",
      transition: {
        duration: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
      delay: 0.9,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: 1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <nav
      className={`${styles.navContainer} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.nav}>
        <div className={styles.navLogo}>
          <Link href={`/${locale}`}>
            <Image
              src="/logo-typo.png"
              alt="diginow"
              width={100}
              height={100}
              className={styles.image}
            />
          </Link>
        </div>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href={`/${locale}/about`}>{t("about")}</Link>
          </li>
          <li className={styles.navItem}>
            <Link href={`/${locale}/services`}>{t("services")}</Link>
          </li>
          <li className={styles.navItem}>
            <Link href={`/${locale}/contact`}>{t("contact")}</Link>
          </li>
        </ul>
        <LanguageSwitcher containerClassName={styles.desktopLanguageSwitcher} />
        <button
          className={styles.mobileNavToggle}
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          aria-label="Toggle navigation"
        >
          <div
            className={`${styles.mobileNavToggleIcon} ${
              isMobileNavOpen ? styles.open : ""
            }`}
          >
            {isMobileNavOpen ? <IoMdClose /> : <IoIosMenu />}
          </div>
        </button>
      </div>
      <AnimatePresence>
        {isMobileNavOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className={styles.mobileNavItemsContainer}
          >
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={containerVariants}
              className={styles.mobileNavItems}
            >
              <motion.li
                custom={0}
                className={styles.mobileNavItem}
                variants={menuLinksVariants}
              >
                <Link
                  href={`/${locale}/about`}
                  onClick={() => setIsMobileNavOpen(false)}
                  className={styles.mobileNavLinks}
                >
                  {t("about")}
                </Link>
              </motion.li>
              <motion.li
                custom={1}
                className={styles.mobileNavItem}
                variants={menuLinksVariants}
              >
                <Link
                  href={`/${locale}/services`}
                  onClick={() => setIsMobileNavOpen(false)}
                  className={styles.mobileNavLinks}
                >
                  {t("services")}
                </Link>
              </motion.li>
              <motion.li
                custom={2}
                className={styles.mobileNavItem}
                variants={menuLinksVariants}
              >
                <Link
                  href={`/${locale}/contact`}
                  onClick={() => setIsMobileNavOpen(false)}
                  className={styles.mobileNavLinks}
                >
                  {t("contact")}
                </Link>
              </motion.li>
            </motion.ul>

            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={containerVariants}
              className={styles.mobileNavBottom}
            >
              <motion.div variants={menuBottomVariants}>
                <Link href={`/${locale}`}>
                  <Image
                    src="/logoWhite.png"
                    alt="diginow"
                    width={100}
                    height={100}
                    className={styles.mobileNavLogo}
                  />
                </Link>
              </motion.div>
              <motion.div variants={menuBottomVariants}>
                <LanguageSwitcher />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
