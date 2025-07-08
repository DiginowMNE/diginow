"use client";

import styles from "./Solutions.module.css";
import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";
import { Slide, Fade } from "react-awesome-reveal";

const Solutions = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.solutions}>
      <div className={styles.solutionsText}>
        <div className={styles.solutionsTextContainer}>
          <Fade cascade damping={0.2} direction="up" triggerOnce>
            <h2 className={styles.solutionsTitle}>{t("solutionTitle")}</h2>
            <h2 className={styles.solutionsSubtitle}>
              {t("solutionSubtitle")}
            </h2>
            <p className={styles.solutionsDescription}>{t("solutionText")}</p>
          </Fade>
        </div>
      </div>

      <Slide
        direction="up"
        triggerOnce
        duration={1500}
        className={styles.solutionsImageLaptop}
      >
        <Image
          src={"/images/laptop.png"}
          alt="solutions"
          width={1500}
          height={1000}
          className={styles.imageLaptop}
          priority
        />
      </Slide>

      <Slide
        className={styles.solutionsImagePhone}
        direction="up"
        triggerOnce
        duration={1000}
      >
        <Image
          src={"/images/phone.png"}
          alt="solutions"
          width={450}
          height={500}
          className={styles.imagePhone}
        />
      </Slide>
    </div>
  );
};

export default Solutions;
