import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fronteracode.com'

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#servicios`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#proceso`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#faq`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#contacto`,
      lastModified: new Date(),
    },
  ]
}