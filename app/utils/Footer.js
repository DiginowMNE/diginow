"use client";

import styles from "./Footer.module.css";
import Link from "next/link";
import { useTranslation } from "../hooks/useTranslation";
import Image from "next/image";

const Footer = () => {
  const { t, locale } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerMain}>
          <div className={styles.footerBrand}>
            <Link href={`/${locale}`} className={styles.footerLogo}>
              <Image
                src="/logoWhite.png"
                alt="diginow"
                width={50}
                height={50}
                className={styles.image}
              />
            </Link>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.footerSection}>
              <h3 className={styles.footerTitle}>{t("navigation")}</h3>
              <nav className={styles.footerNav}>
                <Link href={`/${locale}`}>{t("home")}</Link>
                <Link href={`/${locale}/about`}>{t("about")}</Link>
                <Link href={`/${locale}/services`}>{t("services")}</Link>
                <Link href={`/${locale}/contact`}>{t("contact")}</Link>
              </nav>
            </div>

            <div className={styles.footerSection}>
              <h3 className={styles.footerTitle}>{t("contact")}</h3>
              <div className={styles.footerContact}>
                <p>diginowmne@gmail.com</p>
                <p>Podgorica, Montenegro</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} Diginow. {t("allRightsReserved")}
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
