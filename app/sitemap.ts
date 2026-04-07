import type { MetadataRoute } from "next";

const SITE_URL = "https://www.fronteracode.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/mensualidades`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/servicios/websites-landing-pages/ecommerce`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}