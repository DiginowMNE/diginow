import Navigation from "../utils/navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Solutions from "../components/Solutions";
import Testimonials from "../components/Testimonials";
import Division from "../components/Division";
import Footer from "../utils/Footer";
import Logos from "../components/Logos";
import Contact from "../components/Contact";

// Generate metadata for the home page
export async function generateMetadata({ params }) {
  const { lang } = await params;

  const titles = {
    sr: "Diginow | PMP obuka",
    en: "Diginow | PMP Training",
    tr: "Diginow | PMP Eğitimi",
  };

  const descriptions = {
    sr: "Diginow pruža prilagođena rješenja za mala i srednja preduzeća i NVO. Obuke za upravljanje projektima, konsultacije za digitalizaciju i web razvoj u Crnoj Gori.",
    en: "Diginow provides customized solutions for SMEs and NGOs. Project management training, digitalization consulting, and web development in Montenegro.",
    tr: "Diginow küçük ve orta ölçekli işletmelere ve STK'lara özel çözümler sunar. Karadağ'da proje yönetimi eğitimi, dijitalleşme danışmanlığı ve web geliştirme.",
  };

  return {
    title: titles[lang] || titles.sr,
    description: descriptions[lang] || descriptions.sr,
    keywords: [
      "digitalna transformacija",
      "konsultantske usluge",
      "web razvoj",
      "obuke",
      "upravljanje projektima",
      "PMP obuka",
      "NVO konsultacije",
      "digitalizacija",
      "Crna Gora",
      "Balkans",
      "digital transformation",
      "consulting services",
      "web development",
      "training",
      "project management",
      "PMP training",
      "NGO consulting",
      "digitalization",
      "Montenegro",
      "dijital dönüşüm",
      "danışmanlık hizmetleri",
      "web geliştirme",
      "eğitim",
      "proje yönetimi",
      "PMP eğitimi",
      "STK danışmanlığı",
      "dijitalleşme",
      "Karadağ",
    ],
    openGraph: {
      title: titles[lang] || titles.sr,
      description: descriptions[lang] || descriptions.sr,
      url: `https://diginow.me/${lang}`,
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
      canonical: `https://diginow.me/${lang}`,
      languages: {
        "sr-ME": "https://diginow.me/sr",
        "en-US": "https://diginow.me/en",
        "tr-TR": "https://diginow.me/tr",
      },
    },
  };
}

export default function Home({ params }) {
  return (
    <main>
      <Navigation />
      <Hero />
      <Logos />
      <Services />
      <Solutions />
      {/* <Testimonials /> */}
      <Division />
      <Contact />
      <Footer />
    </main>
  );
}

// Generate static params for supported languages
export async function generateStaticParams() {
  return [{ lang: "sr" }, { lang: "en" }, { lang: "tr" }];
}
