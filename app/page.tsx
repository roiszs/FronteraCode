import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Desarrollo de software en Ciudad Juárez para empresas",
  description:
    "FronteraCode desarrolla software a medida, sistemas internos, dashboards, automatización, e-commerce y websites para empresas en Ciudad Juárez, Chihuahua, México y Estados Unidos.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Desarrollo de software en Ciudad Juárez para empresas",
    description:
      "Software a medida, sistemas internos, dashboards, automatización, e-commerce y websites para empresas en Ciudad Juárez, Chihuahua, México y Estados Unidos.",
    url: "https://www.fronteracode.com/",
    siteName: "FronteraCode",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "FronteraCode",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo de software en Ciudad Juárez para empresas",
    description:
      "FronteraCode desarrolla software a medida, sistemas internos, dashboards, automatización, e-commerce y websites para empresas en Ciudad Juárez, Chihuahua, México y Estados Unidos.",
    images: ["/og.png"],
  },
};

export default function Page() {
  return <HomeClient />;
}