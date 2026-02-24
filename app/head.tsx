export default function Head() {
    const siteUrl = "https://fronteracode.com";
  
    const orgJsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "FronteraCode",
      url: siteUrl,
      logo: `${siteUrl}/brand/sinFondo.png`,
    };
  
    return (
      <>
        <title>FronteraCode</title>
        <meta
          name="description"
          content="Diseñamos y desarrollamos productos digitales para PyMEs, e-commerce y maquilas: sistemas internos, dashboards, automatización y sitios web modernos."
        />
  
        {/* ✅ Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FronteraCode" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="FronteraCode" />
        <meta
          property="og:description"
          content="Software real para operación real: sistemas, dashboards, automatización y sitios web modernos."
        />
        <meta property="og:image" content={`${siteUrl}/brand/sinFondo.png`} />
  
        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FronteraCode" />
        <meta
          name="twitter:description"
          content="Software real para operación real: sistemas, dashboards, automatización y sitios web modernos."
        />
        <meta name="twitter:image" content={`${siteUrl}/brand/sinFondo.png`} />
  
        {/* ✅ Structured Data (logo para Google) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </>
    );
  }