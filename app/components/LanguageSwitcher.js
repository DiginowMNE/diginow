// pages/components/LanguageSwitcher.js
"use client";
import { useRouter, usePathname } from "next/navigation";
import styles from "./LanguageSwitcher.module.css";
import { GB, ME, TR } from "country-flag-icons/react/3x2";

const LanguageSwitcher = ({ containerClassName, buttonClassName }) => {
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = pathname.split("/");
  const locale = currentPath[1] || "sr";

  const locales = [
    { value: "sr", label: <ME className={styles.flag} />, name: "MNE" },
    { value: "en", label: <GB className={styles.flag} />, name: "ENG" },
    { value: "tr", label: <TR className={styles.flag} />, name: "TUR" },
  ];

  const changeLanguage = (newLocale) => {
    const newPath = [newLocale, ...currentPath.slice(2)].join("/");
    router.push(`/${newPath}`);
  };

  return (
    <div className={`${styles.container} ${containerClassName}`}>
      {locales.map(({ value, label, name }) => (
        <button
          key={value}
          onClick={(e) => {
            e.preventDefault();
            changeLanguage(value);
          }}
          className={`${styles.button} ${buttonClassName} ${
            locale === value ? styles.active : ""
          }`}
        >
          <span className={styles.langName}>{label}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
