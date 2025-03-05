"use client";

import Navigation from "../../utils/navigation";
import { useTranslation } from "../../hooks/useTranslation";
import styles from "./page.module.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Fade, Slide } from "react-awesome-reveal";
import { useState } from "react";

import Footer from "../../utils/Footer";

const reasonForContact = {
  sr: {
    websiteDevelopment: "Razvoj veb stranica",
    projectManagement: "Upravljanje projektima",
    digitalizationConsultancy: "Digitalizacione konsultacije",
  },
  en: {
    websiteDevelopment: "Website Development",
    projectManagement: "Project Management",
    digitalizationConsultancy: "Digitalization Consultancy",
  },
  tr: {
    websiteDevelopment: "Web Geliştirme",
    projectManagement: "Proje Yönetimi",
    digitalizationConsultancy: "Dijitalleşme Danışmanlığı",
  },
};

export default function ContactClient() {
  const { t } = useTranslation();
  const [reasonForContact, setReasonForContact] = useState("");

  const handleReasonChange = (event) => {
    setReasonForContact(event.target.value);
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
        <Slide direction="right">
          <div className={styles.contactForm}>
            <form>
              <div className={styles.contactFormInputName}>
                <div className={styles.contactFormInput}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ime"
                    required
                  />
                </div>
                <div className={styles.contactFormInput}>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Prezime"
                    required
                  />
                </div>
              </div>
              <div className={styles.contactFormInputCompanyEmail}>
                <div className={styles.contactFormInput}>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Kompanija"
                    required
                  />
                </div>
                <div className={styles.contactFormInput}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
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
                </Select>
              </div>
              <div className={styles.contactFormInputMessage}>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Poruka"
                  required
                ></textarea>
              </div>
              <button type="submit" className={styles.contactFormButton}>
                {t("contactSend")}
              </button>
            </form>
          </div>
        </Slide>
      </div>
      <Footer />
    </main>
  );
}
