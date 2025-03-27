"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Testimonials.module.css";
import { useTranslation } from "../hooks/useTranslation";
import { motion, useInView } from "framer-motion";
import {
  HiOutlineArrowSmallLeft,
  HiOutlineArrowSmallRight,
} from "react-icons/hi2";

const Testimonials = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.2,
        delayChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const opacityVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  const testimonials = [
    {
      text: "Diginow has transformed our project management approach. Their training was practical and immediately applicable.",
      author: "Sarah Johnson",
      position: "Project Manager",
      company: "TechCorp",
    },
    {
      text: "The digital transformation guidance we received was invaluable. Our efficiency has improved significantly.",
      author: "Mark Williams",
      position: "CEO",
      company: "InnovateCorp",
    },

    {
      text: "Their web development team delivered beyond our expectations. The site is fast, secure, and exactly what we needed.",
      author: "Ana Martinez",
      position: "Marketing Director",
      company: "GrowthHub",
    },

    {
      text: "Diginow's project management training has been instrumental in our team's success. The practical approach has helped us streamline our processes.",
      author: "Emily Chen",
      position: "Team Lead",
      company: "TechStart",
    },

    {
      text: "The digital transformation strategy provided by Diginow has been a game-changer for our organization. We've seen significant improvements in efficiency and productivity.",
      author: "David Lee",
      position: "COO",
      company: "InnovateCorp",
    },

    {
      text: "Diginow's web development team exceeded our expectations. The new website has not only improved our online presence but also increased our sales.",
      author: "Sophia Patel",
      position: "Marketing Manager",
      company: "GrowthHub",
    },

    {
      text: "Diginow's consulting services have helped us identify areas for improvement and implement effective solutions. Their expertise has been invaluable.",
      author: "Michael Brown",
      position: "CEO",
      company: "StartUpX",
    },

    {
      text: "The training provided by Diginow has empowered our team to manage projects more effectively. We've seen a significant reduction in project timelines and costs.",
      author: "Rachel Davis",
      position: "Project Manager",
      company: "NGO Alliance",
    },
  ];

  const NextArrow = ({ onClick }) => (
    <button
      className={`${styles.button} ${styles.nextButton}`}
      onClick={onClick}
    >
      <HiOutlineArrowSmallRight />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      className={`${styles.button} ${styles.prevButton}`}
      onClick={onClick}
    >
      <HiOutlineArrowSmallLeft />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    loop: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    fade: true,
  };

  return (
    <div className={styles.testimonials} ref={ref}>
      {/* <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className={styles.testimonialsTitle}
          variants={opacityVariants}
        >
          {t("testimonialTitle")}
        </motion.h2>
        <motion.div className={styles.carouselContainer}>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={styles.slide}
                variants={opacityVariants}
              >
                <p className={styles.text}>&quot;{testimonial.text}&quot;</p>
                <div className={styles.author}>
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>
                      {testimonial.author}
                    </span>
                    <span className={styles.position}>
                      , {testimonial.position}
                    </span>
                    <span className={styles.company}>
                      , {testimonial.company}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </motion.div> */}
    </div>
  );
};

export default Testimonials;
