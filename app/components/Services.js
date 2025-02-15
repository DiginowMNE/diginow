"use client";

import styles from "./Services.module.css";
import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useState } from "react";

import { MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";

const Services = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const containerVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.2,
        delayChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const opacityVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  return (
    <div className={styles.services} ref={ref}>
      <motion.div
        className={styles.servicesTitle}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h1 className={styles.title} variants={opacityVariants}>
          {t("servicesTitle")}
        </motion.h1>
        <motion.h2
          className={styles.servicesSubtitle}
          variants={opacityVariants}
        >
          {t("servicesSubtitle")}
        </motion.h2>
        <motion.p
          className={styles.servicesTitleLine}
          variants={opacityVariants}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </motion.p>
        <motion.div
          className={styles.servicesButton}
          variants={opacityVariants}
        >
          <Link href="/services" className={styles.servicesButtonText}>
            {t("servicesButtonText")}
            <MdKeyboardArrowRight className={styles.servicesButtonIcon} />
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.servicesCards}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className={styles.servicesCard} variants={opacityVariants}>
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
                  openCards.card1 ? styles.cardTextShown : styles.cardTextHidden
                }
              >
                {t("serviceCardTextOne")}
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div className={styles.servicesCard} variants={opacityVariants}>
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
                  openCards.card2 ? styles.cardTextShown : styles.cardTextHidden
                }
              >
                {t("serviceCardTextTwo")}
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div className={styles.servicesCard} variants={opacityVariants}>
          <div className={styles.cardContent}>
            <div
              className={styles.cardTitleContainer}
              onClick={() => toggleCard("card3")}
              data-open={openCards.card3}
            >
              <h2 className={styles.cardTitle}>{t("serviceCardTitleThree")}</h2>
              <HiOutlinePlusSm className={styles.cardIcon} />
            </div>
            <div className={styles.cardText}>
              <p
                className={
                  openCards.card3 ? styles.cardTextShown : styles.cardTextHidden
                }
              >
                {t("serviceCardTextThree")}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
