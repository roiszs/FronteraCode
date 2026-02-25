import "./globals.css";
import { Inter, Sora } from "next/font/google";
import { LanguageProvider } from "@/src/components/context/LanguageProvider";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  metadataBase: new URL("https://fronteracode.com"),

  title: {
    default: "FronteraCode | Desarrollo de software en México y USA",
    template: "%s | FronteraCode",
  },

  description:
    "Desarrollamos software a medida, sistemas internos, dashboards, automatización, e-commerce y websites para empresas en México y Estados Unidos.",

  keywords: [
    "desarrollo de software a medida",
    "custom software development Mexico",
    "nearshore software development",
    "software para empresas",
    "desarrollo web profesional",
    "automatización de procesos",
    "dashboards y KPIs",
    "ecommerce development",
  ],

  openGraph: {
    title: "FronteraCode | Custom software for real operations",
    description:
      "Software a medida para empresas en México y Estados Unidos. Websites, sistemas internos, automatización y dashboards.",
    url: "https://fronteracode.com",
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

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${sora.variable}`}>
      <body className="bg-[#07060A] text-white antialiased overflow-x-hidden">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
