import Divisions from "./divisions";

export default function AboutPage({ params }) {
  return <Divisions />;
}

export async function generateStaticParams() {
  return [{ lang: "sr" }, { lang: "en" }, { lang: "tr" }];
}
