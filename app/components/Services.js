"use client";

import styles from "./Services.module.css";
import { useTranslation } from "../hooks/useTranslation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

import { MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";

const Services = () => {
  const { t } = useTranslation();

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
        <Fade cascade damping={0.2} triggerOnce>
          <h1 className={styles.title}>{t("servicesTitle")}</h1>
          <h2 className={styles.servicesSubtitle}>{t("servicesSubtitle")}</h2>
          <p className={styles.servicesTitleLine}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          {!isMobile && (
            <div className={styles.servicesButton}>
              <Link href="/services" className={styles.servicesButtonText}>
                {t("servicesButtonText")}
              </Link>
            </div>
          )}
        </Fade>
      </div>
      <Fade className={styles.servicesCards} triggerOnce>
        <Fade cascade damping={0.2} triggerOnce>
          <div className={styles.servicesCard}>
            <div className={styles.cardContent}>
              <div
                className={styles.cardTitleContainer}
                onClick={() => toggleCard("card1")}
                data-open={openCards.card1}
              >
                <h2 className={styles.cardTitle}>{t("serviceCardTitleOne")}</h2>
                <HiOutlinePlusSm className={styles.cardIcon} />
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
              <div
                className={styles.cardTitleContainer}
                onClick={() => toggleCard("card2")}
                data-open={openCards.card2}
              >
                <h2 className={styles.cardTitle}>{t("serviceCardTitleTwo")}</h2>
                <HiOutlinePlusSm className={styles.cardIcon} />
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
              <div
                className={styles.cardTitleContainer}
                onClick={() => toggleCard("card3")}
                data-open={openCards.card3}
              >
                <h2 className={styles.cardTitle}>
                  {t("serviceCardTitleThree")}
                </h2>
                <HiOutlinePlusSm className={styles.cardIcon} />
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
      {isMobile && (
        <div
          className={`${styles.servicesButton} ${styles.mobileServicesButton}`}
        >
          <Link href="/services" className={styles.servicesButtonText}>
            {t("servicesButtonText")}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Services;
