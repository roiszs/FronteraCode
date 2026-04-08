import type { Metadata } from "next";
import EcommercePageClient from "./EcommercePageClient";

export const metadata: Metadata = {
  title: "Desarrollo de e-commerce a medida en Ciudad Juárez",
  description:
    "Diseñamos y desarrollamos tiendas online a medida para negocios que necesitan vender mejor, verse más profesionales y operar con una base digital sólida.",
  alternates: {
    canonical: "/servicios/ecommerce",
  },
  openGraph: {
    title: "Desarrollo de e-commerce a medida en Ciudad Juárez",
    description:
      "Tiendas online a medida para negocios que necesitan vender mejor, escalar y apoyar su operación real.",
    url: "https://www.fronteracode.com/servicios/ecommerce",
    siteName: "FronteraCode",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "FronteraCode E-commerce",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo de e-commerce a medida en Ciudad Juárez",
    description:
      "Diseñamos y desarrollamos tiendas online a medida para negocios que necesitan vender mejor, verse más profesionales y operar con una base digital sólida.",
    images: ["/og.png"],
  },
};

export default function Page() {
  return <EcommercePageClient />;
}