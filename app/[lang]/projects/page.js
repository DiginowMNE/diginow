import Projects from "./projects";

// Generate metadata for the projects page
export async function generateMetadata({ params }) {
  const { lang } = await params;

  // Build hreflang languages object
  const hreflangLanguages = {
    "sr-ME": "https://diginow.me/sr/projects",
    "en-US": "https://diginow.me/en/projects",
    "tr-TR": "https://diginow.me/tr/projects",
    "x-default": "https://diginow.me/sr/projects",
  };

  const titles = {
    sr: "Projekti | Diginow",
    en: "Projects | Diginow",
    tr: "Projeler | Diginow",
  };

  const descriptions = {
    sr: "Pogledajte naše uspešne projekte digitalne transformacije, obuka za upravljanje projektima i web razvoja. Radimo sa NVO i preduzećima u Crnoj Gori.",
    en: "Explore our successful digital transformation projects, project management training, and web development. We work with NGOs and businesses in Montenegro.",
    tr: "Başarılı dijital dönüşüm projelerimizi, proje yönetimi eğitimlerimizi ve web geliştirme çalışmalarımızı keşfedin. Karadağ'daki STK'lar ve işletmelerle çalışıyoruz.",
  };

  return {
    title: titles[lang] || titles.sr,
    description: descriptions[lang] || descriptions.sr,
    keywords: [
      "projekti",
      "digitalna transformacija",
      "obuke",
      "web razvoj",
      "NVO projekti",
      "preduzeća",
      "Crna Gora",
      "projects",
      "digital transformation",
      "training",
      "web development",
      "NGO projects",
      "businesses",
      "Montenegro",
      "projeler",
      "dijital dönüşüm",
      "eğitim",
      "web geliştirme",
      "STK projeleri",
      "işletmeler",
      "Karadağ",
    ],
    openGraph: {
      title: titles[lang] || titles.sr,
      description: descriptions[lang] || descriptions.sr,
      url: `https://diginow.me/${lang}/projects`,
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
      canonical: `https://diginow.me/${lang}/projects`,
      languages: hreflangLanguages,
    },
  };
}

export default function ProjectsPage({ params }) {
  return <Projects />;
}

export async function generateStaticParams() {
  return [{ lang: "sr" }, { lang: "en" }, { lang: "tr" }];
}
