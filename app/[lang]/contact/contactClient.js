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
            className={styles.contactInfoContainer}
          >
            <p className={styles.contactText}>{t("contactText")}</p>
            <Fade cascade damping={0.2} direction="up">
              <p className={styles.contactEmail}>info@diginow.me</p>
              <p className={styles.contactPhone}>+387 61 234 567</p>
              <p className={styles.contactAddress}>
                Ulica slobode 60, Podgorica
              </p>
            </Fade>
          </Fade>
        </div>
        <Slide direction="right" className={styles.contactFormContainer}>
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit} ref={formRef}>
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
                    placeholder="Ime"
                    required
                    minLength={2}
                    maxLength={50}
                    pattern="[A-Za-z\s]+"
                  />
                </div>
                <div className={styles.contactFormInput}>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Prezime"
                    required
                    minLength={2}
                    maxLength={50}
                    pattern="[A-Za-z\s]+"
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
                    <em>Izaberite tip entiteta</em>
                  </MenuItem>
                  <MenuItem value="ngo">NVO</MenuItem>
                  <MenuItem value="company">Kompanija</MenuItem>
                </Select>
              </div>
              <div className={styles.contactFormInputCompanyEmail}>
                <div className={styles.contactFormInput}>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Naziv entiteta"
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
                    placeholder="Email"
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
                    <em>Izaberite razlog za kontakt</em>
                  </MenuItem>
                  <MenuItem value="Web Development">Web Development</MenuItem>
                  <MenuItem value="Project Management">
                    Project Management
                  </MenuItem>
                  <MenuItem value="Digitalization Consultancy">
                    Digitalization Consultancy
                  </MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </div>
              <div className={styles.contactFormInputMessage}>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Poruka"
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
            </form>
          </div>
        </Slide>
      </div>
      <Footer />
    </main>
  );
}
