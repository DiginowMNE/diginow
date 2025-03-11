"use client";

import Navigation from "../../utils/navigation";
import { useTranslation } from "../../hooks/useTranslation";
import styles from "./page.module.css";
import Footer from "../../utils/Footer";
import AddIcon from "@mui/icons-material/Add";
import { Slide } from "react-awesome-reveal";
import { ReactOriginalWordmark } from "devicons-react";
import { JavascriptOriginal } from "devicons-react";
import { Html5OriginalWordmark } from "devicons-react";
import { Css3OriginalWordmark } from "devicons-react";
import { NextjsOriginalWordmark } from "devicons-react";
import { NodejsOriginalWordmark } from "devicons-react";
import { useEffect, useState } from "react";

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
      } else if (vw < 768) {
        // tablet
        setIconSize("75");
      } else if (vw < 1024) {
        // small laptop
        setIconSize("85");
      } else {
        // desktop
        setIconSize("100");
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
          <Slide>
            <h1>Services</h1>
          </Slide>
        </div>
        <div className={styles.servicesContainer}>
          <div className={styles.service}>
            <div className={styles.serviceContent}>
              <h2 className={styles.serviceType}>
                Project Management Training
              </h2>
              <h3 className={styles.serviceTitle}>
                Master the Art of Project Management
              </h3>
              <p>
                Project management is one of the most critical skills in the
                business world. Diginow’s 35-hour PMP-focused training program
                is not only limited to exam preparation but also equips you with
                practical knowledge and techniques to succeed in real-world
                projects.
              </p>
            </div>
            <div className={styles.serviceListContainer}>
              <ul className={styles.serviceList}>
                <li className={styles.serviceListItem}>
                  <div
                    className={`${styles.serviceListItemNumber} ${styles.serviceListItemNumberProject}`}
                  >
                    1.
                  </div>
                  <div
                    className={`${styles.serviceListItemContent} ${styles.serviceListItemContentProject}`}
                  >
                    <p className={styles.serviceListItemTitle}>
                      <span>Training Set for NGOs</span>
                    </p>
                    <span className={styles.serviceListContent}>
                      Specifically designed to meet the unique needs of
                      non-profit organizations, covering all aspects from
                      project cycle management to fundraising strategies.
                    </span>
                  </div>
                </li>
                <li className={styles.serviceListItem}>
                  <div
                    className={`${styles.serviceListItemNumber} ${styles.serviceListItemNumberProject}`}
                  >
                    2.
                  </div>
                  <div
                    className={`${styles.serviceListItemContent} ${styles.serviceListItemContentProject}`}
                  >
                    <p className={styles.serviceListItemTitle}>
                      <span>Training Set for For-Profit Companies</span>
                    </p>
                    <span className={styles.serviceListContent}>
                      Tailored to meet the competitive dynamics of the business
                      world, focusing on time management, risk analysis, and
                      team coordination. Moreover, all our training sessions are
                      tailor-made to suit your individual and organizational
                      needs. We work with you to deliver the most effective
                      learning experience.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${styles.service} ${styles.digitalization}`}>
            <div
              className={`${styles.serviceContent} ${styles.serviceContentDigitalization}`}
            >
              <h2 className={styles.serviceType}>Digitalization Consultancy</h2>
              <h3
                className={`${styles.serviceTitle} ${styles.serviceTitleDigitalization}`}
              >
                Digitalization is the key to the future success of businesses
                and NGOs.
              </h3>
              <p className={styles.digiText}>
                At Diginow, we analyze your processes, identify areas for
                improvement, and create digital transformation strategies
                tailored to your needs.
              </p>
              <p>
                All our digitalization projects are executed with a tailor-made
                approach, working closely with you to maximize the efficiency of
                your technological investments.
              </p>
            </div>
            <div
              className={`${styles.serviceListContainer} ${styles.serviceListContainerDigitalization}`}
            >
              <ul className={styles.serviceList}>
                <li
                  className={`${styles.serviceListItem} ${styles.serviceListItemDigitalization}`}
                >
                  <div className={styles.serviceListItemNumber}>1.</div>
                  <div className={styles.serviceListItemContent}>
                    <p className={styles.serviceListItemTitle}>
                      Digitalization Solutions for NGOs
                    </p>
                    <span className={styles.serviceListContent}>
                      Providing technological tools tailored to NGOs, from
                      fundraising tools to operational efficiency strategies.
                    </span>
                  </div>
                </li>
                <li
                  className={`${styles.serviceListItem} ${styles.serviceListItemDigitalization}`}
                >
                  <div className={styles.serviceListItemNumber}>2.</div>
                  <div className={styles.serviceListItemContent}>
                    <p className={styles.serviceListItemTitle}>
                      Digitalization Strategies for SMEs
                    </p>
                    <span className={styles.serviceListContent}>
                      Developing systems to enhance your competitiveness and
                      optimize your business processes.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.serviceWeb}>
            <h2 className={styles.serviceType}>Web Development & Design</h2>
            <h3 className={styles.serviceTitle}>
              Web Solutions That Reflect Your Goals
            </h3>
            <div className={styles.webText}>
              <p>
                Your website is your face in the digital world, and we are
                committed to designing it in the best possible way. We develop
                fast, secure, and performance-oriented web solutions. Our goal
                is to create websites that align with your business objectives
                and resonate with your audience.
              </p>
              <p>
                We create creative and modern designs that reflect the unique
                identity of your company. Our design process prioritizes both
                aesthetic elements and user experience. We aim to create a
                visual language that captivates your visitors at first glance
                and drives them to action.
              </p>
            </div>
            <div className={styles.webIcons}>
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
