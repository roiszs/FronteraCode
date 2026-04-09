import type { Metadata } from "next";
import AutomatizacionPageClient from "./AutomatizacionPageClient";

export const metadata: Metadata = {
  title: "Automatización para empresas en Ciudad Juárez",
  description:
    "Diseñamos y desarrollamos automatizaciones para empresas que necesitan reducir trabajo manual, disminuir errores operativos y ejecutar procesos con más velocidad y consistencia.",
  alternates: {
    canonical: "/servicios/automatizacion",
  },
  openGraph: {
    title: "Automatización para empresas en Ciudad Juárez",
    description:
      "Automatizaciones para empresas que necesitan reducir trabajo manual, disminuir errores operativos y ejecutar procesos con más velocidad y consistencia.",
    url: "https://www.fronteracode.com/servicios/automatizacion",
    siteName: "FronteraCode",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "FronteraCode Automatización",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatización para empresas en Ciudad Juárez",
    description:
      "Diseñamos y desarrollamos automatizaciones para empresas que necesitan reducir trabajo manual, disminuir errores operativos y ejecutar procesos con más velocidad y consistencia.",
    images: ["/og.png"],
  },
};

export default function Page() {
  return <AutomatizacionPageClient />;
}