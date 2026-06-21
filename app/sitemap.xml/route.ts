import { NextResponse } from 'next/server';
import { blogArticles } from '../blog/blog-articles-data'; // Sesuaikan path ke data blog Anda

export async function GET() {
  const baseUrl = 'https://primaspace.id';

  // 1. Daftar Halaman Statis
  const staticPages = [
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

  // 2. Generate baris XML untuk Halaman Statis
  const staticXml = staticPages
    .map((route) => {
      const priority = route === '' ? '1.0' : '0.8';
      return `
        <url>
          <loc>${baseUrl}${route}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${priority}</priority>
        </url>
      `;
    })
    .join('');

  // 3. Generate baris XML untuk Blog Dinamis
  const blogXml = blogArticles
    .map((article) => {
        const date = article.publishDate ? new Date(article.publishDate).toISOString() : new Date().toISOString();
      return `
        <url>
          <loc>${baseUrl}/blog/${article.slug}</loc>
          <lastmod>${date}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.6</priority>
        </url>
      `;
    })
    .join('');

  // 4. Bungkus semua ke dalam format sitemap XML yang sah
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticXml}
      ${blogXml}
    </urlset>
  `;

  // 5. Kirimkan response dengan Header 'application/xml' yang tegas!
  return new NextResponse(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}