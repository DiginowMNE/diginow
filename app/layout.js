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
    default: "Diginow | Digitalna transformacija i poslovna rješenja",
    template: "%s | Diginow",
    absolute: "Diginow | Digital Transformation & Business Solutions",
  },
  description: {
    default:
      "Diginow pruža prilagođena rješenja za mala i srednja preduzeća i NVO. Obuke za upravljanje projektima, konsultacije za digitalizaciju i web razvoj u Crnoj Gori.",
    en: "Diginow provides customized solutions for SMEs and NGOs. Project management training, digitalization consulting, and web development in Montenegro.",
    tr: "Diginow küçük ve orta ölçekli işletmelere ve STK'lara özel çözümler sunar. Karadağ'da proje yönetimi eğitimi, dijitalleşme danışmanlığı ve web geliştirme.",
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
    languages: {
      "sr-ME": "https://diginow.me/sr",
      "en-US": "https://diginow.me/en",
      "tr-TR": "https://diginow.me/tr",
    },
  },
  openGraph: {
    title: {
      default: "Diginow - Digitalna transformacija i poslovna rješenja",
      en: "Diginow - Digital Transformation & Business Solutions",
      tr: "Diginow - Dijital Dönüşüm ve İş Çözümleri",
    },
    description: {
      default:
        "Diginow pruža prilagođena rješenja za mala i srednja preduzeća i NVO. Obuke za upravljanje projektima, konsultacije za digitalizaciju i web razvoj.",
      en: "Diginow provides customized solutions for SMEs and NGOs. Project management training, digitalization consulting, and web development.",
      tr: "Diginow küçük ve orta ölçekli işletmelere ve STK'lara özel çözümler sunar. Proje yönetimi eğitimi, dijitalleşme danışmanlığı ve web geliştirme.",
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
          default: "Diginow - Digitalna transformacija",
          en: "Diginow - Digital Transformation",
          tr: "Diginow - Dijital Dönüşüm",
        },
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Diginow - Digitalna transformacija i poslovna rješenja",
      en: "Diginow - Digital Transformation & Business Solutions",
      tr: "Diginow - Dijital Dönüşüm ve İş Çözümleri",
    },
    description: {
      default:
        "Diginow pruža prilagođena rješenja za mala i srednja preduzeća i NVO. Obuke za upravljanje projektima, konsultacije za digitalizaciju i web razvoj.",
      en: "Diginow provides customized solutions for SMEs and NGOs. Project management training, digitalization consulting, and web development.",
      tr: "Diginow küçük ve orta ölçekli işletmelere ve STK'lara özel çözümler sunar. Proje yönetimi eğitimi, dijitalleşme danışmanlığı ve web geliştirme.",
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
        {/* Apple touch icons for mobile optimization */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/web-app-manifest-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/web-app-manifest-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/web-app-manifest-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/web-app-manifest-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/web-app-manifest-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/web-app-manifest-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/web-app-manifest-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/web-app-manifest-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/web-app-manifest-192x192.png"
        />
        <link rel="apple-touch-icon" href="/web-app-manifest-192x192.png" />

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
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 42.7087,
                  longitude: 19.3744,
                },
                geoRadius: "50000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Diginow Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Project Management Training",
                      description: "PMP-focused training programs",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Digitalization Consulting",
                      description: "Digital transformation consulting",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Web Development",
                      description: "Professional web development services",
                    },
                  },
                ],
              },
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
