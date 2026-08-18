import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard/', '/invoice/', '/quotation/'],
    },
    sitemap: 'https://primaspace.id/sitemap.xml',
  }
}