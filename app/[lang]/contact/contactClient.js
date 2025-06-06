"use client";

import Navigation from "../../utils/navigation";
import { useTranslation } from "../../hooks/useTranslation";
import styles from "./page.module.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Fade, Slide } from "react-awesome-reveal";
import { useState, useRef, useEffect } from "react";
import Footer from "../../utils/Footer";
import ReCAPTCHA from "react-google-recaptcha";

import { FaLinkedin } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";

export default function ContactClient() {
  const { t } = useTranslation();
  const [reasonForContact, setReasonForContact] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const [entityType, setEntityType] = useState("");
  const formRef = useRef(null);
  const recaptchaRef = useRef(null);

  const handleReasonChange = (event) => {
    setReasonForContact(event.target.value);
  };

  const handleEntityTypeChange = (event) => {
    setEntityType(event.target.value);
  };

  const validateForm = (formData) => {
    // Check for honeypot field
    if (formData.website) {
      setErrorMessage("Invalid submission");
      return false;
    }

    // Basic validation
    if (
      !formData.name ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      setErrorMessage("Please fill in all required fields");
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      return false;
    }

    // Reason validation
    if (!reasonForContact) {
      setErrorMessage("Please select a reason for contact");
      return false;
    }

    // Length validation
    if (formData.name.length < 2 || formData.lastName.length < 2) {
      setErrorMessage("Name and last name must be at least 2 characters long");
      return false;
    }

    if (formData.message.length < 10) {
      setErrorMessage("Message must be at least 10 characters long");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!captchaValue) {
      setErrorMessage("Please complete the reCAPTCHA verification");
      setIsSubmitting(false);
      return;
    }

    const formData = {
      name: e.target.name.value.trim(),
      lastName: e.target.lastName.value.trim(),
      entityType: entityType,
      company: e.target.company.value.trim(),
      email: e.target.email.value.trim(),
      reasonForContact: reasonForContact,
      message: e.target.message.value.trim(),
      website: e.target.website.value,
      captchaToken: captchaValue,
    };

    if (!validateForm(formData)) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        formRef.current.reset();
        setReasonForContact("");
        setEntityType("");
        recaptchaRef.current.reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          data.error || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <Navigation />
      <div className={styles.container}>
        <div className={styles.contactTextContainer}>
          <Fade
            direction="up"
            cascade
            damping={0.2}
            triggerOnce
            className={styles.contactInfoContainer}
          >
            <p
              className={styles.contactText}
              dangerouslySetInnerHTML={{ __html: t("contactText") }}
            />
            <div className={styles.contactInfo}>
              <div className={styles.contactInfoContainer}>
                <Fade
                  cascade
                  damping={0.2}
                  direction="up"
                  triggerOnce
                  delay={500}
                >
                  <p className={styles.contactEmail}>diginowmne@gmail.com</p>
                  <p className={styles.contactAddress}>Podgorica, Montenegro</p>
                </Fade>
              </div>

              <div className={styles.socials}>
                <Fade
                  cascade
                  damping={0.2}
                  direction="up"
                  triggerOnce
                  delay={1000}
                >
                  <a
                    href="https://www.linkedin.com/company/diginowmne/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className={styles.socialsIcon} />
                  </a>

                  <a
                    href="https://www.instagram.com/diginowmne/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className={styles.socialsIcon} />
                  </a>
                </Fade>
              </div>
            </div>
          </Fade>
        </div>
        <Fade
          direction="up"
          delay={500}
          triggerOnce
          className={styles.contactFormContainer}
        >
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit} ref={formRef}>
              <Fade
                cascade
                damping={0.2}
                delay={500}
                direction="up"
                triggerOnce
              >
                {/* Honeypot field - hidden from real users */}
                <input
                  type="text"
                  name="website"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className={styles.contactFormInputName}>
                  <div className={styles.contactFormInput}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder={t("contactName")}
                      required
                      minLength={2}
                      maxLength={50}
                    />
                  </div>
                  <div className={styles.contactFormInput}>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder={t("contactLastName")}
                      required
                      minLength={2}
                      maxLength={50}
                    />
                  </div>
                </div>
                <div className={styles.entityTypeSelect}>
                  <Select
                    labelId="entityType-label"
                    id="entityType"
                    name="entityType"
                    className={styles.contactFormInputSelect}
                    value={entityType}
                    onChange={handleEntityTypeChange}
                    displayEmpty
                    required
                  >
                    <MenuItem disabled value="">
                      <em>{t("contactEntityType")}</em>
                    </MenuItem>
                    <MenuItem value="ngo">{t("contactNgo")}</MenuItem>
                    <MenuItem value="company">{t("contactCompany")}</MenuItem>
                  </Select>
                </div>
                <div className={styles.contactFormInputCompanyEmail}>
                  <div className={styles.contactFormInput}>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder={t("contactEntityName")}
                      required
                      maxLength={100}
                      pattern="[A-Za-z0-9\s\-\.]+"
                    />
                  </div>
                  <div className={styles.contactFormInput}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder={t("contactEmail")}
                      required
                      maxLength={100}
                    />
                  </div>
                </div>
                <div className={styles.contactFormInputSelect}>
                  <Select
                    labelId="reasonForContact-label"
                    id="reasonForContact"
                    name="reasonForContact"
                    className={styles.contactFormInputSelect}
                    value={reasonForContact}
                    onChange={handleReasonChange}
                    displayEmpty
                    required
                  >
                    <MenuItem disabled value="">
                      <em>{t("contactReason")}</em>
                    </MenuItem>
                    <MenuItem value="Web Development">
                      {t("contactReasonWebDevelopment")}
                    </MenuItem>
                    <MenuItem value="Project Management">
                      {t("contactReasonProjectManagement")}
                    </MenuItem>
                    <MenuItem value="Digitalization Consultancy">
                      {t("contactReasonDigitalizationConsultancy")}
                    </MenuItem>
                    <MenuItem value="Other">{t("contactReasonOther")}</MenuItem>
                  </Select>
                </div>
                <div className={styles.contactFormInputMessage}>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder={t("contactMessage")}
                    required
                    minLength={10}
                    maxLength={1000}
                  ></textarea>
                </div>
                <div className={styles.recaptcha}>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={(value) => setCaptchaValue(value)}
                  />
                </div>
                <button
                  type="submit"
                  className={styles.contactFormButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : t("contactSend")}
                </button>
                {submitStatus === "success" && (
                  <p style={{ color: "green", marginTop: "10px" }}>
                    Message sent successfully!
                  </p>
                )}
                {(submitStatus === "error" || errorMessage) && (
                  <p style={{ color: "red", marginTop: "10px" }}>
                    {errorMessage}
                  </p>
                )}
              </Fade>
            </form>
          </div>
        </Fade>
      </div>
      <Footer />
    </main>
  );
}
