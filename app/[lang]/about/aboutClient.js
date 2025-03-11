"use client";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Navigation from "../../utils/navigation";
import styles from "./page.module.css";
import { Fade, Slide } from "react-awesome-reveal";
import Footer from "../../utils/Footer";
import Image from "next/image";

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
            <h2 className={styles.aboutUsSubtitle}>
              At Diginow, we believe in fostering long-term partnerships,
              <span> tailoring our services to meet the unique needs</span> of
              each organization.
            </h2>
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
              Our mission is to simplify digital transformation, enhance project
              management efficiency, and provide seamless web solutions that
              align with our clients&#39; objectives. Whether it&#39;s through
              expert-led training, consultancy, or technical implementation, we
              are dedicated to delivering excellence and driving sustainable
              growth for our partners.
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
            <h2 className={styles.divisionsSubtitle}>
              Each division operates{" "}
              <span> with a commitment to excellence </span>, ensuring that our
              clients receive customized and effective solutions to their unique
              challenges.
            </h2>
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
              </div>
            </Fade>
          </Fade>
          <Fade
            cascade
            damping={0.2}
            direction="up"
            triggerOnce
            className={`${styles.ourTeam} ${
              activeSection === "team" ? styles.active : ""
            }`}
          >
            <h1>Our Team</h1>
            <h2 className={styles.teamSubtitle}>
              Diginow is led by a{" "}
              <span>
                team of dedicated experts with engineering and technology
                backgrounds
              </span>
              , combining their knowledge to deliver outstanding results.
            </h2>
            <div className={styles.teamContainer}>
              <div className={styles.teamMember}>
                <div className={styles.teamMemberImageContainer}>
                  <div className={styles.teamMemberImage}>
                    <Image
                      src="/images/blog2.jpg"
                      alt="Staša Baštrica"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
                <div>
                  <h3>
                    Firat <br /> Guven
                  </h3>
                  <h4>
                    Mechatronics Engineer | Project Manager & Digitalization
                    Expert
                  </h4>
                </div>
                <p className={styles.teamMemberDescription}>
                  With a background in mechatronics engineering, our project
                  management specialist brings expertise in process
                  optimization, digital transformation, and strategic planning.
                  Their experience ensures that every project is executed with
                  precision and efficiency.
                </p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.teamMemberImageContainer}>
                  <div className={styles.teamMemberImage}>
                    <Image
                      src="/images/blog3.jpg"
                      alt="Staša Baštrica"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
                <div>
                  <h3>
                    Staša <br /> Baštrica
                  </h3>
                  <h4>IT Engineer | Web Developer & Web Designer</h4>
                </div>
                <p className={styles.teamMemberDescription}>
                  Our IT engineering expert specializes in building
                  high-performing websites and digital solutions that meet
                  modern business needs. From designing intuitive user
                  interfaces to implementing secure and scalable web platforms,
                  their expertise guarantees a seamless digital experience for
                  our clients.
                </p>
              </div>
            </div>
          </Fade>
          <Fade
            cascade
            damping={0.2}
            direction="up"
            triggerOnce
            className={`${styles.ourProjects} ${
              activeSection === "projects" ? styles.active : ""
            }`}
          >
            <h1>Our Projects</h1>
            <h2 className={styles.projectsSubtitle}>
              Our projects are a <span>testament </span> to our commitment to
              excellence.
            </h2>
            <div className={styles.projectsContainer}>
              <div className={styles.project}>
                <h3>Project 1</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos.
                </p>
              </div>
              <div className={styles.project}>
                <h3>Project 2</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos.
                </p>
              </div>
              <div className={styles.project}>
                <h3>Project 3</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos.
                </p>
              </div>
              <div className={styles.project}>
                <h3>Project 4</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos.
                </p>
              </div>
              <div className={styles.project}>
                <h3>Project 5</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos.
                </p>
              </div>
              <div className={styles.project}>
                <h3>Project 6</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos.
                </p>
              </div>
              <div className={styles.project}>
                <h3>Project 7</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos.
                </p>
              </div>
              <div className={styles.project}>
                <h3>Project 8</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos.
                </p>
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
