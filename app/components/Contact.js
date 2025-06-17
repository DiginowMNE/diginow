"use client";

import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "../hooks/useTranslation";
import styles from "./Contact.module.css";

const Contact = () => {
  const { t, locale } = useTranslation();

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactImageContainer}>
        <Image
          src="/ContactUs.jpg"
          alt="Contact"
          fill
          priority
          className={styles.contactImage}
        />
      </div>
      <div className={styles.contact}>
        <Fade cascade damping={0.2} direction="up" triggerOnce>
          <h1 className={styles.contactTitle}>{t("contactTitle")}</h1>
          <p
            className={styles.contactText}
            dangerouslySetInnerHTML={{ __html: t("contactText") }}
          />
          <div className={styles.contactButton}>
            <Link
              href={`/${locale}/contact`}
              className={styles.contactButtonText}
            >
              {t("contactNav")}
              <MdKeyboardArrowRight className={styles.contactButtonIcon} />
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Contact;
