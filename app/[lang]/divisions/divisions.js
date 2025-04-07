"use client";

import styles from "../shared.module.css";
import { Fade, Slide } from "react-awesome-reveal";
import Footer from "../../utils/Footer";
import Navigation from "../../utils/navigation";
import { MdWeb } from "react-icons/md";
import { IoMdChatboxes } from "react-icons/io";
import { FaProjectDiagram } from "react-icons/fa";
import { useTranslation } from "../../hooks/useTranslation.js";

const Divisions = () => {
  const { t, locale } = useTranslation();

  return (
    <>
      <Navigation customClassName={styles.nav} customClassName2={styles.nav2} />
      <div className={styles.aboutUsContainer}>
        <h1 className={styles.title}>
          <Slide triggerOnce>{t("divisions")}</Slide>
        </h1>
        <div className={styles.aboutUsContent}>
          <Fade
            cascade
            damping={0.2}
            direction="up"
            triggerOnce
            className={styles.ourDivisions}
          >
            <h2
              className={styles.divisionsSubtitle}
              dangerouslySetInnerHTML={{ __html: t("divisionPageSubtitle") }}
            />
            <div className={styles.divisionsContainer}>
              <Fade cascade damping={0.2} direction="up" triggerOnce>
                <p
                  className={styles.divisionsDescription}
                  dangerouslySetInnerHTML={{ __html: t("divisionPageText") }}
                />
              </Fade>
              <div className={styles.divisionsItemContainer}>
                <Fade cascade damping={0.2} direction="up" triggerOnce>
                  <div className={styles.divisionsItem}>
                    <div className={styles.divisionsItemTitle}>
                      <FaProjectDiagram
                        className={styles.divisionsItemTitleIcon}
                      />
                      <h2
                        dangerouslySetInnerHTML={{
                          __html: t("divisionPageCardTitleOne"),
                        }}
                      />
                    </div>
                    <p
                      className={styles.divisionsItemDescription}
                      dangerouslySetInnerHTML={{
                        __html: t("divisionPageCardTextOne"),
                      }}
                    />
                  </div>
                  <div className={styles.divisionsItem}>
                    <div className={styles.divisionsItemTitle}>
                      <IoMdChatboxes
                        className={styles.divisionsItemTitleIcon}
                      />
                      <h2
                        dangerouslySetInnerHTML={{
                          __html: t("divisionPageCardTitleTwo"),
                        }}
                      />
                    </div>
                    <p
                      className={styles.divisionsItemDescription}
                      dangerouslySetInnerHTML={{
                        __html: t("divisionPageCardTextTwo"),
                      }}
                    />
                  </div>
                  <div className={styles.divisionsItem}>
                    <div className={styles.divisionsItemTitle}>
                      <MdWeb className={styles.divisionsItemTitleIcon} />
                      <h2
                        dangerouslySetInnerHTML={{
                          __html: t("divisionPageCardTitleThree"),
                        }}
                      />
                    </div>
                    <p
                      className={styles.divisionsItemDescription}
                      dangerouslySetInnerHTML={{
                        __html: t("divisionPageCardTextThree"),
                      }}
                    />
                  </div>
                </Fade>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Divisions;
