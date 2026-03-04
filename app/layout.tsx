import "./globals.css";
import { Inter, Sora } from "next/font/google";
import { LanguageProvider } from "@/src/components/context/LanguageProvider";
import type { Metadata } from "next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fronteracode.com"),

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

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },

  openGraph: {
    title: "FronteraCode | Desarrollo de software en México y USA",
    description:
      "Software a medida para empresas en México y Estados Unidos. Websites, sistemas internos, automatización y dashboards.",
    url: "https://www.fronteracode.com",
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
    title: "FronteraCode | Desarrollo de software en México y USA",
    description:
      "Desarrollamos software a medida, sistemas internos, dashboards, automatización, e-commerce y websites para empresas en México y Estados Unidos.",
    images: ["/og.png"],
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

        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "FronteraCode",
              url: "https://www.fronteracode.com",
              logo: "https://www.fronteracode.com/icon.png",
            }),
          }}
        />
      </body>
    </html>
  );
}
