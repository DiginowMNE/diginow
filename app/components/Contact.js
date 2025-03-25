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
    <div className={styles.contact}>
      <Fade direction="up" triggerOnce>
        <h1 className={styles.contactTitle}>{t("contactTitle")}</h1>
      </Fade>
      <Fade direction="up" triggerOnce>
        <p
          className={styles.contactText}
          dangerouslySetInnerHTML={{ __html: t("contactText") }}
        />
      </Fade>
      <Fade direction="up" triggerOnce className={styles.contactButton}>
        <Link href={`/${locale}/contact`} className={styles.contactButtonText}>
          {t("contact")}
          <MdKeyboardArrowRight className={styles.contactButtonIcon} />
        </Link>
      </Fade>
    </div>
  );
};

export default Contact;
