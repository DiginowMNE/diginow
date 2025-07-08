"use client";
import styles from "./Hero.module.css";
import { useTranslation } from "../hooks/useTranslation";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";

import { MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  const { t, locale } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900); // Adjust the breakpoint as needed
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize); // Check on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener
    };
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <Fade
          direction={isMobile ? {} : "left"}
          triggerOnce
          className={styles.title}
        >
          <h2>
            <span dangerouslySetInnerHTML={{ __html: t("herotitle") }} />
          </h2>
        </Fade>
        <Fade
          direction={isMobile ? {} : "right"}
          triggerOnce
          className={styles.subtitle}
        >
          <p dangerouslySetInnerHTML={{ __html: t("herosubtitle") }} />
        </Fade>
        <Fade
          direction={isMobile ? {} : "up"}
          triggerOnce
          className={styles.aboutButton}
        >
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
