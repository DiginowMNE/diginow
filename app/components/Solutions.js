"use client";

import styles from "./Solutions.module.css";
import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Solutions = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress into y position
  const laptopY = useTransform(scrollYProgress, [0.2, 0.7], [400, 0]);
  const phoneY = useTransform(scrollYProgress, [0.4, 0.8], [200, 0]);

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
    <div className={styles.solutions} ref={ref}>
      <div className={styles.solutionsText}>
        <motion.div
          className={styles.solutionsTextContainer}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h1
            className={styles.solutionsTitle}
            variants={opacityVariants}
          >
            {t("solutionTitle")}
          </motion.h1>
          <motion.h2
            className={styles.solutionsSubtitle}
            variants={opacityVariants}
          >
            {t("solutionSubtitle")}
          </motion.h2>
          <motion.p
            className={styles.solutionsDescription}
            variants={opacityVariants}
          >
            {t("solutionText")}
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className={styles.solutionsImageLaptop}
        style={{
          y: laptopY,
          position: "absolute",
          bottom: 0,
          left: "10%",
          transform: "translateX(-50%)",
          zIndex: 1,
          willChange: "transform",
        }}
      >
        <Image
          src={"/images/laptop.png"}
          alt="solutions"
          width={1200}
          height={500}
        />
      </motion.div>

      <motion.div
        className={styles.solutionsImagePhone}
        style={{
          y: phoneY,
          position: "absolute",
          bottom: "-5%",
          left: "46%",
          transform: "translateY(20%)",
          zIndex: 2,
          willChange: "transform",
        }}
      >
        <Image
          src={"/images/phone.png"}
          alt="solutions"
          width={350}
          height={500}
        />
      </motion.div>
    </div>
  );
};

export default Solutions;
