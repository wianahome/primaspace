import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://primaspace.id';

  const staticRoutes = [
    '',
    '/jasa-arsitek-bali',
    '/desain-interior-bali',
    '/kontraktor-bali',
    '/kontraktor-kolam-renang-bali',
    '/kitchen-set-bali',
    '/booth-pameran-bali',
    '/tentang-kami',
    '/kontak',
    '/blog',
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  // Load blog article data to include published posts
  const { blogArticles } = await import('./blog/blog-articles-data');
  const blogUrls = (blogArticles || [])
    .filter((a) => a.isPublished)
    .map((a) => ({
      url: `${baseUrl}/blog/${a.slug}`,
      lastModified: new Date(a.publishDate).toISOString(),
    }));

  return [...staticUrls, ...blogUrls];
}
