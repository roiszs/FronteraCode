import type { MetadataRoute } from "next";

const SITE_URL = "https://www.fronteracode.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    "/",
    "/mensualidades",
    "/servicios/websites-landing-pages",
    "/servicios/ecommerce",
    "/servicios/sistemas-a-medida",
    "/servicios/dashboards-kpis",
    "/servicios/automatizacion",
    "/servicios/soporte-mejoras",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}