import ServicesClient from "./servicesClient";

export default function Services({ params }) {
  return <ServicesClient />;
}

export async function generateStaticParams() {
  return [{ lang: "sr" }, { lang: "en" }, { lang: "tr" }];
}
