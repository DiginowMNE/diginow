"use client";

import styles from "./Services.module.css";
import { useTranslation } from "../hooks/useTranslation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdAccountTree } from "react-icons/md";
import { LiaDigitalTachographSolid } from "react-icons/lia";
import { FaCode } from "react-icons/fa6";

const Services = () => {
  const { t, locale } = useTranslation();

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const isMobile = windowWidth < 900;

  const [openCards, setOpenCards] = useState({
    card1: false,
    card2: false,
    card3: false,
  });

  const toggleCard = (cardId) => {
    setOpenCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  return (
    <div className={styles.services}>
      <div className={styles.servicesTitle}>
        <Fade cascade damping={0.2} direction="up" triggerOnce>
          <h1 className={styles.title}>{t("servicesTitle")}</h1>
          <h2 className={styles.servicesSubtitle}>{t("servicesSubtitle")}</h2>
        </Fade>
      </div>
      <Fade className={styles.servicesCards} direction="up" triggerOnce>
        <Fade cascade damping={0.2} direction="up" triggerOnce>
          <div className={styles.servicesCard}>
            <div className={styles.cardContent}>
              <MdAccountTree className={styles.cardIcon} />
              <div className={styles.cardTitleContainer}>
                <h2 className={styles.cardTitle}>{t("serviceCardTitleOne")}</h2>
              </div>
              <div className={styles.cardText}>
                <p
                  className={
                    openCards.card1
                      ? styles.cardTextShown
                      : styles.cardTextHidden
                  }
                >
                  {t("serviceCardTextOne")}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.servicesCard}>
            <div className={styles.cardContent}>
              <LiaDigitalTachographSolid className={styles.cardIcon} />
              <div className={styles.cardTitleContainer}>
                <h2 className={styles.cardTitle}>{t("serviceCardTitleTwo")}</h2>
              </div>
              <div className={styles.cardText}>
                <p
                  className={
                    openCards.card2
                      ? styles.cardTextShown
                      : styles.cardTextHidden
                  }
                >
                  {t("serviceCardTextTwo")}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.servicesCard}>
            <div className={styles.cardContent}>
              <FaCode className={styles.cardIcon} />
              <div className={styles.cardTitleContainer}>
                <h2 className={styles.cardTitle}>
                  {t("serviceCardTitleThree")}
                </h2>
              </div>
              <div className={styles.cardText}>
                <p
                  className={
                    openCards.card3
                      ? styles.cardTextShown
                      : styles.cardTextHidden
                  }
                >
                  {t("serviceCardTextThree")}
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </Fade>
      <Fade direction="up" triggerOnce>
        <div className={styles.servicesButton}>
          <Link
            href={`/${locale}/services`}
            className={styles.servicesButtonText}
          >
            {t("servicesButtonText")}
            <MdKeyboardArrowRight className={styles.servicesButtonIcon} />
          </Link>
        </div>
      </Fade>
    </div>
  );
};

export default Services;
