"use client";
import styles from "./Hero.module.css";
import { useTranslation } from "../hooks/useTranslation";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  const { t, locale } = useTranslation();

  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <Fade direction="left" className={styles.title}>
          <h1>
            <span dangerouslySetInnerHTML={{ __html: t("herotitle") }} />
            <span className={styles.dot}>.</span>
          </h1>
        </Fade>
        <Fade direction="right" className={styles.subtitle}>
          <p dangerouslySetInnerHTML={{ __html: t("herosubtitle") }} />
        </Fade>
        <Fade direction="up" className={styles.aboutButton}>
          <Link href={`/${locale}/about`} className={styles.aboutButtonText}>
            {t("aboutButtonText")}
            <MdKeyboardArrowRight className={styles.aboutButtonIcon} />
          </Link>
        </Fade>
      </div>
    </div>
  );
};

export default Hero;
