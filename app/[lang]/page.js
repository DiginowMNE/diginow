import Navigation from "../utils/navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Solutions from "../components/Solutions";
import Testimonials from "../components/Testimonials";
import Subscription from "../components/Subscription";
import Footer from "../utils/Footer";
import Logos from "../components/Logos";

export default function Home({ params }) {
  return (
    <main>
      <Navigation />
      <Hero />
      <Logos />
      <Services />
      <Solutions />
      <Testimonials />
      <Subscription />
      <Footer />
    </main>
  );
}

// Generate static params for supported languages
export async function generateStaticParams() {
  return [{ lang: "sr" }, { lang: "en" }, { lang: "tr" }];
}
