"use client";
import styles from "./navigation.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useTranslation } from "../hooks/useTranslation";
import { Fade, Slide } from "react-awesome-reveal";

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
  return (
    <div>
      <nav
        className={`${styles.navContainer} ${scrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.nav}>
          <Fade direction="left" triggerOnce className={styles.navLogo}>
            <Link href={`/${locale}`}>
              <Image
                src="/logo-typo.png"
                alt="diginow"
                width={100}
                height={100}
                className={styles.image}
              />
            </Link>
          </Fade>
          <ul className={styles.navItems}>
            <Fade direction="down" triggerOnce>
              <li className={styles.navItem}>
                <Link href={`/${locale}/about`}>{t("about")}</Link>
              </li>
            </Fade>
            <Fade direction="down" triggerOnce>
              <li className={styles.navItem}>
                <Link href={`/${locale}/services`}>{t("services")}</Link>
              </li>
            </Fade>
            <Fade direction="down" triggerOnce>
              <li className={styles.navItem}>
                <Link href={`/${locale}/contact`}>{t("contact")}</Link>
              </li>
            </Fade>
          </ul>
          <Fade direction="right" triggerOnce>
            <LanguageSwitcher
              containerClassName={styles.desktopLanguageSwitcher}
            />
          </Fade>
          <Fade
            direction="right"
            triggerOnce
            className={styles.mobileNavToggle}
          >
            <button
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
          </Fade>
        </div>
        <div
          className={`${styles.mobileNavItemsContainer} ${
            isMobileNavOpen ? styles.open : styles.closed
          }`}
        >
          <ul className={styles.mobileNavItems}>
            <li className={styles.mobileNavItem}>
              <Link
                href={`/${locale}/about`}
                onClick={() => setIsMobileNavOpen(false)}
                className={styles.mobileNavLinks}
              >
                {t("about")}
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                href={`/${locale}/services`}
                onClick={() => setIsMobileNavOpen(false)}
                className={styles.mobileNavLinks}
              >
                {t("services")}
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                href={`/${locale}/contact`}
                onClick={() => setIsMobileNavOpen(false)}
                className={styles.mobileNavLinks}
              >
                {t("contact")}
              </Link>
            </li>
          </ul>
          <div className={styles.mobileNavBottom}>
            <div>
              <Link href={`/${locale}`}>
                <Image
                  src="/logoWhite.png"
                  alt="diginow"
                  width={100}
                  height={100}
                  className={styles.mobileNavLogo}
                />
              </Link>
            </div>
            <div>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
