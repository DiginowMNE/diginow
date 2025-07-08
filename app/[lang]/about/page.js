import About from "./about";

// Generate metadata for the about page
export async function generateMetadata({ params }) {
  const { lang } = await params;

  const titles = {
    sr: "O nama | Diginow - Digitalna transformacija i poslovna rješenja",
    en: "About Us | Diginow - Digital Transformation & Business Solutions",
    tr: "Hakkımızda | Diginow - Dijital Dönüşüm ve İş Çözümleri",
  };

  const descriptions = {
    sr: "Saznajte više o Diginow timu i našoj misiji da osnažimo preduzeća kroz digitalnu transformaciju. Specijalizovani smo za obuke, konsultacije i web rješenja u Crnoj Gori.",
    en: "Learn more about the Diginow team and our mission to empower businesses through digital transformation. We specialize in training, consulting, and web solutions in Montenegro.",
    tr: "Diginow ekibi ve dijital dönüşüm yoluyla işletmeleri güçlendirme misyonumuz hakkında bilgi edin. Karadağ'da eğitim, danışmanlık ve web çözümleri konusunda uzmanız.",
  };

  return {
    title: titles[lang] || titles.sr,
    description: descriptions[lang] || descriptions.sr,
    keywords: [
      "o nama",
      "Diginow tim",
      "digitalna transformacija",
      "misija i vizija",
      "konsultantske usluge",
      "obuke",
      "web razvoj",
      "Crna Gora",
      "about us",
      "Diginow team",
      "digital transformation",
      "mission and vision",
      "consulting services",
      "training",
      "web development",
      "Montenegro",
      "hakkımızda",
      "Diginow ekibi",
      "dijital dönüşüm",
      "misyon ve vizyon",
      "danışmanlık hizmetleri",
      "eğitim",
      "web geliştirme",
      "Karadağ",
    ],
    openGraph: {
      title: titles[lang] || titles.sr,
      description: descriptions[lang] || descriptions.sr,
      url: `https://diginow.me/${lang}/about`,
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
      canonical: `https://diginow.me/${lang}/about`,
      languages: {
        "sr-ME": "https://diginow.me/sr/about",
        "en-US": "https://diginow.me/en/about",
        "tr-TR": "https://diginow.me/tr/about",
      },
    },
  };
}

export default function AboutPage({ params }) {
  return (
    <>
      <About />
    </>
  );
}

export async function generateStaticParams() {
  return [{ lang: "sr" }, { lang: "en" }, { lang: "tr" }];
}
