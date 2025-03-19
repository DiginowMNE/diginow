import Projects from "./projects";

export default function ProjectsPage({ params }) {
  return <Projects />;
}

export async function generateStaticParams() {
  return [{ lang: "sr" }, { lang: "en" }, { lang: "tr" }];
}
