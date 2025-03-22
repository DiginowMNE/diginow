import ContactClient from "./contactClient";

export default function Contact({ params }) {
  return <ContactClient />;
}

export async function generateStaticParams() {
  return [{ lang: "sr" }, { lang: "en" }, { lang: "tr" }];
}
