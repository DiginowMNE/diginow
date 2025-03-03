"use client";

import Navigation from "../../utils/navigation";
import { useTranslation } from "../../hooks/useTranslation";
import styles from "./page.module.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
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
          <p className={styles.contactText}>{t("contactText")}</p>
          <div className={styles.contactInfoContainer}>
            <p className={styles.contactEmail}>info@diginow.me</p>
            <p className={styles.contactPhone}>+387 61 234 567</p>
            <p className={styles.contactAddress}>Ulica slobode 60, Podgorica</p>
          </div>
        </div>
        <div className={styles.contactForm}>
          <form>
            <div className={styles.contactFormInputName}>
              <div className={styles.contactFormInput}>
                <label htmlFor="name">{t("contactName")}:</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className={styles.contactFormInput}>
                <label htmlFor="lastName">Prezime:</label>
                <input type="text" id="lastName" name="lastName" />
              </div>
            </div>
            <div className={styles.contactFormInputCompanyEmail}>
              <div className={styles.contactFormInput}>
                <label htmlFor="company">Kompanija:</label>
                <input type="text" id="company" name="company" />
              </div>
              <div className={styles.contactFormInput}>
                <label htmlFor="email">{t("contactEmail")}:</label>
                <input type="email" id="email" name="email" />
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
                sx={{
                  "& .MuiSelect-select": {
                    color: "var(--light-blue)",
                    fontWeight: "300",
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      bgcolor: "var(--background)",
                      borderRadius: "1rem",
                      "& .MuiMenuItem-root": {
                        color: "var(--text)",
                        "&:hover": {
                          bgcolor: "transparent",
                          color: "var(--light-blue)",
                        },
                        "&.Mui-selected": {
                          bgcolor: "transparent",
                          color: "var(--light-blue)",
                          "&:hover": {
                            bgcolor: "transparent",
                          },
                        },
                      },
                    },
                  },
                }}
                displayEmpty
                renderValue={(value) => {
                  if (!value) {
                    return <p>Izaberite razlog za kontakt</p>;
                  }
                  return <>{value}</>;
                }}
              >
                <MenuItem disabled value="">
                  Izaberite razlog za kontakt
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
              <label htmlFor="message">Poruka:</label>
              <textarea id="message" name="message" rows={6}></textarea>
            </div>
            <button type="submit" className={styles.contactFormButton}>
              {t("contactSend")}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
