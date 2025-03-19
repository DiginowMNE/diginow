import styles from "../shared.module.css";
import { Fade, Slide } from "react-awesome-reveal";
import Footer from "../../utils/Footer";
import Navigation from "../../utils/navigation";

const Divisions = () => {
  return (
    <>
      <Navigation customClassName={styles.nav} customClassName2={styles.nav2} />
      <div className={styles.aboutUsContainer}>
        <h1 className={styles.title}>
          <Slide triggerOnce>Our Divisions</Slide>
        </h1>
        <div className={styles.aboutUsContent}>
          <Fade
            cascade
            damping={0.2}
            direction="up"
            triggerOnce
            className={styles.ourDivisions}
          >
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Divisions;
