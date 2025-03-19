import styles from "../shared.module.css";
import { Fade, Slide } from "react-awesome-reveal";
import Image from "next/image";
import Footer from "../../utils/Footer";
import Navigation from "../../utils/navigation";

const Team = () => {
  return (
    <>
      <Navigation customClassName={styles.nav} customClassName2={styles.nav2} />
      <div className={styles.aboutUsContainer}>
        <h1 className={styles.title}>
          <Slide triggerOnce>Our Team</Slide>
        </h1>
        <div className={styles.aboutUsContent}>
          {" "}
          <Fade
            cascade
            damping={0.2}
            direction="up"
            triggerOnce
            className={styles.ourTeam}
          >
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
