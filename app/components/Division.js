"use client";

import React, { useRef } from "react";
import styles from "./Division.module.css";
import { useTranslation } from "../hooks/useTranslation";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";

const Division = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Create smooth up/down movement only
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

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
    <div className={styles.subscription} ref={containerRef}>
      <div className={styles.subscriptionContent}>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={styles.subscriptionTextContainer}
        >
          <motion.h2
            className={styles.subscriptionTitle}
            variants={opacityVariants}
          >
            {t("divisionTitle")}
          </motion.h2>
          <motion.h3
            className={styles.subscriptionSubtitle}
            variants={opacityVariants}
          >
            {t("divisionSubtitle")}
          </motion.h3>
          <motion.p
            className={styles.subscriptionText}
            variants={opacityVariants}
          >
            {t("divisionText")}
          </motion.p>
        </motion.div>
      </div>
      <motion.div className={styles.subscriptionImageContainer} style={{ y }}>
        <Image
          src="/images/subscriptions2.jpg"
          alt="subscription"
          width={800}
          height={600}
          className={styles.subscriptionImage}
        />
      </motion.div>
    </div>
  );
};

export default Division;
