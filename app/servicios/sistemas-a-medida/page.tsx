import type { Metadata } from "next";
import SistemasAMedidaPageClient from "./SistemasAMedidaPageClient";

export const metadata: Metadata = {
  title: "Sistemas a medida para empresas en Ciudad Juárez",
  description:
    "Diseñamos y desarrollamos sistemas internos a medida para empresas que necesitan más control, mejor seguimiento, validaciones, trazabilidad y procesos más claros.",
  alternates: {
    canonical: "/servicios/sistemas-a-medida",
  },
  openGraph: {
    title: "Sistemas a medida para empresas en Ciudad Juárez",
    description:
      "Sistemas internos a medida para empresas que necesitan más control, seguimiento, trazabilidad y procesos más claros.",
    url: "https://www.fronteracode.com/servicios/sistemas-a-medida",
    siteName: "FronteraCode",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "FronteraCode Sistemas a Medida",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistemas a medida para empresas en Ciudad Juárez",
    description:
      "Diseñamos y desarrollamos sistemas internos a medida para empresas que necesitan más control, mejor seguimiento, validaciones, trazabilidad y procesos más claros.",
    images: ["/og.png"],
  },
};

export default function Page() {
  return <SistemasAMedidaPageClient />;
}