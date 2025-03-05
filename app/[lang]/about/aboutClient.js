"use client";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Navigation from "../../utils/navigation";
import styles from "./page.module.css";
import { Fade, Slide } from "react-awesome-reveal";
import AddIcon from "@mui/icons-material/Add";

const AboutClient = () => {
  const [activeSection, setActiveSection] = useState("about");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <Navigation customClassName={styles.nav} customClassName2={styles.nav2} />
      <div className={styles.aboutUsContainer}>
        <div className={styles.sideNav}>
          <Fade cascade damping={0.2} direction="top" triggerOnce>
            <div
              className={`${styles.sideNavItem} ${
                activeSection === "about" ? styles.active : ""
              }`}
              onClick={() => handleNavClick("about")}
            >
              <MdKeyboardArrowRight />
              <p>About Us</p>
            </div>
            <div
              className={`${styles.sideNavItem} ${
                activeSection === "divisions" ? styles.active : ""
              }`}
              onClick={() => handleNavClick("divisions")}
            >
              <MdKeyboardArrowRight />
              <p>Our Divisions</p>
            </div>
            <div
              className={`${styles.sideNavItem} ${
                activeSection === "team" ? styles.active : ""
              }`}
              onClick={() => handleNavClick("team")}
            >
              <MdKeyboardArrowRight />
              <p>Our Team</p>
            </div>
            <div
              className={`${styles.sideNavItem} ${
                activeSection === "projects" ? styles.active : ""
              }`}
              onClick={() => handleNavClick("projects")}
            >
              <MdKeyboardArrowRight />
              <p>Our Projects</p>
            </div>
          </Fade>
        </div>
        <div className={styles.aboutUsContent}>
          <Fade
            cascade
            damping={0.2}
            direction="up"
            triggerOnce
            className={`${styles.aboutUs} ${
              activeSection === "about" ? styles.active : ""
            }`}
          >
            <h1>About Us</h1>
            <p>
              Diginow is a dynamic and innovative company committed to
              empowering small and medium-sized enterprises (SMEs) and
              non-governmental organizations (NGOs) through cutting-edge digital
              solutions, strategic consultancy, and specialized training. With a
              firm foundation in engineering and technology, we bridge the gap
              between traditional business models and the digital future,
              ensuring that our clients stay ahead in an ever-evolving
              marketplace.
            </p>
            <p>
              At Diginow, we believe in fostering long-term partnerships,
              tailoring our services to meet the unique needs of each
              organization. Our mission is to simplify digital transformation,
              enhance project management efficiency, and provide seamless web
              solutions that align with our clients&#39; objectives. Whether
              it&#39;s through expert-led training, consultancy, or technical
              implementation, we are dedicated to delivering excellence and
              driving sustainable growth for our partners.
            </p>
            <p>
              Our team is composed of highly skilled professionals with
              extensive industry experience. We are passionate about innovation,
              adaptability, and strategic thinking, ensuring that every project
              we undertake results in tangible success for our clients.
            </p>
          </Fade>
          <Fade
            cascade
            damping={0.2}
            direction="up"
            triggerOnce
            className={`${styles.ourDivisions} ${
              activeSection === "divisions" ? styles.active : ""
            }`}
          >
            <h1>Our Divisions</h1>
            <p className={styles.divisionsDescription}>
              Diginow is structured into specialized divisions to provide
              focused expertise in key areas of digital transformation,
              consultancy, and training. Our divisions include:
            </p>
            <Fade cascade damping={0.2} direction="up" triggerOnce>
              <div className={styles.divisionsContainer}>
                <div>
                  <h3>Project Management Training</h3>
                  <p>
                    Providing comprehensive training programs designed to equip
                    professionals with essential project management skills,
                    including PMP certification courses tailored for NGOs and
                    businesses.
                  </p>
                </div>
                <div>
                  <h3>Digitalization Consultancy</h3>
                  <p>
                    Helping organizations streamline operations, adopt
                    innovative digital tools, and create sustainable digital
                    transformation strategies.
                  </p>
                </div>
                <div>
                  <h3>Web Development & Design</h3>
                  <p>
                    Crafting user-friendly, high-performance websites that align
                    with business goals and enhance digital presence.
                  </p>
                </div>
                <div>
                  <h3>Digital Marketing</h3>
                  <p>
                    Developing effective digital marketing strategies to
                    increase visibility and drive growth.
                  </p>
                </div>
              </div>
            </Fade>
            <p className={styles.divisionsDescription}>
              Each division operates with a commitment to excellence, ensuring
              that our clients receive customized and effective solutions to
              their unique challenges.
            </p>
          </Fade>
          <Fade
            cascade
            damping={0.2}
            className={`${styles.ourTeam} ${
              activeSection === "team" ? styles.active : ""
            }`}
          >
            <h1>Our Team</h1>
            <p>
              We are a team of experienced professionals who are dedicated to
              providing the best possible solutions to our clients.
            </p>
          </Fade>
          <Fade
            cascade
            damping={0.2}
            className={`${styles.ourProjects} ${
              activeSection === "projects" ? styles.active : ""
            }`}
          >
            <h1>Our Projects</h1>
            <p>
              We are a team of experienced professionals who are dedicated to
              providing the best possible solutions to our clients.
            </p>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default AboutClient;
