"use client";

import Navigation from "../../utils/navigation";
import { useTranslation } from "../../hooks/useTranslation";
import styles from "./page.module.css";
import Footer from "../../utils/Footer";
import { Slide, Fade } from "react-awesome-reveal";
import { ReactOriginalWordmark } from "devicons-react";
import { JavascriptOriginal } from "devicons-react";
import { Html5OriginalWordmark } from "devicons-react";
import { Css3OriginalWordmark } from "devicons-react";
import { NextjsOriginalWordmark } from "devicons-react";
import { NodejsOriginalWordmark } from "devicons-react";
import { FigmaOriginal } from "devicons-react";
import { useEffect, useState } from "react";

import { HiSpeakerphone } from "react-icons/hi";
import { FaSuitcase } from "react-icons/fa";
import { HiServer, HiTemplate } from "react-icons/hi";
import { HiTerminal } from "react-icons/hi";

export default function ContactClient() {
  const { t } = useTranslation();
  const [iconSize, setIconSize] = useState("100");

  useEffect(() => {
    const handleResize = () => {
      const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      if (vw < 480) {
        // mobile
        setIconSize("50");
      } else if (vw <= 768) {
        // tablet
        setIconSize("75");
      } else if (vw <= 1024) {
        // small laptop
        setIconSize("85");
      } else if (vw <= 1440) {
        // desktop
        setIconSize("100");
      } else if (vw <= 1920) {
        // large desktop
        setIconSize("120");
      } else if (vw <= 2560) {
        // extra large desktop
        setIconSize("140");
      } else if (vw <= 3200) {
        // extra extra large desktop
        setIconSize("160");
      } else {
        setIconSize("180");
      }
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main>
      <Navigation customClassName={styles.nav} customClassName2={styles.nav2} />
      <div className={styles.container}>
        <div className={styles.title}>
          <Slide triggerOnce>
            <h1>{t("servicesTitle")}</h1>
          </Slide>
        </div>
        <div className={styles.servicesContainer}>
          <div className={styles.service}>
            <div className={styles.serviceContent}>
              <Fade triggerOnce direction="up" cascade damping={0.2}>
                <h2
                  className={`${styles.serviceType} ${styles.serviceTypeBlue}`}
                >
                  {t("servicePageProject")}
                </h2>
                <div className={styles.serviceContentText}>
                  <h3 className={styles.serviceTitle}>
                    {t("servicePageProjectTitle")}
                  </h3>
                  <p>{t("servicePageProjectText")}</p>
                </div>
              </Fade>
            </div>
            <Fade
              direction="up"
              cascade
              damping={0.2}
              triggerOnce
              className={styles.serviceListContainer}
            >
              <div className={styles.serviceList}>
                <div className={styles.serviceListItem}>
                  <div className={styles.serviceListItemTitleContainer}>
                    <div
                      className={`${styles.serviceListItemNumber} ${styles.serviceListItemNumberProject}`}
                    >
                      <HiSpeakerphone />
                    </div>
                    <p className={styles.serviceListItemTitle}>
                      <span>{t("servicePageProjectCardTitleOne")}</span>
                    </p>
                  </div>
                  <div
                    className={`${styles.serviceListItemContent} ${styles.serviceListItemContentProject}`}
                  >
                    <span className={styles.serviceListContent}>
                      {t("servicePageProjectCardTextOne")}
                    </span>
                  </div>
                </div>
                <div className={styles.serviceListItem}>
                  <div className={styles.serviceListItemTitleContainer}>
                    <div
                      className={`${styles.serviceListItemNumber} ${styles.serviceListItemNumberProject}`}
                    >
                      <FaSuitcase />
                    </div>
                    <p className={styles.serviceListItemTitle}>
                      <span>{t("servicePageProjectCardTitleTwo")}</span>
                    </p>
                  </div>
                  <div
                    className={`${styles.serviceListItemContent} ${styles.serviceListItemContentProject}`}
                  >
                    <span className={styles.serviceListContent}>
                      {t("servicePageProjectCardTextTwo")}
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className={`${styles.service} ${styles.digitalization}`}>
            <div
              className={`${styles.serviceContent} ${styles.serviceContentDigitalization}`}
            >
              <Fade triggerOnce direction="up" cascade damping={0.2}>
                <h2
                  className={`${styles.serviceType} ${styles.serviceTypeBlue}`}
                >
                  {t("servicePageDigitalization")}
                </h2>
                <div className={styles.serviceContentText}>
                  <h3
                    className={`${styles.serviceTitle} ${styles.serviceTitleDigitalization}`}
                  >
                    {t("servicePageDigitalizationTitle")}
                  </h3>
                  <div>
                    <p className={styles.digiText}>
                      {t("servicePageDigitalizationText")}
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
            <div
              className={`${styles.serviceListContainer} ${styles.serviceListContainerDigitalization}`}
            >
              <Fade direction="up" cascade damping={0.2} triggerOnce>
                <ul className={styles.serviceList}>
                  <li
                    className={`${styles.serviceListItem} ${styles.serviceListItemDigitalization}`}
                  >
                    <div className={styles.serviceListItemTitleContainer}>
                      <div
                        className={`${styles.serviceListItemNumber} ${styles.serviceListItemNumberDigitalization}`}
                      >
                        <HiServer />
                      </div>
                      <p className={styles.serviceListItemTitle}>
                        {t("servicePageDigitalizationCardTitleOne")}
                      </p>
                    </div>
                    <div className={styles.serviceListItemContent}>
                      <span className={styles.serviceListContent}>
                        {t("servicePageDigitalizationCardTextOne")}
                      </span>
                    </div>
                  </li>
                  <li
                    className={`${styles.serviceListItem} ${styles.serviceListItemDigitalization}`}
                  >
                    <div className={styles.serviceListItemTitleContainer}>
                      <div
                        className={`${styles.serviceListItemNumber} ${styles.serviceListItemNumberDigitalization}`}
                      >
                        <HiTemplate />
                      </div>
                      <p className={styles.serviceListItemTitle}>
                        {t("servicePageDigitalizationCardTitleTwo")}
                      </p>
                    </div>
                    <div className={styles.serviceListItemContent}>
                      <span className={styles.serviceListContent}>
                        {t("servicePageDigitalizationCardTextTwo")}
                      </span>
                    </div>
                  </li>
                </ul>
              </Fade>
            </div>
          </div>
          <div className={styles.serviceWeb}>
            <Fade triggerOnce direction="up" cascade damping={0.2}>
              <h2 className={`${styles.serviceType} ${styles.serviceTypeBlue}`}>
                {t("servicePageWeb")}
              </h2>
              <h3
                className={`${styles.serviceTitle} ${styles.serviceTitleWeb}`}
              >
                <HiTerminal />
                {t("servicePageWebTitle")}
              </h3>
              <div className={styles.webText}>
                <p>{t("servicePageWebTextOne")}</p>
                <p>{t("servicePageWebTextTwo")}</p>
              </div>
            </Fade>
            <div className={styles.webIcons}>
              <Fade triggerOnce direction="up" cascade damping={0.2}>
                <Html5OriginalWordmark
                  size={iconSize}
                  className={styles.webIconItem}
                />
                <Css3OriginalWordmark
                  size={iconSize}
                  className={styles.webIconItem}
                />
                <JavascriptOriginal
                  size={iconSize}
                  className={styles.webIconItem}
                />
                <ReactOriginalWordmark
                  size={iconSize}
                  className={styles.webIconItem}
                />
                <NextjsOriginalWordmark
                  size={iconSize}
                  className={styles.webIconItem}
                />
                <NodejsOriginalWordmark
                  size={iconSize}
                  className={styles.webIconItem}
                />
                <FigmaOriginal size={iconSize} className={styles.webIconItem} />
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
