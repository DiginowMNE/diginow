"use client";
import { useEffect } from "react";
import styles from "./Logos.module.css";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Logos = () => {
  const logos = [
    "/images/logoSlide.png",
    "/images/logoSlide1.png",
    "/images/logoSlide3.png",
    "/images/logoSlide1.png",
    "/images/logoSlide3.png",
    "/images/logoSlide1.png",
    "/images/logoSlide3.png",
    "/images/logoSlide1.png",
    "/images/logoSlide3.png",
    "/images/logoSlide1.png",
  ];

  return (
    <Marquee
      className={styles.logos}
      speed={30}
      direction="left"
      gradient={true}
      gradientColor={"var(--light-blue)"}
      gradientWidth={300}
      pauseOnHover={false}
      play={true}
      delay={0}
      loop={0}
      autoFill={true}
      pauseOnHover={true}
    >
      {logos.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          style={{ margin: "0 90px" }}
          width={150}
          height={100}
          className={styles.logo}
        />
      ))}
    </Marquee>
  );
};

export default Logos;
