export default async function sitemap() {
  const baseUrl = "https://diginow.me";

  // Define supported languages
  const languages = ["sr", "en", "tr"];

  // Define main routes with SEO-friendly URLs
  const mainRoutes = [
    {
      path: "",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      path: "about",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "services",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      path: "projects",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      path: "team",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "divisions",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "contact",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Generate sitemap entries for all languages and routes
  const routes = [];

  languages.forEach((lang) => {
    mainRoutes.forEach((route) => {
      routes.push({
        url: `${baseUrl}/${lang}${route.path ? `/${route.path}` : ""}`,
        lastModified: new Date().toISOString(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    });
  });

  // Add specific service pages with SEO-friendly URLs
  const servicePages = [
    {
      path: "obuka-pmp-nvo",
      title: "Obuka za upravljanje projektima za NVO",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      path: "digitalizacija-konsultacije",
      title: "Konsultacije za digitalizaciju",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      path: "web-razvoj-dizajn",
      title: "Web razvoj i dizajn",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      path: "graficki-dizajn-brendiranje",
      title: "Grafički dizajn i brendiranje",
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Add service pages for all languages
  languages.forEach((lang) => {
    servicePages.forEach((service) => {
      routes.push({
        url: `${baseUrl}/${lang}/services/${service.path}`,
        lastModified: new Date().toISOString(),
        changeFrequency: service.changeFrequency,
        priority: service.priority,
      });
    });
  });

  return routes;
}
