import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Montserrat } from "next/font/google";
import LoadingSpinner from "./components/LoadingSpinner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-montserrat",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata = {
  title: {
    default:
      "Diginow | Digitalna transformacija i poslovna rješenja u Crnoj Gori",
    template: "%s | Diginow",
    absolute:
      "Diginow | Digital Transformation and Business Solutions in Montenegro",
  },
  description: {
    default:
      "Diginow je osnovan kako bi pružio prilagođena rješenja za mala i srednja preduzeća, kao i nevladine organizacije, razumijevajući dinamiku stalno mijenjajućeg poslovnog svijeta. Nudimo obuke koje će osigurati uspjeh vaših projekata, konsultantske usluge za optimizaciju poslovnih procesa i moderna veb rješenja za jačanje vašeg digitalnog prisustva.",
    en: "Diginow provides customized solutions for small and medium enterprises and NGOs, understanding the dynamics of an ever-changing business world. We offer training to ensure project success, consulting services for business process optimization, and modern web solutions to strengthen your digital presence.",
    tr: "Diginow, sürekli değişen iş dünyasının dinamiklerini anlayarak küçük ve orta ölçekli işletmelere ve STK'lara özel çözümler sunar. Proje başarınızı sağlamak için eğitim, iş süreçlerini optimize etmek için danışmanlık hizmetleri ve dijital varlığınızı güçlendirmek için modern web çözümleri sunuyoruz.",
  },
  metadataBase: new URL("https://diginow.me"),
  keywords: [
    // Montenegrin keywords
    "digitalna transformacija",
    "konsultantske usluge",
    "web razvoj",
    "obuke",
    "digitalna rješenja",
    "poslovno savjetovanje",
    "upravljanje projektima",
    "PMP obuka",
    "NVO konsultacije",
    "digitalizacija",
    "web dizajn",
    "grafički dizajn",
    "brendiranje",
    "Crna Gora",
    "Balkans",
    // English keywords
    "digital transformation",
    "consulting services",
    "web development",
    "training",
    "digital solutions",
    "business consulting",
    "project management",
    "PMP training",
    "NGO consulting",
    "digitalization",
    "web design",
    "graphic design",
    "branding",
    "Montenegro",
    "Balkans",
    // Turkish keywords
    "dijital dönüşüm",
    "danışmanlık hizmetleri",
    "web geliştirme",
    "eğitim",
    "dijital çözümler",
    "iş danışmanlığı",
    "proje yönetimi",
    "PMP eğitimi",
    "STK danışmanlığı",
    "dijitalleşme",
    "web tasarımı",
    "grafik tasarım",
    "marka oluşturma",
    "Karadağ",
    "Balkanlar",
  ],
  authors: [{ name: "Diginow" }],
  creator: "Diginow",
  publisher: "Diginow",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://diginow.me",
    languages: {
      "sr-ME": "https://diginow.me/sr",
      "en-US": "https://diginow.me/en",
      "tr-TR": "https://diginow.me/tr",
    },
  },
  openGraph: {
    title: {
      default:
        "Diginow - Digitalna transformacija i poslovna rješenja u Crnoj Gori",
      en: "Diginow - Digital Transformation and Business Solutions in Montenegro",
      tr: "Diginow - Karadağ'da Dijital Dönüşüm ve İş Çözümleri",
    },
    description: {
      default:
        "Prilagođena digitalna rješenja za mala i srednja preduzeća i nevladine organizacije. Obuke za upravljanje projektima, konsultacije za digitalizaciju i web razvoj.",
      en: "Customized digital solutions for SMEs and NGOs. Project management training, digitalization consulting, and web development.",
      tr: "KOBİ'ler ve STK'lar için özel dijital çözümler. Proje yönetimi eğitimi, dijitalleşme danışmanlığı ve web geliştirme.",
    },
    url: "https://diginow.me",
    siteName: "Diginow",
    locale: {
      default: "sr_ME",
      alternate: ["en_US", "tr_TR"],
    },
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: {
          default: "Diginow - Digitalna transformacija u Crnoj Gori",
          en: "Diginow - Digital Transformation in Montenegro",
          tr: "Diginow - Karadağ'da Dijital Dönüşüm",
        },
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default:
        "Diginow - Digitalna transformacija i poslovna rješenja u Crnoj Gori",
      en: "Diginow - Digital Transformation and Business Solutions in Montenegro",
      tr: "Diginow - Karadağ'da Dijital Dönüşüm ve İş Çözümleri",
    },
    description: {
      default:
        "Prilagođena digitalna rješenja za mala i srednja preduzeća i nevladine organizacije. Obuke za upravljanje projektima, konsultacije za digitalizaciju i web razvoj.",
      en: "Customized digital solutions for SMEs and NGOs. Project management training, digitalization consulting, and web development.",
      tr: "KOBİ'ler ve STK'lar için özel dijital çözümler. Proje yönetimi eğitimi, dijitalleşme danışmanlığı ve web geliştirme.",
    },
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ub31SBQrKBHaBkmV0QXRW6miCrPTbToG1uzqZies9IE",
    yahoo: "REPLACE_WITH_YOUR_YAHOO_VERIFICATION_CODE",
  },
};

export default function RootLayout({ children, params }) {
  const lang = params?.lang || "sr";

  return (
    <html lang={lang} className={`${montserrat.variable}`}>
      <head>
        {/* Hreflang tags for all supported languages */}
        <link rel="alternate" hrefLang="sr-ME" href="https://diginow.me/sr" />
        <link rel="alternate" hrefLang="en-US" href="https://diginow.me/en" />
        <link rel="alternate" hrefLang="tr-TR" href="https://diginow.me/tr" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://diginow.me/sr"
        />

        {/* Additional meta tags for better SEO */}
        <meta name="geo.region" content="ME" />
        <meta name="geo.placename" content="Montenegro" />
        <meta name="geo.position" content="42.7087;19.3744" />
        <meta name="ICBM" content="42.7087, 19.3744" />

        {/* Structured data for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Diginow",
              url: "https://diginow.me",
              logo: "https://diginow.me/logo.png",
              description:
                "Digitalna transformacija i poslovna rješenja u Crnoj Gori",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ME",
                addressLocality: "Montenegro",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["Serbian", "English", "Turkish"],
              },
              sameAs: [
                "https://www.linkedin.com/company/diginow",
                "https://www.facebook.com/diginow",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <LoadingSpinner />
        <main>{children}</main>
      </body>
    </html>
  );
}
