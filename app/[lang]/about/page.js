import AboutClient from "./aboutClient";

export default function About({ params }) {
  return <AboutClient />;
}

export async function generateStaticParams() {
  return [{ lang: "sr" }, { lang: "en" }, { lang: "tr" }];
}
