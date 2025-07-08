import ServicesClient from "./servicesClient";

// Generate metadata for the services page
export async function generateMetadata({ params }) {
  const { lang } = await params;

  const titles = {
    sr: "Usluge | PMP obuka i konsultacije",
    en: "Services | PMP Training & Consulting",
    tr: "Hizmetler | PMP Eğitimi ve Danışmanlık",
  };

  const descriptions = {
    sr: "Diginow nudi obuku za upravljanje projektima, konsultacije za digitalizaciju i web razvoj. Specijalizovani smo za PMP obuke i digitalnu transformaciju u Crnoj Gori.",
    en: "Diginow offers project management training, digitalization consulting, and web development. We specialize in PMP training and digital transformation in Montenegro.",
    tr: "Diginow proje yönetimi eğitimi, dijitalleşme danışmanlığı ve web geliştirme hizmetleri sunar. Karadağ'da PMP eğitimi ve dijital dönüşüm konusunda uzmanız.",
  };

  return {
    title: titles[lang] || titles.sr,
    description: descriptions[lang] || descriptions.sr,
    keywords: [
      "obuka za upravljanje projektima",
      "PMP obuka",
      "konsultacije za digitalizaciju",
      "web razvoj",
      "NVO obuke",
      "digitalna transformacija",
      "project management training",
      "PMP training",
      "digitalization consulting",
      "web development",
      "NGO training",
      "digital transformation",
      "proje yönetimi eğitimi",
      "PMP eğitimi",
      "dijitalleşme danışmanlığı",
      "web geliştirme",
      "STK eğitimi",
      "dijital dönüşüm",
    ],
    openGraph: {
      title: titles[lang] || titles.sr,
      description: descriptions[lang] || descriptions.sr,
      url: `https://diginow.me/${lang}/services`,
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
      canonical: `https://diginow.me/${lang}/services`,
      languages: {
        "sr-ME": "https://diginow.me/sr/services",
        "en-US": "https://diginow.me/en/services",
        "tr-TR": "https://diginow.me/tr/services",
      },
    },
  };
}

export default function Services({ params }) {
  return <ServicesClient />;
}

export async function generateStaticParams() {
  return [{ lang: "sr" }, { lang: "en" }, { lang: "tr" }];
}
