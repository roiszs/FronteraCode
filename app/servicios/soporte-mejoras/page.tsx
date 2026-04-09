import type { Metadata } from "next";
import SoporteMejorasPageClient from "./SoporteMejorasPageClient";

export const metadata: Metadata = {
  title: "Soporte y mejoras para productos digitales en Ciudad Juárez",
  description:
    "Ofrecemos soporte y mejoras para websites, tiendas, dashboards y sistemas que ya existen y necesitan cambios puntuales, correcciones o bloques definidos de refinamiento.",
  alternates: {
    canonical: "/servicios/soporte-mejoras",
  },
  openGraph: {
    title: "Soporte y mejoras para productos digitales en Ciudad Juárez",
    description:
      "Soporte y mejoras para websites, tiendas, dashboards y sistemas que ya existen y necesitan cambios puntuales, correcciones o bloques definidos de refinamiento.",
    url: "https://www.fronteracode.com/servicios/soporte-mejoras",
    siteName: "FronteraCode",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "FronteraCode Soporte y mejoras",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soporte y mejoras para productos digitales en Ciudad Juárez",
    description:
      "Ofrecemos soporte y mejoras para websites, tiendas, dashboards y sistemas que ya existen y necesitan cambios puntuales, correcciones o bloques definidos de refinamiento.",
    images: ["/og.png"],
  },
};

export default function Page() {
  return <SoporteMejorasPageClient />;
}