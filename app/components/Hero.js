"use client";
import styles from "./Hero.module.css";
import { useTranslation } from "../hooks/useTranslation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  const { t, locale } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

  const itemVariants = {
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
    <div className={styles.hero}>
      <motion.div
        ref={ref}
        className={styles.heroContent}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h1 className={styles.title} variants={itemVariants}>
          <span dangerouslySetInnerHTML={{ __html: t("herotitle") }} />
          <span className={styles.dot}>.</span>
        </motion.h1>
        <motion.p
          className={styles.subtitle}
          variants={itemVariants}
          dangerouslySetInnerHTML={{ __html: t("herosubtitle") }}
        />
        <motion.div className={styles.aboutButton} variants={itemVariants}>
          <Link href={`/${locale}/about`} className={styles.aboutButtonText}>
            {t("aboutButtonText")}
            <MdKeyboardArrowRight className={styles.aboutButtonIcon} />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
