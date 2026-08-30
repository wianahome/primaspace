import type { MetadataRoute } from 'next';
import { supabase } from './utils/supabase'; // Pastikan path utilitas Supabase benar

export const revalidate = 0; // Set 0 agar sitemap selalu mengambil data terbaru secara realtime

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://primaspace.id';

  // 1. Rute Statis
  const staticRoutes = [
    '',
    '/jasa-arsitek-bali',
    '/desain-interior-bali',
    '/kontraktor-bali',
    '/kontraktor-kolam-renang-bali',
    '/kitchen-set-bali',
    '/booth-pameran-bali',
    '/kanopi-bali',
    '/acp-bali',
    '/alumunium-bali',
    '/neonbox-bali',
    '/tentang-kami',
    '/kontak',
    '/blog',
  ];

  const staticUrls: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Fetch Artikel Dinamis dari Supabase (Dengan Filter Penjadwalan)
  let blogUrls: MetadataRoute.Sitemap = [];

  try {
    const nowIso = new Date().toISOString();

    const { data: blogArticles, error } = await supabase
      .from('psp_articles')
      .select('slug, published_at')
      .or('is_published.eq.true,is_published.is.null') // Menampilkan yang dipublish
      .lte('published_at', nowIso); // HANYA AMBIL ARTIKEL YANG SUDAH TERBIT (<= JAM SEKARANG)

    if (error) {
      console.error('Error fetching sitemap articles:', error.message);
    } else if (blogArticles && blogArticles.length > 0) {
      blogUrls = blogArticles.map((article) => ({
        url: `${baseUrl}/blog/${article.slug}`,
        // Menggunakan tanggal terbit artikel sebagai lastModified agar disukai Google
        lastModified: article.published_at ? new Date(article.published_at) : new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      }));
    }
  } catch (err) {
    console.error('Sitemap fetch failed:', err);
  }

  return [...staticUrls, ...blogUrls];
}