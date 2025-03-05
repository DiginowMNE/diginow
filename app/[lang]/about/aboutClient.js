"use client";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Navigation from "../../utils/navigation";
import styles from "./page.module.css";
import { Fade, Slide } from "react-awesome-reveal";

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
            className={`${styles.aboutUs} ${
              activeSection === "about" ? styles.active : ""
            }`}
          >
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit.
            </p>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia.
            </p>
            <p>
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae. Itaque earum rerum hic tenetur a
              sapiente delectus, ut aut reiciendis voluptatibus maiores alias.
            </p>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et aut officiis debitis aut rerum necessitatibus.
            </p>
          </Fade>
          <Fade
            cascade
            damping={0.2}
            className={`${styles.ourDivisions} ${
              activeSection === "divisions" ? styles.active : ""
            }`}
          >
            <h1>Our Divisions</h1>
            <p>
              We are a team of experienced professionals who are dedicated to
              providing the best possible solutions to our clients.
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
