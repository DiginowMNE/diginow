import ContactClient from "./contactClient";

// Generate metadata for the contact page
export async function generateMetadata({ params }) {
  const { lang } = await params;

  // Build hreflang languages object
  const hreflangLanguages = {
    "sr-ME": "https://diginow.me/sr/contact",
    "en-US": "https://diginow.me/en/contact",
    "tr-TR": "https://diginow.me/tr/contact",
    "x-default": "https://diginow.me/sr/contact",
  };

  const titles = {
    sr: "Kontakt | Diginow",
    en: "Contact | Diginow",
    tr: "İletişim | Diginow",
  };

  const descriptions = {
    sr: "Kontaktirajte Diginow tim za besplatne konsultacije o digitalnoj transformaciji, obukama za upravljanje projektima i web razvoju. Radimo sa NVO i preduzećima u Crnoj Gori.",
    en: "Contact the Diginow team for free consultations on digital transformation, project management training, and web development. We work with NGOs and businesses in Montenegro.",
    tr: "Dijital dönüşüm, proje yönetimi eğitimi ve web geliştirme konularında ücretsiz danışmanlık için Diginow ekibiyle iletişime geçin. Karadağ'daki STK'lar ve işletmelerle çalışıyoruz.",
  };

  return {
    title: titles[lang] || titles.sr,
    description: descriptions[lang] || descriptions.sr,
    keywords: [
      "kontakt",
      "konsultacije",
      "digitalna transformacija",
      "obuke",
      "web razvoj",
      "NVO",
      "preduzeća",
      "Crna Gora",
      "contact",
      "consulting",
      "digital transformation",
      "training",
      "web development",
      "NGO",
      "businesses",
      "Montenegro",
      "iletişim",
      "danışmanlık",
      "dijital dönüşüm",
      "eğitim",
      "web geliştirme",
      "STK",
      "işletmeler",
      "Karadağ",
    ],
    openGraph: {
      title: titles[lang] || titles.sr,
      description: descriptions[lang] || descriptions.sr,
      url: `https://diginow.me/${lang}/contact`,
      siteName: "Diginow",
      locale: lang === "sr" ? "sr_ME" : lang === "en" ? "en_US" : "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[lang] || titles.sr,
      description: descriptions[lang] || descriptions.sr,
    },
    alternates: {
      canonical: `https://diginow.me/${lang}/contact`,
      languages: hreflangLanguages,
    },
  };
}

export default function Contact({ params }) {
  return <ContactClient />;
}

export async function generateStaticParams() {
  return [{ lang: "sr" }, { lang: "en" }, { lang: "tr" }];
}
