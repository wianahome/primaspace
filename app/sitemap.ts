import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://primaspace.id';

  const staticRoutes = [
    '/',
    '/kitchen-set-bali',
    '/desain-interior-bali',
    '/kontraktor-interior-bali',
    '/booth-pameran-bali',
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
