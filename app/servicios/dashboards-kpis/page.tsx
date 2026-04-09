import type { Metadata } from "next";
import DashboardsKpisPageClient from "./DashboardsKpisPageClient";

export const metadata: Metadata = {
  title: "Dashboards y KPIs para empresas en Ciudad Juárez",
  description:
    "Diseñamos dashboards y estructuras de KPIs para empresas que necesitan visibilidad clara, mejor seguimiento y decisiones más rápidas con datos útiles.",
  alternates: {
    canonical: "/servicios/dashboards-kpis",
  },
  openGraph: {
    title: "Dashboards y KPIs para empresas en Ciudad Juárez",
    description:
      "Dashboards y KPIs para empresas que necesitan visibilidad clara, mejor seguimiento y decisiones más rápidas con datos útiles.",
    url: "https://www.fronteracode.com/servicios/dashboards-kpis",
    siteName: "FronteraCode",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "FronteraCode Dashboards y KPIs",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboards y KPIs para empresas en Ciudad Juárez",
    description:
      "Diseñamos dashboards y estructuras de KPIs para empresas que necesitan visibilidad clara, mejor seguimiento y decisiones más rápidas con datos útiles.",
    images: ["/og.png"],
  },
};

export default function Page() {
  return <DashboardsKpisPageClient />;
}