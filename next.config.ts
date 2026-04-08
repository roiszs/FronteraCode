import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/servicios/websites-landing-pages/ecommerce",
        destination: "/servicios/ecommerce",
        permanent: true,
      },
      {
        source: "/servicios/websites-landing-pages/sistemas-a-medida",
        destination: "/servicios/sistemas-a-medida",
        permanent: true,
      },
      {
        source: "/servicios/websites-landing-pages/dashboards-kpis",
        destination: "/servicios/dashboards-kpis",
        permanent: true,
      },
      {
        source: "/servicios/websites-landing-pages/automatizacion",
        destination: "/servicios/automatizacion",
        permanent: true,
      },
      {
        source: "/servicios/websites-landing-pages/soporte-mejoras",
        destination: "/servicios/soporte-mejoras",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
