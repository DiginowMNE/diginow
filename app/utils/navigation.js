"use client";
import styles from "./navigation.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useTranslation } from "../hooks/useTranslation";
import { Fade } from "react-awesome-reveal";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

const Navigation = ({ customClassName, customClassName2 }) => {
  const { t, locale } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMobileDropdownActive, setIsMobileDropdownActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileNavOpen ? "hidden" : "";
  }, [isMobileNavOpen]);

  const navClasses = `${styles.nav} ${scrolled ? styles.scrolled : ""} ${
    customClassName2 || ""
  }`;
  const containerClasses = `${styles.navContainer} ${customClassName || ""}`;
  const mobileNavClasses = `${styles.mobileNavItemsContainer} ${
    isMobileNavOpen ? styles.open : styles.closed
  }`;
  const mobileDropdownClasses = `${styles.mobileDropdown} ${
    isMobileDropdownActive ? styles.mobileDropdownActive : ""
  }`;
  const mobileArrowClasses = `${styles.mobileNavArrow} ${
    isMobileDropdownActive ? styles.openMobileIcon : ""
  }`;

  const handleMobileNavToggle = () => setIsMobileNavOpen(!isMobileNavOpen);
  const handleMobileDropdownToggle = () =>
    setIsMobileDropdownActive(!isMobileDropdownActive);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  // const dropdownItems = [
  //   { href: `/${locale}/about`, label: t("about") },
  //   { href: `/${locale}/divisions`, label: t("divisions") },
  //   { href: `/${locale}/team`, label: t("team") },
  //   { href: `/${locale}/projects`, label: t("projects") },
  // ];

  const navLinks = [
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/divisions`, label: t("divisions") },
    { href: `/${locale}/services`, label: t("services") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <div>
      <nav className={containerClasses}>
        <div className={navClasses}>
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
              {navLinks.map((link, index) => (
                <li key={index} className={styles.navItem}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                  </Link>
                  {/* {link.hasDropdown && (
                    <div
                      className={`${styles.dropdown} ${
                        scrolled ? styles.scrolledDropdown : ""
                      }`}
                    >
                      {dropdownItems.map((item, idx) => (
                        <Link key={idx} href={item.href}>
                          <div className={styles.dropdownItem}>
                            {item.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )} */}
                </li>
              ))}
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
              onClick={handleMobileNavToggle}
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

        <div className={mobileNavClasses}>
          <Fade>
            <ul className={styles.mobileNavItems}>
              {navLinks.map((link, index) => (
                <li key={index} className={styles.mobileNavItem}>
                  {link.hasDropdown ? (
                    <>
                      <span
                        className={styles.mobileNavLinks}
                        onClick={handleMobileDropdownToggle}
                      >
                        {link.label}
                        {/* <span className={mobileArrowClasses}>
                          <MdKeyboardArrowRight />
                        </span> */}
                      </span>
                      {/* <div className={mobileDropdownClasses}>
                        {dropdownItems.map((item, idx) => (
                          <div key={idx} className={styles.mobileDropdownItem}>
                            <Link href={item.href}>{item.label}</Link>
                          </div>
                        ))}
                      </div> */}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={closeMobileNav}
                      className={styles.mobileNavLinks}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
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
