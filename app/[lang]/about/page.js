import Navigation from "../../utils/navigation";

export default function About({ params }) {
  return (
    <main>
      <Navigation />
    </main>
  );
}

export async function generateStaticParams() {
  return [{ lang: "sr" }, { lang: "en" }, { lang: "tr" }];
}
