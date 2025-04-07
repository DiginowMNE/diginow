"use client";
import { MdKeyboardArrowRight } from "react-icons/md";
import Navigation from "../../utils/navigation";
import styles from "../shared.module.css";
import { Fade, Slide } from "react-awesome-reveal";
import Footer from "../../utils/Footer";
import { useTranslation } from "../../hooks/useTranslation";

import { GoGoal } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { LuEye } from "react-icons/lu";

const AboutClient = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navigation customClassName={styles.nav} customClassName2={styles.nav2} />
      <div className={styles.aboutUsContainer}>
        <h1 className={styles.title}>
          <Slide triggerOnce>{t("about")}</Slide>
        </h1>
        <div className={styles.aboutUsContent}>
          <Fade
            cascade
            damping={0.2}
            direction="up"
            triggerOnce
            className={styles.aboutUs}
          >
            <h2
              className={styles.aboutUsSubtitle}
              dangerouslySetInnerHTML={{
                __html: t("aboutTitle"),
              }}
            />
            <div className={styles.aboutUsContentText}>
              <p
                dangerouslySetInnerHTML={{
                  __html: t("aboutSubtitle"),
                }}
                className={styles.aboutUsContentTextParagraph}
              />
              <div className={styles.aboutUsContentTextItem}>
                <div className={styles.aboutUsContentTextItemTitle}>
                  <GoGoal />{" "}
                  <span className={styles.highlight}>
                    {t("aboutCardTitleOne")}
                  </span>
                </div>
                {t("aboutCardTextOne")}
              </div>
              <div className={styles.aboutUsContentTextItem}>
                <div className={styles.aboutUsContentTextItemTitle}>
                  {" "}
                  <LuEye />
                  <span className={styles.highlight}>
                    {t("aboutCardTitleTwo")}
                  </span>
                </div>
                {t("aboutCardTextTwo")}
              </div>
              <div className={styles.aboutUsContentTextItem}>
                <div className={styles.aboutUsContentTextItemTitle}>
                  {" "}
                  <FaUsers />
                  <span className={styles.highlight}>
                    {t("aboutCardTitleThree")}
                  </span>
                </div>
                {t("aboutCardTextThree")}
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutClient;
