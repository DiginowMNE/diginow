import Team from "./team";

// Generate metadata for the team page
export async function generateMetadata({ params }) {
  const { lang } = await params;

  const titles = {
    sr: "Tim | Diginow",
    en: "Team | Diginow",
    tr: "Ekip | Diginow",
  };

  const descriptions = {
    sr: "Upoznajte Diginow tim stručnjaka za digitalnu transformaciju, obuke za upravljanje projektima i web razvoj. Naš tim radi sa NVO i preduzećima u Crnoj Gori.",
    en: "Meet the Diginow team of digital transformation experts, project management training, and web development. Our team works with NGOs and businesses in Montenegro.",
    tr: "Dijital dönüşüm uzmanları, proje yönetimi eğitimi ve web geliştirme konularında Diginow ekibini tanıyın. Ekibimiz Karadağ'daki STK'lar ve işletmelerle çalışıyor.",
  };

  return {
    title: titles[lang] || titles.sr,
    description: descriptions[lang] || descriptions.sr,
    keywords: [
      "tim",
      "stručnjaci",
      "digitalna transformacija",
      "obuke",
      "web razvoj",
      "NVO",
      "preduzeća",
      "Crna Gora",
      "team",
      "experts",
      "digital transformation",
      "training",
      "web development",
      "NGO",
      "businesses",
      "Montenegro",
      "ekip",
      "uzmanlar",
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
      url: `https://diginow.me/${lang}/team`,
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
      canonical: `https://diginow.me/${lang}/team`,
      languages: {
        "sr-ME": "https://diginow.me/sr/team",
        "en-US": "https://diginow.me/en/team",
        "tr-TR": "https://diginow.me/tr/team",
      },
    },
  };
}

export default function TeamPage({ params }) {
  return <Team />;
}

export async function generateStaticParams() {
  return [{ lang: "sr" }, { lang: "en" }, { lang: "tr" }];
}
