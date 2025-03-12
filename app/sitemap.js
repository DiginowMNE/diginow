export default async function sitemap() {
  const baseUrl = "https://diginow.me";

  // Define your main routes
  const routes = ["", "/about", "/services", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
