"use client";

import React from "react";
import styles from "./Division.module.css";
import { useTranslation } from "../hooks/useTranslation";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const Division = () => {
  const { t, locale } = useTranslation();

  return (
    <div className={styles.division}>
      <div className={styles.divisionContent}>
        <div className={styles.divisionTextContainer}>
          <Fade cascade damping={0.2} direction="up" triggerOnce>
            <h2 className={styles.divisionTitle}>{t("divisionTitle")}</h2>
            <h3 className={styles.divisionSubtitle}>{t("divisionSubtitle")}</h3>
            <p className={styles.divisionText}>{t("divisionText")}</p>
            <div className={styles.divisionButton}>
              <Link
                href={`/${locale}/divisions`}
                className={styles.divisionButtonText}
              >
                {t("divisionButtonText")}
                <MdKeyboardArrowRight className={styles.divisionButtonIcon} />
              </Link>
            </div>
          </Fade>
        </div>
      </div>
      <div className={styles.divisionImageContainer}>
        <Image
          src="/images/subscriptions2.jpg"
          alt="subscription"
          fill
          sizes="50vw"
          priority
          className={styles.divisionImage}
        />
      </div>
    </div>
  );
};

export default Division;
