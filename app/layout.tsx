import "./globals.css";
import { Inter, Sora } from "next/font/google";
import { LanguageProvider } from "@/src/components/context/LanguageProvider";
import type { Metadata, Viewport } from "next";
import Script from "next/script";

const SITE_URL = "https://www.fronteracode.com";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "FronteraCode | Desarrollo de software en Ciudad Juárez",
    template: "%s | FronteraCode",
  },

  description:
    "Desarrollamos software a medida, sistemas internos, dashboards, automatización, e-commerce y websites para empresas en Ciudad Juárez, Chihuahua, México y Estados Unidos.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },

  openGraph: {
    title: "FronteraCode | Desarrollo de software en Ciudad Juárez",
    description:
      "Software a medida para empresas en Ciudad Juárez, México y Estados Unidos. Websites, sistemas internos, automatización y dashboards.",
    url: SITE_URL,
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
    title: "FronteraCode | Desarrollo de software en Ciudad Juárez",
    description:
      "Desarrollamos software a medida, sistemas internos, dashboards, automatización, e-commerce y websites para empresas en Ciudad Juárez, México y Estados Unidos.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FronteraCode",
    alternateName: "Frontera Code",
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
  };

  return (
    <html lang="es-MX" className={`${inter.variable} ${sora.variable}`}>
      <body className="bg-[#07060A] text-white antialiased overflow-x-hidden">
        <LanguageProvider>{children}</LanguageProvider>

        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
