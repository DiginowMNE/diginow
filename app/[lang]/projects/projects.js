import styles from "../shared.module.css";
import { Fade, Slide } from "react-awesome-reveal";
import Footer from "../../utils/Footer";
import Navigation from "../../utils/navigation";

const Projects = () => {
  return (
    <>
      <Navigation customClassName={styles.nav} customClassName2={styles.nav2} />
      <div className={styles.aboutUsContainer}>
        <h1 className={styles.title}>
          <Slide triggerOnce>Our Projects</Slide>
        </h1>
        <div className={styles.aboutUsContent}>
          {" "}
          <Fade
            cascade
            damping={0.2}
            direction="up"
            triggerOnce
            className={styles.ourProjects}
          >
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

export default Projects;
