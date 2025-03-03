"use client";

import Navigation from "../../utils/navigation";
import { useTranslation } from "../../hooks/useTranslation";

export default function ContactClient() {
  const { t } = useTranslation();
  return (
    <main>
      <Navigation />
    </main>
  );
}
