export default async function sitemap() {
  const baseUrl = "https://diginow.me";

  // Define your main routes with more specific information
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Add language variants
    {
      url: `${baseUrl}/en`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/services`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  return routes;
}
