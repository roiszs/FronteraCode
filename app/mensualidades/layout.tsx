// app/mensualidades/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planes mensuales de desarrollo y soporte de software",
  description:
    "Soporte mensual para software, websites, ecommerce, dashboards y automatización. Mejora continua para empresas en México y Estados Unidos.",
  alternates: {
    canonical: "https://fronteracode.com/mensualidades",
  },
  openGraph: {
    title: "Planes mensuales | FronteraCode",
    description:
      "Soporte mensual para software, websites, ecommerce, dashboards y automatización. México y USA.",
    url: "https://fronteracode.com/mensualidades",
    siteName: "FronteraCode",
    images: [
      {
        url: "/brand/LogoOscuro.png",
        width: 1200,
        height: 630,
        alt: "FronteraCode",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function MensualidadesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}