"use client";
import { usePathname } from "next/navigation";
import { translations } from "../i18n/translations";

export function useTranslation() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "sr";

  const t = (key) => {
    return translations[locale]?.[key] || translations["sr"][key];
  };

  return { t, locale };
}
