"use client";
import styles from "./navigation.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useTranslation } from "../hooks/useTranslation";
import { Fade, Slide } from "react-awesome-reveal";

import { IoIosMenu, IoMdClose } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

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
      <nav className={styles.navContainer}>
        <div className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
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
          <Fade cascade damping={0.2} triggerOnce>
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
          </Fade>
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
          <Fade>
            <ul className={styles.mobileNavItems}>
              <li className={styles.mobileNavItem}>
                <Link
                  href={`/${locale}/about`}
                  onClick={() => setIsMobileNavOpen(false)}
                  className={styles.mobileNavLinks}
                >
                  {t("about")}
                  <MdKeyboardArrowRight />
                </Link>
              </li>
              <li className={styles.mobileNavItem}>
                <Link
                  href={`/${locale}/services`}
                  onClick={() => setIsMobileNavOpen(false)}
                  className={styles.mobileNavLinks}
                >
                  {t("services")}
                  <MdKeyboardArrowRight />
                </Link>
              </li>
              <li className={styles.mobileNavItem}>
                <Link
                  href={`/${locale}/contact`}
                  onClick={() => setIsMobileNavOpen(false)}
                  className={styles.mobileNavLinks}
                >
                  {t("contact")}
                  <MdKeyboardArrowRight />
                </Link>
              </li>
            </ul>
          </Fade>
          <div className={styles.mobileNavBottom}>
            <Fade>
              <LanguageSwitcher />
            </Fade>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
