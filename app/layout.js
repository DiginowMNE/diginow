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
    absolute: "Diginow | Digital Transformation and Business Solutions",
  },
  description: {
    default:
      "Diginow je osnovan kako bi pružio prilagođena rješenja za mala i srednja preduzeća, kao i nevladine organizacije, razumijevajući dinamiku stalno mijenjajućeg poslovnog svijeta. Nudimo obuke koje će osigurati uspjeh vaših projekata, konsultantske usluge za optimizaciju poslovnih procesa i moderna veb rješenja za jačanje vašeg digitalnog prisustva.",
    en: "Diginow provides customized solutions for small and medium enterprises and NGOs, understanding the dynamics of an ever-changing business world. We offer training to ensure project success, consulting services for business process optimization, and modern web solutions to strengthen your digital presence.",
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
    // English keywords
    "digital transformation",
    "consulting services",
    "web development",
    "training",
    "digital solutions",
    "business consulting",
    "Montenegro",
    "Balkans",
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
      "sr-ME": "https://diginow.me",
      "en-US": "https://diginow.me/en",
    },
  },
  openGraph: {
    title: {
      default: "Diginow - Digitalna transformacija i poslovna rješenja",
      en: "Diginow - Digital Transformation and Business Solutions",
    },
    description: {
      default:
        "Prilagođena digitalna rješenja za mala i srednja preduzeća i nevladine organizacije. Obuke, konsultacije i web razvoj.",
      en: "Customized digital solutions for SMEs and NGOs. Training, consulting, and web development.",
    },
    url: "https://diginow.me",
    siteName: "Diginow",
    locale: {
      default: "sr_ME",
      alternate: ["en_US"],
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
        },
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Diginow - Digitalna transformacija i poslovna rješenja",
      en: "Diginow - Digital Transformation and Business Solutions",
    },
    description: {
      default:
        "Prilagođena digitalna rješenja za mala i srednja preduzeća i nevladine organizacije. Obuke, konsultacije i web razvoj.",
      en: "Customized digital solutions for SMEs and NGOs. Training, consulting, and web development.",
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
};

export default function RootLayout({ children, params }) {
  return (
    <html lang={params?.lang || "sr"} className={`${montserrat.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <LoadingSpinner />
        <main>{children}</main>
      </body>
    </html>
  );
}
