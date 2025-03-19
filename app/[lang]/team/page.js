import Team from "./team";

export default function TeamPage({ params }) {
  return <Team />;
}

export async function generateStaticParams() {
  return [{ lang: "sr" }, { lang: "en" }, { lang: "tr" }];
}
