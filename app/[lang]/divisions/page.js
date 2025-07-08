import Divisions from "./divisions";

// Generate metadata for the divisions page
export async function generateMetadata({ params }) {
  const { lang } = await params;

  // Build hreflang languages object
  const hreflangLanguages = {
    "sr-ME": "https://diginow.me/sr/divisions",
    "en-US": "https://diginow.me/en/divisions",
    "tr-TR": "https://diginow.me/tr/divisions",
    "x-default": "https://diginow.me/sr/divisions",
  };

  const titles = {
    sr: "Sektori | Diginow",
    en: "Divisions | Diginow",
    tr: "Bölümler | Diginow",
  };

  const descriptions = {
    sr: "Istražite Diginow specijalizovane sektore: obuke za upravljanje projektima, konsultacije za digitalizaciju i web razvoj. Svaki sektor pruža ekspertizu u svom području.",
    en: "Explore Diginow's specialized divisions: project management training, digitalization consulting, and web development. Each division provides expertise in its field.",
    tr: "Diginow'un özelleşmiş bölümlerini keşfedin: proje yönetimi eğitimi, dijitalleşme danışmanlığı ve web geliştirme. Her bölüm kendi alanında uzmanlık sağlar.",
  };

  return {
    title: titles[lang] || titles.sr,
    description: descriptions[lang] || descriptions.sr,
    keywords: [
      "sektori",
      "specijalizacija",
      "digitalna transformacija",
      "obuke",
      "konsultacije",
      "web razvoj",
      "NVO",
      "preduzeća",
      "Crna Gora",
      "divisions",
      "specialization",
      "digital transformation",
      "training",
      "consulting",
      "web development",
      "NGO",
      "businesses",
      "Montenegro",
      "bölümler",
      "uzmanlaşma",
      "dijital dönüşüm",
      "eğitim",
      "danışmanlık",
      "web geliştirme",
      "STK",
      "işletmeler",
      "Karadağ",
    ],
    openGraph: {
      title: titles[lang] || titles.sr,
      description: descriptions[lang] || descriptions.sr,
      url: `https://diginow.me/${lang}/divisions`,
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
      canonical: `https://diginow.me/${lang}/divisions`,
      languages: hreflangLanguages,
    },
  };
}

export default function AboutPage({ params }) {
  return <Divisions />;
}

export async function generateStaticParams() {
  return [{ lang: "sr" }, { lang: "en" }, { lang: "tr" }];
}
