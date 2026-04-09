import type { Metadata } from "next";
import WebsitesLandingPagesPageClient from "./websitesLandingPagesPageClient";

export const metadata: Metadata = {
  title: "Websites y Landing Pages para empresas en Ciudad Juárez",
  description:
    "Diseñamos y desarrollamos websites y landing pages modernas, rápidas y alineadas con tu negocio para transmitir confianza, posicionarte mejor y ayudarte a convertir.",
  alternates: {
    canonical: "/servicios/websites-landing-pages",
  },
  openGraph: {
    title: "Websites y Landing Pages para empresas en Ciudad Juárez",
    description:
      "Websites y landing pages modernas, rápidas y alineadas con tu negocio para transmitir confianza, posicionarte mejor y ayudarte a convertir.",
    url: "https://www.fronteracode.com/servicios/websites-landing-pages",
    siteName: "FronteraCode",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "FronteraCode Websites y Landing Pages",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Websites y Landing Pages para empresas en Ciudad Juárez",
    description:
      "Diseñamos y desarrollamos websites y landing pages modernas, rápidas y alineadas con tu negocio para transmitir confianza, posicionarte mejor y ayudarte a convertir.",
    images: ["/og.png"],
  },
};

export default function Page() {
  return <WebsitesLandingPagesPageClient />;
}